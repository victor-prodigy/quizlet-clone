import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function PopularCardsSection(): JSX.Element {
  // Card data for mapping
  const cardData = [
    {
      subject: "Física",
      content: `O fogão por indução funciona a partir do surgimento de uma
      corrente elétrica induzida no fundo da panela, com
      consequente transformação de energia elétrica em calor
      por efeito Joule. A principal vantagem desses fogões é a
      eficiência energética, que é substancialmente maior que a
      dos fogões convencionais. A corrente elétrica mencionada é`,
    },
    {
      subject: "Álgebra",
      content: `O metrô de um município oferece dois tipos de tíquetes com
      colorações diferentes, azul e vermelha, sendo vendidos em
      cartelas, cada qual com nove tíquetes da mesma cor e
      mesmo valor unitário. Duas cartelas de tíquetes azuis e uma
      cartela de tíquetes vermelhos são vendidas por R$ __, __.
      Sabe-se que o preço de um tíquete azul menos o preço de`,
    },
    {
      subject: "Idiomas",
      content: `O ouro do século 21 Cério, gadolínio, lutécio, promécio e
      érbio; sumário, térbio e disprósio; hólmio, túlio e itérbio. Essa
      lista de nomes esquisitos e pouco conhecidos pode parecer
      a escalação de um time de futebol, que ainda teria no banco
      de reservas lantânio, neodímio, praseodímio, európio,
      escândio e ítrio. Mas esses 17 metais, chamados de terras-`,
    },
  ];

  return (
    <section className="w-full py-4 mx-auto max-w-[1204px]">
      <div className="flex flex-row gap-4 justify-between">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="w-[391px] h-[156px] bg-[#202040] rounded-lg overflow-hidden border-2 border-solid border-[#2e3856]"
          >
            <CardContent className="p-0">
              <div className="relative w-full h-[152px] p-0.5">
                <div className="px-4 pt-[15px]">
                  <h3 className="font-semibold text-[#d9dde8] text-xs tracking-[0] leading-4 whitespace-nowrap [font-family:'Inter-SemiBold',Helvetica]">
                    {card.subject}
                  </h3>
                </div>

                <div className="px-4 pt-12 h-24 overflow-hidden">
                  <div className="relative">
                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#f6f7fb] text-[12.4px] tracking-[0] leading-[18.3px] whitespace-pre-line">
                      {card.content}
                    </div>
                    <div className="absolute w-full h-24 top-0 left-0 bg-[linear-gradient(180deg,rgba(46,56,86,0)_60%,rgba(46,56,86,1)_100%)]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
