// components/CustomFooter.tsx
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";

export function CustomFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-8 py-8">
        {/* Main footer content */}
        <div className="flex items-center justify-between">
          {/* NEI-ISEP logo - Left side */}
          <div className="flex items-center">
            <Image
              src="/assets/images/logo-white.png"
              alt="NEI-ISEP"
              width={160}
              height={53}
              className="h-auto w-auto"
            />
          </div>
          
          {/* Social icons - Right side */}
          <div className="flex items-center gap-4">
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
        
        {/* Copyright text - Centered below */}
        <div className="mt-6 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-white/50">
            Copyright (c) {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}