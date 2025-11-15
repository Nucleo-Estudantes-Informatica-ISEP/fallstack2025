"use client";

import { FunctionComponent } from "react";

import FaqContainer from "@/components/Faq/FaqContainer";
import HeadingText from "@/components/HeadingText";
import { FAQ } from "@/utils/FAQ";

const FaqSection: FunctionComponent = () => {
  return (
    <section className="mb-12 w-full">
      <HeadingText text="FAQ" />
      <FaqContainer faqs={FAQ} />
    </section>
  );
};

export default FaqSection;
