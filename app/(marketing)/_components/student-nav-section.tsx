import { Button } from "@/components/ui/button";
import React from "react";

const navigationItems = [
  { text: "Cartões", className: "w-14" },
  { text: "Avaliação", className: "w-[68px]" },
  { text: "Aprender", className: "w-[67px]" },
  {
    text: "Perguntas e respostas de\nespecialistas",
    className: "w-[244px] h-11",
    multiline: true,
  },
  { text: "Quizlet Plus", className: "w-[83px]" },
];

export const StudentNavSection = (): JSX.Element => {
  return (
    <nav className="w-[244px] relative">
      <header className="mb-12">
        <h2 className="text-[14.9px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#282e3e] tracking-[0] leading-6 whitespace-nowrap">
          Para estudantes
        </h2>
      </header>

      <div className="flex flex-col space-y-4">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`${item.className} h-auto justify-start p-0.5 rounded hover:bg-gray-50`}
          >
            <span
              className={`[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#282e3e] text-left ${
                item.multiline
                  ? "text-[13.3px] leading-5"
                  : "text-[13.5px] leading-5"
              }`}
            >
              {item.multiline
                ? item.text.split("\n").map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < item.text.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))
                : item.text}
            </span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default StudentNavSection;
