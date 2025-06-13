import Header from "@/components/header"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Search } from "lucide-react"

export default function BibliotecaPage() {
  const estudos = [
    {
      tipo: "18 termos",
      titulo: "(Rascunho) Legislação de trânsito (Questões)",
    },
    {
      tipo: "1 termo",
      titulo: "(Rascunho) ALGORITMOS e PROGRAMAÇÃO (Aula2)",
    },
    {
      tipo: "3 termos",
      titulo: "(Rascunho) GEOGRIA E HISTÓRIA (ENEM)",
    },
    {
      tipo: "2 termos",
      titulo: "(Rascunho) HISTÓRIA (Brasil colonial - Séculos XVI e XVII, Século XVIII)",
    },
    {
      tipo: "4 termos",
      titulo: "(Rascunho) REDAÇÃO ESTRUTURA",
    },
    {
      tipo: "",
      titulo:
        "(Rascunho) TODOS GEOGRAFIA (Geografia do Brasil - Industrialização Brasileira, Urbanização Brasileira, Agricultura Brasileira",
    },
    {
      tipo: "3 termos",
      titulo: "(Rascunho) Redação Estrutura",
    },
  ]

  return (
    <div>
      <Header searchPlaceholder="Nossa pesquisa agora está mais rápida" />

      <div className="p-8 ml-16">
        <h1 className="text-3xl font-bold mb-8">Sua biblioteca</h1>

        <Tabs defaultValue="cartoes" className="mb-8">
          <TabsList className="border-b border-gray-800 w-full justify-start rounded-none bg-transparent">
            <TabsTrigger
              value="cartoes"
              className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent"
            >
              Listas de cartões
            </TabsTrigger>
            <TabsTrigger
              value="avaliacoes"
              className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent"
            >
              Avaliações
            </TabsTrigger>
            <TabsTrigger
              value="solucoes"
              className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent"
            >
              Soluções de especialistas
            </TabsTrigger>
            <TabsTrigger
              value="pastas"
              className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent"
            >
              Pastas
            </TabsTrigger>
            <TabsTrigger
              value="turmas"
              className="data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent"
            >
              Turmas
            </TabsTrigger>
          </TabsList>
        </Tabs>

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
          <h2 className="text-sm uppercase text-gray-400 mb-4">EM PROGRESSO</h2>

          <div className="space-y-2">
            {estudos.map((estudo, index) => (
              <Card key={index} className="bg-[#1e1d42] border-gray-700 hover:bg-[#2a2956] cursor-pointer">
                <CardContent className="p-4">
                  {estudo.tipo && <div className="text-sm text-gray-400">{estudo.tipo}</div>}
                  <div className="text-white">{estudo.titulo}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
