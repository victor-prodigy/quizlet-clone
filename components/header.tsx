import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center gap-4 ml-4">
        <div className="relative w-96">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full p-3 pl-10 text-sm rounded-lg bg-[#1e1d42] border border-gray-700 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Listas de cartões, livros didáticos, questões"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          size="icon"
          variant="ghost"
          className="bg-blue-600 hover:bg-blue-700 rounded-full"
        >
          <Plus className="h-5 w-5" />
        </Button>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Upgrade com avaliação gratuita de 7 dias
        </Button>
        <div className="flex items-center gap-2">
          <div className="text-right text-xs">
            <div>Foto</div>
            <div>do</div>
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
