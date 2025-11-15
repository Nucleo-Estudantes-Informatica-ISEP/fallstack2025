"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { logIn } from "@/lib/auth";
import useSession from "@/hooks/useSession";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

const LoginPage: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [pwError, setPwError] = useState<string | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    setEmailError(null);
    setPwError(null);

    let error = false;

    if (!emailRef.current?.value) {
      error = true;
      setEmailError("Insere o teu email.");
    }

    if (!passwordRef.current?.value) {
      error = true;
      setPwError("Insere a tua password.");
    }

    if (error) return;

    setLoading(true);

    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    if (await logIn(email, password)) {
      session.fetchSession();
      router.push("/");
      return router.refresh();
    }

    setEmailError("Email ou password incorretos.");
    setPwError("Email ou password incorretos.");
    setLoading(false);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleClick();
  };

  // Extract the form so we can reuse it in both mobile and desktop wrappers
  const form = (
    <section className="flex w-full flex-col md:mt-0">
      <h1
        className="mb-4 w-full text-center text-[24px] font-semibold text-white md:text-left md:text-[45px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Iniciar Sessão
      </h1>

      <div className="w-full">
        <Input
          name="Email"
          inputRef={emailRef}
          autoFocus={!!emailError}
          onKeyUp={handleKeyUp}
          className="!rounded-none !border-[rgba(255,255,255,0.35)] bg-transparent px-3 py-2 text-white placeholder:text-gray-500 sm:py-3"
        />
      </div>

      {emailError && (
        <motion.p
          className="mt-1 text-sm font-bold text-red-600"
          animate={{
            y: [-15, 0],
          }}
          transition={{
            ease: "easeOut",
            duration: 0.2,
          }}
        >
          {emailError}
        </motion.p>
      )}

      <span className="mt-3"></span>

      <div className="mt-4 w-full">
        <Input
          name="A tua palavra-passe"
          type="password"
          inputRef={passwordRef}
          autoFocus={!!pwError}
          onKeyUp={handleKeyUp}
          className="!rounded-none !border-[rgba(255,255,255,0.35)] bg-transparent px-3 py-2 text-white placeholder:text-gray-500 sm:py-3"
        />
      </div>

      {pwError && (
        <motion.p
          className="mt-1 text-sm font-bold text-red-600"
          animate={{
            y: [-15, 0],
          }}
          transition={{
            ease: "easeOut",
            duration: 0.2,
          }}
        >
          {pwError}
        </motion.p>
      )}

      <div className="mt-2 w-full">
        <div className="mb-6 w-full text-right">
          <Link
            href="/password-reset"
            className="text-sm text-gray-400 underline"
          >
            Esqueci-me da palavra-passe
          </Link>
        </div>

        <PrimaryButton
          loading={loading}
          onClick={handleClick}
          className="w-full cursor-pointer !rounded-none !px-3 py-3 !text-[17px] font-semibold !tracking-normal sm:py-4 sm:!text-[19px]"
        >
          Login
        </PrimaryButton>
      </div>
      <div className="mt-6 w-full">
        <div className="mb-3 text-center text-sm text-gray-400">
          Ainda não tens uma conta?
        </div>
        <PrimaryButton
          className="w-full cursor-pointer !rounded-none !px-3 py-3 !text-[17px] font-semibold !tracking-normal sm:py-4 sm:!text-[19px]"
          onClick={() => router.push("/signup")}
        >
          Criar uma conta
        </PrimaryButton>
      </div>
    </section>
  );

  // Mobile wrapper: compact single-screen layout; hidden on md+
  // Desktop wrapper: show the original form (keeps layout unchanged)
  return (
    <>
      <div className="relative min-h-screen px-4 md:hidden">
        {/* Anchor the whole auth block to the bottom so distance to bottom is constant */}
        <div className="absolute bottom-20 left-1/2 w-full max-w-[420px] -translate-x-1/2 px-2">
          {/* Icon is dynamic: width depends on viewport but capped with maxWidth */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/assets/images/logo_white.svg"
              alt="Fallstack"
              width={220}
              height={90}
              priority
              className="h-auto"
              style={{ width: "36vw", maxWidth: "220px" }}
            />
          </div>

          {/* The entire block is anchored to the bottom; the form will appear above the fixed bottom spacing */}
          <div className="w-full">{form}</div>
        </div>
      </div>

      <div className="hidden md:block">{form}</div>
    </>
  );
};

export default LoginPage;
