import { FunctionComponent } from "react";

import { DiamondCompanies } from "@/utils/DiamondCompanies";
import { GoldCompanies } from "@/utils/GoldCompanies";
import { SilverCompanies } from "@/utils/SilverCompanies";
import { BronzeCompanies } from "@/utils/BronzeCompanies";
import HeadingText from "../../HeadingText";
import CompaniesContainer from "../CompaniesContainer";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <CompaniesContainer companies={DiamondCompanies} tier="Diamond" />
      <CompaniesContainer companies={GoldCompanies} tier="Gold" />
      <CompaniesContainer companies={SilverCompanies} tier="Silver" />
      <CompaniesContainer companies={BronzeCompanies} tier="Bronze" />
    </section>
  );
};

export default CompaniesSection;
