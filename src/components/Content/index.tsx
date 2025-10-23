import { ScheduleDays } from "../../utils/ScheduleDays";
import CompaniesSection from "../Companies/CompaniesSection";
import FaqSection from "../Faq/FaqSection";
import InfoText from "../InfoText";
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
        className="container mx-auto rounded-lg p-8 sm:w-3/4 lg:w-full lg:pt-14"
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

      <CompaniesSection />

      <SponsorsSection />

      <FaqSection />
    </>
  );
};

export default Content;
