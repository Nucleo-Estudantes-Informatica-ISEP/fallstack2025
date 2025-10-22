import { FunctionComponent } from "react";

import { Calendar, Pin, Watch } from "@/styles/Icons";

import InfoBit from "../InfoBit";

interface EventInfosProps {
  days: number[];
  month: string;
  year: number;
  beginningTime: string;
  endTime: string;
}

const EventInfos: FunctionComponent<EventInfosProps> = ({
  days,
  month,
  year,
  beginningTime,
  endTime,
}) => {
  return (
    <section className="flex flex-col gap-1 text-xl lg:my-0 lg:px-28 lg:text-2xl">
      <InfoBit
        icon={<Calendar />}
        info={`${days.join(" e ")} de ${month} ${year}`}
      />
      <InfoBit icon={<Watch />} info={`${beginningTime}-${endTime}`} />
      <InfoBit icon={<Pin className="size-[30px]" />} info={"ISEP"} />
    </section>
  );
};

export default EventInfos;
