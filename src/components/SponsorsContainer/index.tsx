"use client";

import React from "react";

import Sponsor, { SponsorProps } from "@/components/Sponsor";

interface SponsorsContainerProps {
  sponsors: SponsorProps[];
}
const SponsorsContainer: React.FC<SponsorsContainerProps> = ({ sponsors }) => {
  return (
    <section
      className="mx-auto mb-12 w-full rounded-3xl  border-2 border-black/50 bg-white/20 p-4 md:w-5/6 
        md:p-8"
    >
      <div className="mx-auto flex w-full flex-wrap items-center justify-around md:w-4/5">
        {sponsors.map(({ name, logoHref, website }) => (
          <Sponsor
            key={name}
            logoHref={logoHref}
            name={name}
            website={website}
          />
        ))}
      </div>
    </section>
  );
};

export default SponsorsContainer;
