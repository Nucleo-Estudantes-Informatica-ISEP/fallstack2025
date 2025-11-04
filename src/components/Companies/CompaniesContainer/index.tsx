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
    <motion.div className="border-y-secondary flex flex-col items-center justify-center border-y py-12">
      <h2 className="z-0 mx-2 mb-8 text-center text-5xl lg:mb-4">
        <span className={`${getTierStyling(tier)}`}>
          <span className="text-secondary">Parceiros</span> {tier}
        </span>
      </h2>
      <section className={`mb-12 w-full rounded-3xl p-4 md:w-5/6 md:p-8`}>
        <div className="my-2 flex flex-wrap items-center justify-evenly gap-x-12 gap-y-2 xl:grid-cols-4">
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
