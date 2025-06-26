import { Button } from "@/components/ui/button";
import React from "react";

export default function CombineSection(): JSX.Element {
  return (
    <section className="relative w-full py-16 bg-[#dbdfff]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col max-w-lg">
          <span className="font-bold text-[#282e3e] text-[19.4px] leading-7 mb-1">
            PROFESSORES
          </span>

          <h2 className="font-bold text-[#282e3e] text-[30.4px] leading-10 mb-8">
            Capacite seu alunos
          </h2>

          <p className="font-normal text-[#282e3e] text-[19.1px] leading-7 mb-12">
            Ajude seus alunos a estudarem qualquer matéria
            <br />
            com confiança. Com acesso gratuito a listas de
            <br />
            cartões, modos de estudo e jogos para a sala
            <br />
            de aula, como o Quizlet Live, você pode
            <br />
            promover uma sala de aula mais engajada em
            <br />
            um instante.
          </p>

          <div className="flex flex-col gap-6">
            <Button className="w-[280px] h-16 bg-[#4255ff] rounded-[200px] font-semibold text-[15.4px]">
              Inscrever-se como professor
            </Button>

            <Button
              variant="link"
              className="w-fit p-0 font-semibold text-[#4255ff] text-[19.4px] leading-7"
            >
              Ver como os professores usam o Quizlet
            </Button>
          </div>
        </div>

        <div
          className="w-[496px] h-[413px] bg-[url(/zpfqjb5lenntxhvk-teacher-image-LOH-png.png)] bg-cover bg-center"
          aria-label="Imagem de professor"
        />
      </div>
    </section>
  );
}
