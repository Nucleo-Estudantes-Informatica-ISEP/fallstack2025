import { FunctionComponent } from "react";

import { DiamondCompanies } from "@/utils/DiamondCompanies";
import { GoldCompanies } from "@/utils/GoldCompanies";
import { SilverCompanies } from "@/utils/SilverCompanies";

import CompaniesContainer from "../CompaniesContainer";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="*:border-y-secondary !last:border-b-0 !first:border-t-0 flex w-full flex-col text-center *:border-y *:px-10 sm:*:px-42">
      <CompaniesContainer companies={DiamondCompanies} tier="diamond" />
      <CompaniesContainer companies={GoldCompanies} tier="gold" />
      <CompaniesContainer companies={SilverCompanies} tier="silver" />
      <CompaniesContainer companies={SilverCompanies} tier="bronze" />
    </section>
  );
};

export default CompaniesSection;
