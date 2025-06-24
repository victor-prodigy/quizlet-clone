import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuIcon, PlusIcon, SearchIcon } from "lucide-react";
import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full h-16 bg-[#0a092d] flex items-center justify-between px-4">
      {/* Left section with menu and logo */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-10 h-10 p-0"
        >
          <MenuIcon className="w-6 h-6 text-white" />
        </Button>

        <div className="w-8 h-8 bg-[url(/q-logo.svg)] bg-[100%_100%]" />
      </div>

      {/* Search bar */}
      <div className="relative max-w-[604px] w-full mx-4">
        <div className="flex items-center h-10 bg-[#2e3856] rounded-lg">
          <SearchIcon className="w-6 h-6 text-[#939bb4] ml-3.5" />
          <Input
            className="border-0 bg-transparent h-10 text-[15.1px] text-[#939bb4] font-semibold placeholder:text-[#939bb4] placeholder:font-semibold focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Buscar cartões"
          />
        </div>
      </div>

      {/* Right section with actions and profile */}
      <div className="flex items-center gap-4">
        <Button
          size="icon"
          className="rounded-full w-10 h-10 p-0 bg-[#4255ff] hover:bg-[#4255ff]/90"
        >
          <PlusIcon className="w-6 h-6 text-white" />
        </Button>

        <Button className="h-10 px-4 py-2.5 bg-[#ffcd1f] hover:bg-[#ffcd1f]/90 text-[#282e3e] rounded-full">
          <span className="font-semibold text-[13.6px] whitespace-nowrap">
            Upgrade com avaliação gratuita de 7 dias
          </span>
        </Button>

        <Button
          variant="ghost"
          className="rounded-full w-10 h-10 p-0 overflow-hidden"
        >
          <div className="w-10 h-10 rounded-[40px] shadow-[inset_0px_0px_1px_#0000004c] bg-[url(/foto-do-perfil-4.png)] bg-cover bg-[50%_50%]" />
        </Button>
      </div>
    </header>
  );
};

export default HeaderSection;
