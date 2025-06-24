import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { estudos } from "@/constants";

export default function BibliotecaPage() {
  const userName = "joao";

  return (
    <div className="p-8 ml-16">
      <h1 className="text-3xl font-bold mb-8">Sua biblioteca</h1>

      <div className="flex border-b border-gray-800 w-full mb-8">
        <Link
          href={`/user/joao/sets`}
          className="px-4 py-2 text-white hover:text-gray-300 border-b-2 border-transparent hover:border-white transition-colors"
        >
          Listas de cartões
        </Link>
        <div className="px-4 py-2 text-gray-400 cursor-not-allowed">
          Avaliações
        </div>
        <div className="px-4 py-2 text-gray-400 cursor-not-allowed">
          Soluções de especialistas
        </div>
        <Link
          href={`/user/joao/folders`}
          className="px-4 py-2 text-white hover:text-gray-300 border-b-2 border-white transition-colors"
        >
          Pastas
        </Link>
        <div className="px-4 py-2 text-gray-400 cursor-not-allowed">Turmas</div>
      </div>

      <div className="flex justify-between mb-6">
        <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
          Recentes <ChevronDown className="ml-2 h-4 w-4" />
        </Button>

        <div className="relative w-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            className="block w-full p-2 pl-10 text-sm rounded-lg bg-[#1e1d42] border border-gray-700"
            placeholder="Pesquisar cartões"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="space-y-2">
          {estudos.map((estudo, index) => (
            <Card
              key={index}
              className="bg-[#1e1d42] border-gray-700 hover:bg-[#2a2956] cursor-pointer"
            >
              <CardContent className="p-4">
                {estudo.tipo && (
                  <div className="text-sm text-gray-400">{estudo.tipo}</div>
                )}
                <div className="text-white">{estudo.titulo}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
