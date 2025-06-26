import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

export const LanguageNavSection = (): JSX.Element => {
  return (
    <section className="relative w-[244px]">
      <h3 className="text-[15.6px] font-bold text-[#282e3e] leading-6 [font-family:'Inter-Bold',Helvetica]">
        Idioma
      </h3>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center mt-12 text-[13.2px] font-semibold text-[#586380] [font-family:'Inter-SemiBold',Helvetica]">
          <span>Português (BR)</span>
          <ChevronDown className="ml-6 w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>English (US)</DropdownMenuItem>
          <DropdownMenuItem>Español</DropdownMenuItem>
          <DropdownMenuItem>Português (BR)</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Card className="w-[104px] h-[153px] mt-[52px] shadow-[0px_4px_16px_#282e3e1a]">
        <CardContent className="p-0">
          <div className="p-2">
            <img
              className="w-[88px] h-[88px]"
              alt="QR code for app download"
              src=""
            />
            <div className="w-[88px] h-[45px] mt-2 overflow-auto">
              <div className="w-16 h-[38px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#282e3e] text-[13.7px] leading-5">
                Obter o<br />
                aplicativo
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LanguageNavSection;
