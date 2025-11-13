"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  /** Optional absolute or relative path to navigate to instead of router.back() */
  target?: string;
  /** Optional company tier to store and navigate to main page without adding a hash to the URL */
  tier?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ target, tier }) => {
  const router = useRouter();
  const handleClick = () => {
    // explicit target takes precedence
    if (target) {
      router.push(target);
      return;
    }

    // if we previously saved the main page scroll path, go there so the
    // CompaniesSection can restore exact scroll position. This handles reload
    // -> voltar flows deterministically.
    try {
      const savedPath = sessionStorage.getItem("companiesScrollPath");
      if (savedPath) {
        router.push(savedPath);
        return;
      }
    } catch (err) {
      // ignore and fallback to router.back()
    }

    // if we have an explicit tier (deep-linked company pages), store it so
    // the main page can scroll to the tier section after navigation to '/'
    if (tier) {
      try {
        sessionStorage.setItem("companiesTargetTier", tier.toLowerCase());
      } catch (err) {
        // ignore
      }
      router.push("/");
      return;
    }

    router.back();
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-6 left-6 cursor-pointer rounded px-2 py-1 text-base text-[#636463] hover:text-white"
      aria-label="voltar"
    >
      &larr; voltar
    </button>
  );
};

export default BackButton;
