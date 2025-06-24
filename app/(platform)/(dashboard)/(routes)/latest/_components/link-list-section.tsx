import { Card, CardContent } from "@/components/ui/card";
import { FolderIcon } from "lucide-react";
import React from "react";

export const LinkListSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-[#0a092d] rounded-lg border-0 cursor-pointer hover:bg-[#0f0e35] transition-colors">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="w-10 h-10 bg-[#2e3856] rounded-lg flex items-center justify-center flex-shrink-0">
          <FolderIcon className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] text-[13.6px] leading-5">
              RA3
            </h3>
          </div>

          <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] text-[13.3px] leading-5 truncate">
            Lista de cartões • 27 terms • por você
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
