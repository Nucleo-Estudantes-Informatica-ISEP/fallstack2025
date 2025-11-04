import { FunctionComponent } from "react";

import { DiamondCompanies } from "@/utils/DiamondCompanies";
import { GoldCompanies } from "@/utils/GoldCompanies";
import { SilverCompanies } from "@/utils/SilverCompanies";

import CompaniesContainer from "../CompaniesContainer";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="border-y-secondary flex flex-col items-center border-y text-center">
      <CompaniesContainer companies={DiamondCompanies} tier="diamond" />
      <CompaniesContainer companies={GoldCompanies} tier="gold" />
      <CompaniesContainer companies={SilverCompanies} tier="silver" />
    </section>
  );
};

export default CompaniesSection;
