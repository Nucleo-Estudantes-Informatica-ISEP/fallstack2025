import React, { useId } from "react";

import FactData from "@/types/FactData";
import CompanyDescription from "@/components/Companies/CompanyDescription";

import FactSection from "../FactSection";

interface CompanyInfoProps {
  companyName?: string;
  bodyText: React.ReactNode;
  videoHref: string | undefined;
  videoTitle: string | undefined;
  tier: string;
  interests?: string[];
  facts?: FactData[];
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyName,
  bodyText,
  videoHref,
  videoTitle,
  interests,
  facts,
  tier,
}) => {
  return (
    <section className="mx-auto w-full rounded-md bg-transparent p-0 pb-4 text-white sm:w-full md:pb-8 lg:p-0">
      {bodyText && (
        <CompanyDescription>
          <h1 className="mb-4 text-left text-xl font-normal tracking-wide text-white normal-case sm:text-3xl md:text-4xl lg:text-5xl">
            Sobre a {companyName || ""}
          </h1>
          <div className="text-left font-light text-slate-300 md:text-lg lg:text-xl">
            {bodyText}
          </div>
        </CompanyDescription>
      )}
      {facts && <FactSection facts={facts} />}
      {tier === "Diamond" && (
        <div className="mt-10 flex flex-col space-y-2 leading-8 lg:px-10 lg:text-lg">
          <h1 className="mb-4 w-full text-left text-xl font-normal tracking-wide text-white normal-case sm:text-3xl md:text-4xl lg:text-5xl">
            {videoTitle || "Video Promocional"}
          </h1>
          <div
            className="flex w-full items-center justify-center"
            key={useId()}
          >
            <iframe
              className="my-2.5 aspect-video w-full max-w-full rounded-lg bg-slate-700"
              src={videoHref}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="px-4 md:px-10">
        <h1 className="mt-8 mb-4 text-left text-xl font-normal tracking-wide text-white normal-case sm:text-3xl md:text-4xl lg:text-5xl">
          Interesses
        </h1>
        {interests && interests.length > 0 ? (
          <div className="flex w-full flex-wrap gap-6">
            {interests.map((interest) => (
              <div
                key={interest}
                className="relative flex min-w-[120px] items-center justify-center rounded-none border border-[#636463] px-5 py-2.5 text-center text-sm text-white"
              >
                {interest}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex w-full flex-wrap gap-4">
            <div className="relative py-1 text-white">
              Sem interesses definidos...
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanyInfo;
