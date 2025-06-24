import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";
import React from "react";

export const LinkSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[618px] h-[72px] bg-[#0a092d] rounded-lg overflow-hidden border-0">
      <CardContent className="p-4 h-full">
        <div className="flex items-center h-full gap-4">
          <div className="w-10 h-10 bg-[#2e3856] rounded-lg flex items-center justify-center flex-shrink-0">
            <Settings className="w-6 h-6 text-white" />
          </div>

          <div className="flex flex-col justify-center flex-1 min-w-0">
            <div className="mb-1">
              <span className="text-[13.2px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] tracking-[0] leading-5 whitespace-nowrap">
                RA2 v3
              </span>
            </div>

            <div className="text-[13.2px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] tracking-[0] leading-5 whitespace-nowrap">
              Lista de cartões • 143 terms • por você
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
