import FactData from "@/types/FactData";
import { Archive, Chart, Leaf, Trophy } from "@/styles/Icons";

interface FactSectionProps {
  facts: FactData[];
}

const iconMap: Record<string, React.FC<any>> = {
  trophy: Trophy,
  archive: Archive,
  leaf: Leaf,
  chart: Chart,
};

const FactSection: React.FC<FactSectionProps> = ({ facts }) => {
  return (
    <section className="my-5 flex flex-col space-y-2 text-sm leading-8 font-light sm:text-sm lg:px-10 lg:text-lg">
      {facts.map((fact, i) => {
        const Icon = iconMap[fact.icon] || Trophy;
        return (
          <div key={i} className="my-1 grid grid-cols-10 items-center">
            <Icon className="left-0 fill-stone-500 text-2xl" />
            <div className="col-span-9 ml-3 text-left leading-5 text-black">
              {fact.description}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FactSection;
