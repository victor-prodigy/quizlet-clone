import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function FlashcardsSection(): JSX.Element {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 h-[300px] bg-[url(/zun0wbvsgrysvuuk-ptbr2learn-png.png)] bg-cover bg-center rounded-lg" />

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-[30.5px] font-bold text-[#282e3e] leading-10 font-['Inter-Bold',Helvetica]">
            Escolha como deseja estudar
          </h2>

          <p className="text-[19.2px] text-[#282e3e] leading-7 font-['Inter-Regular',Helvetica]">
            Transforme cartões em questões de múltipla
            <br />
            escolha e muito mais com o Aprender. Fortaleça
            <br />
            seu conhecimento com jogos educativos, como
            <br />o Combinar.
          </p>

          <Button className="w-[133px] h-16 bg-[#4255ff] rounded-[200px] text-[15.6px] font-semibold font-['Inter-SemiBold',Helvetica]">
            Começar
          </Button>
        </div>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#b8e8fc]">
          <CardContent className="p-4">
            <div className="h-32 flex items-center justify-center">
              {/* Placeholder for card content */}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#4255ff]">
          <CardContent className="p-4">
            <div className="h-32 flex items-center justify-center">
              {/* Placeholder for card content */}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#ffcd1f]">
          <CardContent className="p-4">
            <div className="h-32 flex items-center justify-center">
              {/* Placeholder for card content */}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#ffc8c8]">
          <CardContent className="p-4">
            <div className="h-32 flex items-center justify-center">
              {/* Placeholder for card content */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
