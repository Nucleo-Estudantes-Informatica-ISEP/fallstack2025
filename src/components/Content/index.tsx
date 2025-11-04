import { ScheduleDays } from "../../utils/ScheduleDays";
import CompaniesSection from "../Companies/CompaniesSection";
import FaqSection from "../Faq/FaqSection";
import HeadingText from "../HeadingText";
import InfoText from "../InfoText";
import PassSection from "../NewsSection";
import Schedule from "../Schedule";
import SponsorsSection from "../SponsorsSection";

interface ContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const Content: React.FC<ContentProps> = ({ contentRef }) => {
  return (
    <>
      <section
        ref={contentRef}
        className="w-full bg-[url('/assets/images/bgDates.svg')] bg-cover bg-center bg-no-repeat p-8 pt-14"
      >
        <InfoText
          days={[25, 26]}
          month="novembro"
          year={2025}
          beginningTime="8:30h"
          endTime="17:30h"
        />
      </section>
      <section
        ref={contentRef}
        className="bg-background flex flex-col items-center px-8 pb-20 sm:w-3/4 lg:w-full"
      >
        <Schedule
          firstDayTitle="25 de Novembro"
          secondDayTitle="26 de Novembro"
          scheduleEvents={ScheduleDays}
        />
      </section>

      <section className="flex w-full flex-col items-center bg-[url('/assets/images/bgInterview.svg')] bg-cover bg-center bg-no-repeat pb-12 text-center">
        <HeadingText className="!font-normal" text="Speed Interviews" />
        <p className="w-1/2 text-2xl">
          Este ano podes experienciar a modalidade de speed interviews com
          algumas das empresas presentes.
        </p>
      </section>

      <section className="bg-background w-full">
        <PassSection />

        <CompaniesSection />
      </section>

      <SponsorsSection />

      <FaqSection />
    </>
  );
};

export default Content;
