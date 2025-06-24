import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import React from "react";

const cardData = [
  {
    title: "Matemática",
    terms: "45 termos",
    username: "josebruno_duarte",
    avatarSrc: "/image.png",
    avatarFallback: "JD",
  },
  {
    title: "MATEMATICA",
    terms: "161 termos",
    username: "TalitaSuplicio",
    avatarSrc: "",
    avatarFallback: "TS",
  },
  {
    title: "Inglês Palavras todas",
    terms: "377 termos",
    username: "coelho",
    avatarSrc: "/link-foto-do-perfil-2.png",
    avatarFallback: "C",
  },
];

export const CardListSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="bg-[#202040] border-2 border-[#2e3856] rounded-lg overflow-hidden h-[174px]"
          >
            <CardContent className="p-[18px] h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] text-[15.2px] leading-6">
                  {card.title}
                </h3>
                <BookOpen className="w-4 h-4 text-[#f6f7fb]" />
              </div>

              <Badge className="bg-[#586380] text-[#f6f7fb] rounded-[200px] w-fit mb-auto [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[11.2px] h-5 px-2">
                {card.terms}
              </Badge>

              <div className="flex items-center gap-2 mt-auto">
                <Avatar className="w-6 h-6 rounded-3xl shadow-[inset_0px_0px_1px_#0000004c]">
                  <AvatarImage
                    src={card.avatarSrc}
                    className="bg-cover bg-[50%_50%]"
                  />
                  <AvatarFallback className="text-xs bg-[#3ccfcf] text-[#202040]">
                    {card.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] text-[13.5px] leading-[18px]">
                  {card.username}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CardListSection;
