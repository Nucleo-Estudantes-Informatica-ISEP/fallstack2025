// components/CustomFooter.tsx
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";

export function CustomFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-gray-950 p-8 py-8 text-white">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center justify-center gap-2">
          {/* NEI-ISEP logo */}
          <Image
            src="/assets/images/logo-white.png"
            alt="NEI-ISEP"
            width={120}
            height={40}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="https://pt.linkedin.com/company/nei-isep" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-6 w-6 text-white/70 transition-colors hover:text-white" />
          </Link>
          <Link href="https://www.facebook.com/nei.isep" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-6 w-6 text-white/70 transition-colors hover:text-white" />
          </Link>
          <Link href="https://www.instagram.com/nei_isep/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 text-white/70 transition-colors hover:text-white" />
          </Link>
          <Link href="https://x.com/nei_isep/" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="h-6 w-6 text-white/70 transition-colors hover:text-white" />
          </Link>
          <Link href="https://nei-isep.pt" target="_blank" rel="noopener noreferrer">
            <FaLink className="h-6 w-6 text-white/70 transition-colors hover:text-white" />
          </Link>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-white/50">
        Copyright (c) {currentYear}. All rights reserved.
      </p>
    </footer>
  );
}