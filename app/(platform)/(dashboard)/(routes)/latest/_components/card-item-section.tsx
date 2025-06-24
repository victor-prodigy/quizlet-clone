import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import React from "react";

export const CardItemSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-[#0a092d] rounded-lg overflow-hidden border-none">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="w-10 h-10 bg-[#2e3856] rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-1">
            <h3 className="text-[13.7px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] tracking-[0] leading-5 whitespace-nowrap">
              RA3 novo
            </h3>
          </div>

          <div className="text-[13.3px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] tracking-[0] leading-5 whitespace-nowrap">
            Lista de cartões • 8 terms • por você
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
