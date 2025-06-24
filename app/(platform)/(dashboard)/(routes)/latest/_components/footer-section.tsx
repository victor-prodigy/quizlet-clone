import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function FooterSection(): JSX.Element {
  // Footer navigation links data
  const footerLinks = [
    { text: "Privacidade", href: "#" },
    { text: "Termos de serviço", href: "#" },
  ];

  // Language options for dropdown
  const languageOptions = [
    { value: "pt-BR", label: "Português (BR)" },
    { value: "en-US", label: "English (US)" },
    { value: "es", label: "Español" },
  ];

  return (
    <footer className="w-full py-6 mt-auto bg-transparent">
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          {footerLinks.map((link, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] text-[13.5px]"
              asChild
            >
              <a href={link.href}>{link.text}</a>
            </Button>
          ))}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-auto p-0 flex items-center gap-1 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f6f7fb] text-[13.2px]"
            >
              Português (BR)
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languageOptions.map((language) => (
              <DropdownMenuItem key={language.value}>
                {language.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </footer>
  );
}
