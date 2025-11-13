import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";

import FactData from "@/types/FactData";
import BackButton from "@/components/BackButton";
import { Facebook, Instagram, Linkedin, Twitter } from "@/styles/Icons";

import { CompanyProps } from "../Company";
import CompanyInfo from "../CompanyInfo";

interface CompanyPageSectionProps {
  company: {
    props: CompanyProps;
    tier: string;
  };
  modalInformation: {
    title: string;
    bodyText: ReactNode;
    videoHref?: string;
    videoTitle?: string;
    twitterLink?: string;
    facebookLink?: string;
    instagramLink?: string;
    youtubeLink?: string;
    linkedinLink?: string;
    website?: string;
    facts?: FactData[];
  };
  interests: string[];
}

const CompanyPageSection: React.FC<CompanyPageSectionProps> = ({
  company,
  modalInformation,
  interests,
}) => {
  const logoSrc =
    company.props.logoHref && typeof company.props.logoHref !== "string"
      ? (company.props.logoHref as any).src
      : company.props.logoHref;
  // Determine per-company max-width overrides so some logos (ArmIS, Convatec, NiW)
  // can be rendered larger while not exceeding the visual max (Hitachi).
  const companyName = (company.props.name || "").toLowerCase();
  const logoWidths = (() => {
    // default: fairly wide but constrained
    let small = "max-w-[70%]";
    let md = "md:max-w-[60%]";
    if (companyName.includes("hitachi")) {
      small = "max-w-[85%]";
      md = "md:max-w-[75%]";
    } else if (
      companyName.includes("apr") ||
      companyName.includes("deloitte") ||
      companyName.includes("devscope")
    ) {
      small = "max-w-[80%]";
      md = "md:max-w-[70%]";
    } else if (
      companyName.includes("armis") ||
      companyName.includes("convatec") ||
      companyName.includes("niw")
    ) {
      // increase these so their visible marks are larger
      small = "max-w-[75%]";
      md = "md:max-w-[65%]";
    }
    return { small, md };
  })();
  return (
    <div className="mt-20 size-full items-center justify-center md:my-20">
      <div className="mt-8 mb-12 flex size-full flex-col items-center">
        {/* black card containing logo, socials and info */}
        <div className="relative w-full max-w-7xl bg-[#111111] p-6 pb-8 md:p-10 md:pb-16">
          {/* client-side back button: return to the main page section for Diamond/Gold tiers only.
              Silver companies redirect externally and don't need a main-page target. */}
          {company.tier && company.tier !== "Silver" ? (
            <BackButton tier={company.tier} />
          ) : (
            <BackButton />
          )}
          <div className="flex flex-col items-center justify-center pt-8">
            {company.props.logoHref ? (
              <div className="relative my-6 flex flex-col items-center">
                {/* fixed-height spacer so the distance from the top of the card to the social icons
                    is always the same regardless of the logo's intrinsic size */}
                <div className="flex h-[100px] items-center justify-center md:h-[160px]">
                  {/*
                    Height-driven logo sizing:
                    - the wrapper has a fixed height (the reserved space)
                    - the image is constrained by max-height:100% so it always fills that vertical space
                    - max-width caps (percentage-based) prevent very wide wordmarks from growing too large
                  */}
                  <img
                    src={logoSrc as string}
                    alt="profile image"
                    className={`mx-auto block max-h-full w-auto object-contain ${logoWidths.small} ${logoWidths.md}`}
                  />
                </div>
              </div>
            ) : (
              <Skeleton circle={true} height={120} width={120} />
            )}
            {/* only the icon is shown; company name intentionally omitted */}
            <p className="flex gap-x-4 pt-4 text-white">
              {modalInformation.linkedinLink && (
                <Link
                  href={modalInformation.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-6 transition-all hover:scale-105 hover:drop-shadow-2xl md:size-8" />
                </Link>
              )}
              {modalInformation.facebookLink && (
                <Link
                  href={modalInformation.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="size-6 transition-all hover:scale-105 hover:drop-shadow-2xl md:size-8" />
                </Link>
              )}
              {modalInformation.instagramLink && (
                <Link
                  href={modalInformation.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="size-6 transition-all hover:scale-105 hover:drop-shadow-2xl md:size-8" />
                </Link>
              )}
              {modalInformation.twitterLink && (
                <Link
                  href={modalInformation.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="size-6 transition-all hover:scale-105 hover:drop-shadow-2xl md:size-8" />
                </Link>
              )}
              {modalInformation.website && (
                <Link
                  href={modalInformation.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLink className="size-6 transition-all hover:scale-105 hover:drop-shadow-2xl md:size-8" />
                </Link>
              )}
            </p>
          </div>

          <div className="mt-8">
            <CompanyInfo
              companyName={company.props.name}
              bodyText={modalInformation.bodyText}
              videoHref={modalInformation.videoHref}
              videoTitle={modalInformation.videoTitle}
              tier={company.tier}
              interests={interests}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPageSection;
