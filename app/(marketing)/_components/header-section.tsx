import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Plus, Search } from "lucide-react";
import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full h-16 bg-white">
      <div className="relative w-full h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-[95px] h-[22px] md:w-[120px] md:h-[28px] object-contain"
            alt="Quizlet Logo"
            src="/placeholder-logo.svg"
          />

          {/* Navigation Menu */}
          <NavigationMenu className="ml-10">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#282e3e] text-[13.5px] bg-transparent">
                  Ferramentas de estudo
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Content would go here */}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="ml-8">
                <NavigationMenuTrigger className="h-10 px-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#282e3e] text-[13px] bg-transparent">
                  Assuntos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Content would go here */}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-[604px] mx-auto">
          <div className="relative">
            <div className="absolute left-3.5 top-2">
              <Search className="w-6 h-6 text-[#939bb4]" />
            </div>
            <Input
              className="h-10 pl-12 bg-[#f6f7fb] border-none [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[15.2px] text-[#939bb4]"
              placeholder="Listas de cartões, livros didáticos, questões"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="h-6 p-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#4255ff] text-[13.9px]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Criar
          </Button>

          <Button className="h-10 bg-[#4255ff] hover:bg-[#3a4be6] rounded-[200px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[13.6px]">
            Entrar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
