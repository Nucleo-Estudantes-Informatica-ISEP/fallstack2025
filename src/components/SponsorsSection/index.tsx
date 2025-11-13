import { FunctionComponent } from "react";

import { Sponsors } from "../../utils/Sponsors";
import HeadingText from "../HeadingText";
import SponsorsContainer from "../SponsorsContainer";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen flex flex-col items-center gap-y-10 bg-[#151415] border-[#2d2c2d] border-2 text-center py-16">
      <HeadingText className={"text-3xl md:text-5xl text-[#484947]"} text="Agradecimentos" />
      <SponsorsContainer sponsors={Sponsors} />
    </section>
  );
};

export default CompaniesSection;
