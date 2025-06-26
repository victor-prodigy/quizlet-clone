import { Card, CardContent } from "@/components/ui/card";
import { Apple } from "lucide-react";
import { FaAndroid } from "react-icons/fa";
import React from "react";

export default function ContentWrapperSection(): JSX.Element {
  // App download buttons data
  const downloadButtons = [
    {
      platform: "iOS",
      icon: <Apple className="mr-2 h-4 w-4" />,
      alt: "Download para iOS",
      className: "bg-black text-white",
    },
    {
      platform: "Google Play",
      icon: <FaAndroid className="mr-2 h-4 w-4" />,
      alt: "Download para Android",
      className: "bg-white border border-gray-300",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-md space-y-8">
          <h2 className="font-bold text-3xl text-[#282e3e] leading-10">
            Todas as aulas, todas as
            <br />
            provas, um aplicativo
            <br />
            definitivo para estudos
          </h2>

          <p className="font-normal text-[#282e3e] text-[19.2px] leading-7">
            Crie seus próprios cartões ou encontre listas
            <br />
            feitas por professores, estudantes e<br />
            especialistas. Estude a qualquer hora e em
            <br />
            qualquer lugar com nosso aplicativo gratuito.
          </p>

          <div className="flex space-x-4">
            {downloadButtons.map((button, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center justify-center h-10 w-32 rounded-md ${button.className}`}
                aria-label={button.alt}
              >
                {button.icon}
                <span>{button.platform}</span>
              </a>
            ))}
          </div>
        </div>

        <Card className="w-full max-w-[496px] h-[300px] border-none shadow-none">
          <CardContent className="p-0">
            <div
              className="w-full h-[300px] bg-cover bg-center rounded-md"
              style={{
                backgroundImage:
                  "url(/zun0qbvsgrysvuuj-ptbr1flashcards-png.png)",
              }}
              aria-label="App screenshot showing flashcards"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
