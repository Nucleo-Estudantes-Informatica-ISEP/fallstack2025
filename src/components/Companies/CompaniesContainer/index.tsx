import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import { CompaniesTier, getTierStyling } from "../../../utils/GetColorTier";
import Company, { CompanyProps } from "../Company";

interface CompaniesContainerProps {
  tier: CompaniesTier;
  companies: CompanyProps[];
}

const CompaniesContainer: FunctionComponent<CompaniesContainerProps> = ({
  tier,
  companies,
}) => {
  return (
    <motion.div className="flex flex-col items-center justify-center py-12">
      <h2 className="z-0 mx-2 mb-8 text-center text-5xl lg:mb-4">
        <span className={`${getTierStyling(tier)}`}>
          <span className="text-secondary">Parceiros</span> {tier}
        </span>
      </h2>
      <section className={`w-full rounded-3xl`}>
        <div className="my-2 grid w-full grid-cols-1 place-items-center gap-8 md:flex md:flex-wrap md:items-center md:justify-center">
          {companies.map((company) => (
            <Company
              key={company.name}
              {...company}
              className={
                companies.length % 2 !== 0 &&
                companies.findIndex((c) => c.name === company.name) ===
                  companies.length - 1
                  ? "xl:col-span-2"
                  : ""
              }
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default CompaniesContainer;
