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
    <motion.div className="flex flex-col items-center border-b-1 w-full border-secondary justify-center py-8 md:py-12 lg:py-16">
      <h2 className="z-0 mx-2 mb-8 text-center text-5xl lg:mb-4">
        <span className="text-secondary">Parceiros</span>{" "}
        <span className={`${getTierStyling(tier)}`}>{tier}</span>
      </h2>
      <section className={`w-full rounded-3xl`}>
        <div className="my-2 grid w-full grid-cols-1 place-items-center gap-12 md:flex md:flex-wrap md:items-center md:justify-center md:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center"
            >
              <Company {...company} />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default CompaniesContainer;
