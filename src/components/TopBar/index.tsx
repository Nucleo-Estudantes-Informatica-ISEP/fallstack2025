"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

import useSession from "@/hooks/useSession";
import { LogIn } from "@/styles/Icons";

import LogoutButton from "../LogoutButton";
import UserButton from "../Profile/UserButton";
import QRCodeButton from "../QRCode/QRCodeButton";

const TopBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const session = useSession();
  const pathname = usePathname();
  // Hide certain TopBar elements on auth pages (those inside the (auth) group)
  const isAuthPage = Boolean(
    pathname &&
      ["/login", "/signup", "/password-reset"].some((p) =>
        pathname.startsWith(p)
      )
  );
  const opacity = useTransform(() => scrollYProgress.get() * 2.2);

  return (
    <nav className={`fixed z-40 h-16 w-full overflow-hidden`}>
      <motion.div
        className={`bg-topbar absolute top-0 left-0 flex h-16 w-screen items-center justify-between`}
        style={{
          opacity,
        }}
      />
      <div className="absolute top-2 right-4 flex h-12 w-full items-center justify-between space-x-4 px-4 py-2">
        {!isAuthPage && (
          <Link href="/" className="ml-6">
            <Image
              src={"/assets/images/logo_white.png"}
              alt="Fallstack"
              width={32}
              height={32}
            />
          </Link>
        )}
        <div className="flex items-center gap-x-4">
          {!session.user ? (
            !isAuthPage && (
              <Link
                href="/login"
                className="hover:text-primary z-20 flex size-full items-center justify-center fill-white text-2xl transition-colors"
              >
                <LogIn />
              </Link>
            )
          ) : (
            <>
              <QRCodeButton user={session.user} />
              <UserButton user={session.user} />
              <LogoutButton />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
