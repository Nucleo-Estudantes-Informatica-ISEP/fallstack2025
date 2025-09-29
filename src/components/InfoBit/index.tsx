import { FunctionComponent } from "react";

interface InfoBitProps {
  icon: React.ReactNode;
  info: string;
}

const InfoBit: FunctionComponent<InfoBitProps> = ({ icon, info }) => {
  return (
    <span className="flex items-center gap-x-6 lg:w-auto">
      <span className="text-3xl">{icon}</span>
      <p className="w-[20ch] ">{info}</p>
    </span>
  );
};

export default InfoBit;
