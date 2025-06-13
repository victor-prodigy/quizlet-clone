import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ImageIcon, Settings } from "lucide-react"
import Link from "next/link"

export default function EditarPage() {
  return (
    <div className="bg-[#0a092d] min-h-screen text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button className="p-2">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-2">
            <ChevronRight className="h-5 w-5" />
          </button>
          <button className="p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="relative w-80">
            <input
              type="search"
              className="block w-full p-2 pl-4 text-sm rounded-lg bg-[#1e1d42] border border-gray-700"
              placeholder="Pesquisar guias de estudos"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" className="bg-blue-600 hover:bg-blue-700 rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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

      <div className="flex justify-between p-4">
        <Link href="/estudo" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">
          Voltar à lista
        </Link>

        <Button className="bg-blue-600 hover:bg-blue-700">Concluído</Button>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <div className="p-4 bg-[#1e1d42] border border-gray-700 rounded-lg mb-4">
            <div className="text-sm text-gray-400">Título</div>
            <div className="text-white">engenharia de software</div>
          </div>

          <div className="p-4 bg-[#1e1d42] border border-gray-700 rounded-lg">
            <div className="text-gray-400">Adicione uma descrição...</div>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Importar
          </Button>

          <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Adicionar diagrama
          </Button>

          <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Criar a partir de anotações
          </Button>

          <div className="ml-auto flex gap-2">
            <Button variant="outline" className="border-gray-700 bg-[#1e1d42] rounded-full p-2 h-10 w-10">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-700 bg-[#1e1d42] rounded-full p-2 h-10 w-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 4V20M4 12H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="outline" className="border-gray-700 bg-[#1e1d42] rounded-full p-2 h-10 w-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2" />
              </svg>
            </Button>
          </div>
        </div>

        <Card className="bg-[#1e1d42] border-gray-700 mb-4">
          <CardContent className="p-0">
            <div className="flex">
              <div className="w-1/2 p-6 border-r border-gray-700">
                <div className="flex justify-between mb-2">
                  <div className="text-sm">1</div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-white">
                      <ImageIcon width="16" height="16" stroke="currentColor" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 12H18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg">Etapas de desenvolvimento de Software</p>

                  <p className="text-lg">Planejamento</p>
                  <p className="text-lg">apresentação no formato de representação simulada (role playing)</p>
                  <div className="text-xs text-gray-500 uppercase mt-4">TERMO</div>
                </div>
              </div>

              <div className="w-1/2 p-6">
                <div className="space-y-4">
                  <p className="text-lg">1. Preparação</p>
                  <p>Definição do Cenário: Identificar uma situação real ou problema que precise ser abordado.</p>
                  <p>
                    Atribuição de Papéis: Os participantes recebem papéis específicos a desempenhar, geralmente baseados
                    em personagens ou situações reais.
                  </p>

                  <p className="text-lg">2. Execução</p>
                  <p>Simulação: Os participantes atuam de acordo com seus papéis em uma simulação controlada.</p>
                  <p>
                    Interpretação e Improvisação: Eles devem reagir naturalmente às situações apresentadas, permitindo a
                    improvisação e o desenvolvimento de habilidades.
                  </p>

                  <p className="text-lg">3. Feedback e Avaliação</p>
                  <p>
                    Análise do Desempenho: Após a simulação, os participantes recebem feedback sobre seu desempenho.
                  </p>
                  <p>
                    Aprendizado e Melhoria: O feedback é usado para identificar áreas de melhoria e desenvolver novas
                    estratégias.
                  </p>

                  <p className="text-lg">4. Repetição e Ajustes</p>
                  <p>Repetição da Simulação: A situação pode ser reencenada</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
