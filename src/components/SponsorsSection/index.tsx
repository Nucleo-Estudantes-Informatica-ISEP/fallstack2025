"use client";

import { FunctionComponent } from "react";

import HeadingText from "@/components/HeadingText";
import SponsorsContainer from "@/components/SponsorsContainer";
import { Sponsors } from "@/utils/Sponsors";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center gap-y-10 text-center md:gap-y-16">
      <HeadingText className={"text-3xl md:text-5xl"} text="Agradecimentos" />
      <SponsorsContainer sponsors={Sponsors} />
    </section>
  );
};

export default CompaniesSection;
