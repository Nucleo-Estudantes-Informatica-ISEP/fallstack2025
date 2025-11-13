"use client";

import { FunctionComponent, useEffect } from "react";

import { DiamondCompanies } from "@/utils/DiamondCompanies";
import { GoldCompanies } from "@/utils/GoldCompanies";
import { SilverCompanies } from "@/utils/SilverCompanies";

import HeadingText from "../../HeadingText";
import CompaniesContainer from "../CompaniesContainer";

const CompaniesSection: FunctionComponent = () => {
  useEffect(() => {
    // restore exact scroll position saved before navigating to a company page
    try {
      const savedPath = sessionStorage.getItem("companiesScrollPath");
      const saved = sessionStorage.getItem("companiesScroll");
      if (saved && savedPath === window.location.pathname) {
        const y = parseInt(saved, 10);
        if (!Number.isNaN(y)) {
          window.scrollTo({ top: y, left: 0 });
        }
        sessionStorage.removeItem("companiesScroll");
        sessionStorage.removeItem("companiesScrollPath");
        return;
      }
    } catch (err) {
      // ignore
    }

    // if a company page stored a target tier (deep-link fallback), scroll to it
    try {
      const target = sessionStorage.getItem("companiesTargetTier");
      if (target) {
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          sessionStorage.removeItem("companiesTargetTier");
        }, 50);
        return;
      }
    } catch (err) {
      // ignore
    }

    // if there's a hash (e.g. #diamond) navigate to that section on first load
    try {
      const hash = window.location.hash;
      if (hash) {
        // use a small timeout so layout finishes rendering
        setTimeout(() => {
          const id = hash.replace("#", "");
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 50);
      }
    } catch (err) {
      // ignore
    }
  }, []);

  return (
    <section className="flex flex-col items-center gap-y-10 text-center md:gap-y-16">
      <HeadingText text="Empresas" />
      <CompaniesContainer companies={DiamondCompanies} tier="Diamond" />
      <CompaniesContainer companies={GoldCompanies} tier="Gold" />
      <CompaniesContainer companies={SilverCompanies} tier="Silver" />
    </section>
  );
};

export default CompaniesSection;
