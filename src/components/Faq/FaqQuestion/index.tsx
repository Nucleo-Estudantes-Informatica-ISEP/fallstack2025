"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Chevron } from "@/styles/Icons";

export interface FaqProps {
  question: string;
  answer: string;
  index: number;
}

interface FaqQuestionProps extends FaqProps {
  isOpen: boolean;
  onToggle: () => void;
}

const FaqQuestion: React.FC<FaqQuestionProps> = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.4) }}
      className={`border-secondary border transition-colors duration-200`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="focus-visible:outline-secondary flex w-full items-center justify-between gap-6 px-12 py-10 text-left text-lg font-semibold text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span className="flex-1 text-2xl leading-tight md:text-4xl">
          {question}
        </span>
        <Chevron isOpen={isOpen} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-lg leading-relaxed text-white/90 md:text-xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqQuestion;
