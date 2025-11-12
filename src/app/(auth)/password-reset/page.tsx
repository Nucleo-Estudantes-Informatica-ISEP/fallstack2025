"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import swal from "sweetalert";

import { BASE_URL } from "@/services/api";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

const RequestResetPage: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setError(null);
    if (!emailRef.current?.value) return setError("Insere o teu email.");

    setLoading(true);
    try {
      const res = await fetch(BASE_URL + "/auth/password-reset-request", {
        method: "POST",
        body: JSON.stringify({ email: emailRef.current?.value }),
      });

      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Algo correu mal");
        setLoading(false);
        return;
      }

      swal(
        "Pedido enviado",
        "Se a conta existir, receberás um email com instruções.",
        "success"
      );
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError("Erro de servidor");
      setLoading(false);
    }
  };

  const form = (
    <section className="flex w-full flex-col md:mt-12">
      <h2
        className="mb-6 w-full text-center text-[30px] font-semibold text-white md:text-left md:text-[45px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Recuperar Password
      </h2>

      <Input
        name="Email"
        inputRef={emailRef}
        className="!rounded-none !border-[rgba(255,255,255,0.35)] bg-transparent px-3 py-3 text-white placeholder:text-gray-500"
      />

      {error && (
        <motion.p
          className="mt-1 text-sm font-bold text-red-600"
          animate={{ y: [-10, 0] }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}

      <PrimaryButton
        loading={loading}
        onClick={handleClick}
        className="mt-8 w-full cursor-pointer !rounded-none !px-3 py-4 !text-[19px] font-semibold !tracking-normal"
      >
        Enviar e-mail de recuperação
      </PrimaryButton>
    </section>
  );

  return (
    <>
      <div className="relative min-h-screen px-4 md:hidden">
        <div
          className="absolute inset-x-0 top-0"
          // bring the inner container closer to the bottom so the form sits
          // nearer the screen edge on mobile devices
          style={{ bottom: "clamp(0rem, 1.5vh, 0.5rem)" }}
        >
          <div className="mx-auto flex h-full max-w-[420px] flex-col justify-between px-2">
            <div
              className="flex justify-center pt-6"
              style={{
                marginTop: "clamp(54px, 33vh, 270px)",
                paddingTop: "env(safe-area-inset-top)",
              }}
            >
              <Image
                src="/assets/images/logo_white.png"
                alt="Fallstack"
                width={220}
                height={90}
                priority
                sizes="(max-width: 640px) 54vw, 320px"
                style={{
                  width: "clamp(140px, 48vw, 420px)",
                  height: "auto",
                  maxHeight: "32vh",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* push the whole form lower so input and button are closer to the bottom edge */}
            <div className="w-full pb-0">{form}</div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">{form}</div>
    </>
  );
};

export default RequestResetPage;
