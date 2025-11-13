import React from "react";

import Sponsor, { SponsorProps } from "../Sponsor";

interface SponsorsContainerProps {
  sponsors: SponsorProps[];
}
const SponsorsContainer: React.FC<SponsorsContainerProps> = ({ sponsors }) => {
  return (
    <section

    >
      <div className="mx-auto flex w-full flex-wrap gap-8 items-center justify-around md:w-5/6">
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
