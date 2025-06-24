import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import React from "react";

export const RecentLinkSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-[#0a092d] rounded-lg border-none">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="w-10 h-10 bg-[#2e3856] rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1">
            <h3 className="text-[13.6px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] leading-5">
              RA3
            </h3>
            <p className="text-[13.3px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] leading-5">
              Lista de cartões • 27 terms • por você
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
