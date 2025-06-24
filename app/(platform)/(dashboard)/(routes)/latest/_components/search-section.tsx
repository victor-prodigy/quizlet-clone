import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";
import React from "react";

const cardData = [
  {
    title: "palavras em inglês",
    termCount: "11 termos",
    avatar: "/link-foto-do-perfil-3.png",
    username: "victor_gabriel35",
    hasLock: false,
  },
  {
    title: "Ingles",
    termCount: "51 termos",
    avatar: "/link-foto-do-perfil-4.png",
    username: "eddi_vieira",
    hasLock: false,
  },
  {
    title: "inglês basico",
    termCount: "133 termos",
    avatar: "/link-foto-do-perfil.png",
    username: "Rafick1",
    hasLock: true,
  },
];

export const SearchSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="bg-[#202040] border-2 border-[#2e3856] rounded-lg overflow-hidden h-[174px]"
          >
            <CardContent className="p-[18px] h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] text-[15.5px] leading-6">
                    {card.title}
                  </h3>
                  {card.hasLock && <Lock className="w-4 h-4 text-[#f6f7fb]" />}
                </div>

                <Badge className="bg-[#586380] text-[#f6f7fb] rounded-[200px] h-5 px-2 text-[11px] [font-family:'Inter-SemiBold',Helvetica] font-semibold">
                  {card.termCount}
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6 rounded-3xl shadow-[inset_0px_0px_1px_#0000004c]">
                  <AvatarImage
                    src={card.avatar}
                    className="bg-cover bg-[50%_50%]"
                  />
                  <AvatarFallback className="w-6 h-6 text-xs">
                    {card.username.charAt(0).toUpperCase()}
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

export default SearchSection;
