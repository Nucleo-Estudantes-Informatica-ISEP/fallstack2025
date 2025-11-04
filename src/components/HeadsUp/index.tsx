import Link from "next/link";

import HeadingText from "../HeadingText";

const HeadsUp: React.FC = () => {
  return (
    <section className="my-12">
      <HeadingText className="!mb-0 !text-8xl" text="Precisas de ajuda?" />

      <p className="my-2 text-center text-2xl font-light">
        Envia-nos um email para{" "}
        <Link href="mailto:support@nei-isep.org">support@nei-isep.org</Link>
      </p>
    </section>
  );
};

export default HeadsUp;
