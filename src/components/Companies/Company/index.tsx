"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { CompaniesTier } from "@/utils/GetColorTier";

import { ModalInformation } from "../../../types/ModalProps";

export interface CompanyProps {
  logoHref: StaticImageData;
  name: string;
  websiteUrl?: string;
  modalInformation?: ModalInformation;
  tier?: CompaniesTier;
  className?: string;
  interests?: string[];
  divClassName?: string;
}

const Company: React.FC<CompanyProps> = ({
  logoHref,
  name,
  websiteUrl,
  className,
  divClassName,
}) => {
  return (
    <div
      className={`${divClassName} flex size-4/6 min-h-32 items-center justify-center justify-items-center transition duration-300 ease-in-out hover:scale-105 lg:min-h-44`}
    >
      <Link
        rel="noreferrer"
        href={websiteUrl ? websiteUrl : "/company/" + name}
        target={websiteUrl ? "_blank" : "_self"}
        className="flex items-center justify-center"
        onClick={(e) => {
          // only store scroll position for internal navigation so we can restore
          // the exact Y offset when the user returns from a company page.
          if (!websiteUrl) {
            try {
              sessionStorage.setItem("companiesScroll", String(window.scrollY));
              sessionStorage.setItem(
                "companiesScrollPath",
                window.location.pathname
              );
            } catch (err) {
              // ignore
            }
          }
        }}
      >
        <Image
          className={`${className} object-cover`}
          src={logoHref}
          alt={name}
        />
      </Link>
    </div>
  );
};

export default Company;
