import React from "react";

import FaqQuestion, { FaqProps } from "../FaqQuestion";

interface FaqContainerProps {
  faqs: FaqProps[];
}
const FaqContainer: React.FC<FaqContainerProps> = ({ faqs }) => {
  return (
    <div className="mx-auto flex w-[90%] flex-col md:w-5/6">
      {faqs.map(({ question, answer }, i) => (
        <FaqQuestion
          key={question}
          index={i}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default FaqContainer;
