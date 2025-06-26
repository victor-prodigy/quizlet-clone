import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const studyMethods = [
  {
    title: "Aprender",
    bgColor: "bg-[#98e3ff]",
    textColor: "text-black",
    image: "/zun0xbvsgrysvuua-ptbr4learn-png.png",
  },
  {
    title: "Cartões",
    bgColor: "bg-[#423ed8]",
    textColor: "text-white",
    image: "/zun0arvsgrysvuub-ptbr2flashcards-png.png",
  },
  {
    title: "Avaliar",
    bgColor: "bg-[#ffcd1f]",
    textColor: "text-black",
    image: "/zun0elvsgrysvuuc-ptbr6test-png.png",
  },
  {
    title: "Combinar",
    bgColor: "bg-[#fdd2ca]",
    textColor: "text-black",
    image: "/zun0jlvsgrysvuug-ptbr7match-png.png",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f6f7fb] py-16">
      <div className="max-w-[840px] mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-black text-[42.1px] leading-[56px] mb-4">
            Como você deseja estudar?
          </h1>

          <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[19.2px] leading-7 mb-8 max-w-[719px] mx-auto">
            Aprenda tudo o que estiver estudando com os cartões interativos,
            avaliações e<br />
            atividades de estudos do Quizlet.
          </p>

          <Button className="bg-[#4255ff] hover:bg-[#3a4de6] text-white rounded-[200px] px-6 py-3 h-12 mb-4">
            <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[15.2px]">
              Inscrever-se gratuitamente
            </span>
          </Button>

          <div className="text-center">
            <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#4255ff] text-[15.5px] cursor-pointer hover:underline">
              Sou um professor
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1396px] mx-auto px-4 relative">
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 z-10 w-16 h-16 rounded-full bg-white border-2 border-[#d9dde8] shadow-[0px_2px_4px_#282e3e1a] hover:bg-gray-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <div className="flex gap-8 overflow-x-auto scrollbar-hide px-16">
            {studyMethods.map((method, index) => (
              <Card
                key={index}
                className={`${method.bgColor} rounded-3xl border-0 flex-shrink-0 w-[310px] h-[390px] overflow-hidden`}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="pt-[18px] pb-[34px] text-center">
                    <h3
                      className={`[font-family:'Inter-Bold',Helvetica] font-bold ${method.textColor} text-[23px] leading-8`}
                    >
                      {method.title}
                    </h3>
                  </div>
                  <div
                    className="flex-1 rounded-[0px_0px_24px_24px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${method.image})` }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 z-10 w-16 h-16 rounded-full bg-white border-2 border-[#d9dde8] shadow-[0px_2px_4px_#282e3e1a] hover:bg-gray-50"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
