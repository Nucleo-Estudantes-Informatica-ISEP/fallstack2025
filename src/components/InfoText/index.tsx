"use client";

import { motion } from "framer-motion";

import { QuestionCircle } from "@/styles/Icons";

import EventInfos from "../EventInfos/index";
import HeadingText from "../HeadingText";
import PrimaryLinkButton from "../PrimaryLinkButton";

interface InfoTextProps {
  days: number[];
  month: string;
  year: number;
  beginningTime: string;
  endTime: string;
}

const InfoText: React.FC<InfoTextProps> = ({
  days,
  month,
  year,
  beginningTime,
  endTime,
}) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        marginRight: -500,
      }}
      whileInView={{
        marginRight: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col items-center text-xl lg:flex-row lg:justify-between lg:px-20"
    >
      <EventInfos
        days={days}
        month={month}
        year={year}
        beginningTime={beginningTime}
        endTime={endTime}
      />

      <PrimaryLinkButton
        loading={false}
        href="/location"
        className="gap-2 !px-2 !py-3 font-semibold lg:mt-0 lg:self-center"
      >
        <QuestionCircle /> Como chegar?
      </PrimaryLinkButton>
    </motion.section>
  );
};

export default InfoText;
