import React from "react";

import Sponsor, { SponsorProps } from "../Sponsor";

interface SponsorsContainerProps {
  sponsors: SponsorProps[];
}
const SponsorsContainer: React.FC<SponsorsContainerProps> = ({ sponsors }) => {
  return (
    <section className="flex flex-col items-center justify-center pb-12">
      <div className="flex w-full flex-wrap items-center justify-around">
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
