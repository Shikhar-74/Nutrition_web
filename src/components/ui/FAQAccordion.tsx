"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-emerald-300 shadow-md bg-emerald-50/30" : "border-stone-200 bg-white"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-semibold text-lg ${isOpen ? "text-emerald-800" : "text-stone-800"}`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-emerald-600" : "text-stone-400"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 text-stone-600">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
