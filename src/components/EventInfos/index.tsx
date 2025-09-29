import { FunctionComponent } from "react";

import { Alarm, CalendarEvent, GeoAlt } from "@/styles/Icons";

import InfoBit from "../InfoBit";

interface EventInfosProps {
  days: number[];
  month: string;
  beginningTime: string;
  endTime: string;
}

const EventInfos: FunctionComponent<EventInfosProps> = ({
  days,
  month,
  beginningTime,
  endTime,
}) => {
  return (
    <section className="mx-auto my-16 flex flex-col justify-around gap-8 text-lg font-bold lg:my-0 lg:justify-center lg:px-28 lg:text-xl">
      <InfoBit
        icon={<CalendarEvent />}
        info={`${days.join(" e ")} de ${month}`}
      />
      <InfoBit icon={<Alarm />} info={`${beginningTime} - ${endTime}`} />
      <InfoBit
        icon={<GeoAlt />}
        info={"Instituto Superior de Engenharia do Porto"}
      />
    </section>
  );
};

export default EventInfos;
