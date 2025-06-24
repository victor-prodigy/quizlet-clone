import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import React from "react";

export const LinkWrapperSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[618px] h-[72px] bg-[#2e3856] rounded-lg overflow-hidden border-none">
      <CardContent className="flex items-center p-4 h-full">
        <div className="flex-shrink-0 w-10 h-10 bg-[#2e3856] rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 ml-4">
          <div className="flex flex-col">
            <div className="text-[12.9px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] tracking-[0] leading-5 whitespace-nowrap">
              RA2 v22222
            </div>
            <div className="text-[13.2px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] tracking-[0] leading-5 whitespace-nowrap mt-[1px]">
              Lista de cartões • 143 terms • por você
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
