import { Card, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";
import React from "react";

export default function MainContentSection(): JSX.Element {
  return (
    <Card className="w-full max-w-[618px] h-[72px] bg-[#0a092d] rounded-lg overflow-hidden mt-44">
      <CardContent className="flex items-center p-0">
        <div className="flex-shrink-0 w-10 h-10 m-4 bg-[#2e3856] rounded-lg flex items-center justify-center">
          <Layers className="w-6 h-6 text-white" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-[13.7px] font-semibold text-[#f6f7fb] tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter-SemiBold',Helvetica]">
            RA3 novo
          </h3>

          <p className="text-[13.2px] font-semibold text-[#d9dde8] tracking-[0] leading-5 whitespace-nowrap [font-family:'Inter-SemiBold',Helvetica]">
            Lista de cartões • 11 terms • por você
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
