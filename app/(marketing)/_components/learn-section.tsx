import { Button } from "@/components/ui/button";
import React from "react";

export const LearnSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <h2 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#282e3e] text-[31px] leading-10">
                Prepare-se para provas de
                <br />
                qualquer matéria
              </h2>

              <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#282e3e] text-[18.9px] leading-7">
                Memorize tudo com avaliações e sessões de
                <br />
                estudos personalizadas. 98% dos estudantes
                <br />
                dizem que o Quizlet os ajudou a melhorar o
                <br />
                entendimento de suas matérias.
              </p>
            </div>

            <Button className="w-[133px] h-16 bg-[#4255ff] hover:bg-[#3a4de6] rounded-[200px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[15.6px]">
              Começar
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-[496px] h-[300px] bg-[url(/zun00rvsgrysvuul-ptbr3test-png.png)] bg-cover bg-center rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
