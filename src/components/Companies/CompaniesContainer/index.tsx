import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import { CompaniesTier } from "../../../utils/GetColorTier";
import Company, { CompanyProps } from "../Company";

interface CompaniesContainerProps {
  tier: CompaniesTier;
  companies: CompanyProps[];
}

const CompaniesContainer: FunctionComponent<CompaniesContainerProps> = ({
  tier,
  companies,
}) => {
  const getTierStyling = (tier: CompaniesTier): string => {
    switch (tier) {
      case "Diamond":
        return `inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400`;
      case "Gold":
        return `inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-yellow-300`;
      case "Silver":
        return "inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-slate-100";
      case "Bronze":
        return "inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-yellow-500";
      default:
        throw new Error("Tier not found");
    }
  };

  return (
    <motion.div className="flex flex-col items-center justify-center">
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen flex flex-col items-center gap-y-10 bg-[#151415] border-[#2d2c2d] border-2 text-center py-16">
        <div className="z-0 mx-2 flex flex-wrap items-center justify-center gap-4 py-3">
          <h2 className="text-center text-4xl font-semibold text-white md:text-5xl">
            Parceiros
          </h2>
          <span className={`${getTierStyling(tier)} text-4xl font-semibold leading-tight md:text-5xl`}>
            {tier}
          </span>
        </div>
        <div className="my-2 w-full flex flex-wrap justify-center gap-8">
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
