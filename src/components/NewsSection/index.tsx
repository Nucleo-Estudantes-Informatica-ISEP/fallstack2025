import { FunctionComponent } from "react";

import HeadingText from "../HeadingText";

const PassSection: FunctionComponent = () => {
  return (
    <>
      <section className="flex flex-col items-center bg-[url('/assets/images/card_bg.svg')] bg-cover bg-center px-8 pb-20 text-center">
        <HeadingText className="!font-normal" text="Passe do FallStack" />
        <p className="w-1/2 text-2xl">
          Podes agora aceder ao teu passe pessoal do evento que te dá acesso às
          palestras e a giveaways exclusivos.
        </p>
      </section>
    </>
  );
};

export default PassSection;
