import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Lightbulb, Maximize2, Play, Save, Settings, Share2, Shuffle } from "lucide-react"

export default function EstudoPage() {
  return (
    <div>
      <Header searchPlaceholder="Listas de cartões, livros didáticos, questões" />

      <div className="p-4 ml-16">
        <div className="flex items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1 border border-gray-700 rounded">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5H21V19H3V5Z" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-sm">Engenharia de Software</span>
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">engenharia de software</h1>

          <div className="flex gap-2">
            <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
              <Save className="h-5 w-5 mr-2" />
              Salvo
            </Button>
            <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2" fill="white" />
                <circle cx="19" cy="12" r="2" fill="white" />
                <circle cx="5" cy="12" r="2" fill="white" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="bg-[#1e1d42] border-gray-700 hover:bg-[#2a2956] cursor-pointer">
            <CardContent className="p-6 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Cartões</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1d42] border-gray-700 hover:bg-[#2a2956] cursor-pointer">
            <CardContent className="p-6 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600 rounded">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Aprender</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1d42] border-gray-700 hover:bg-[#2a2956] cursor-pointer">
            <CardContent className="p-6 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12L10 17L19 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium">Avaliar</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1d42] border-gray-700 hover:bg-[#2a2956] cursor-pointer">
            <CardContent className="p-6 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-600 rounded">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
                    <rect x="4" y="13" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
                    <rect x="13" y="4" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
                    <rect x="13" y="13" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Blocos</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1d42] border-gray-700 hover:bg-[#2a2956] cursor-pointer">
            <CardContent className="p-6 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600 rounded">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L19 18H5L12 4Z" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Blast</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e1d42] border-gray-700 hover:bg-[#2a2956] cursor-pointer">
            <CardContent className="p-6 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2" />
                    <path d="M8 12H16" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Combinar</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="h-5 w-5 text-gray-400" />
          <span className="text-gray-400">Receber uma dica</span>
        </div>

        <Card className="bg-[#1e1d42] border-gray-700 mb-4">
          <CardContent className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Etapas de desenvolvimento de Software</h2>

              <div className="space-y-4">
                <p className="text-xl">Planejamento</p>
                <p className="text-xl">apresentação no formato de representação simulada (role playing)</p>
              </div>
            </div>

            <div className="text-xs text-gray-500 uppercase">TERMO</div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Acompanhe o progresso</span>
            <div className="w-10 h-5 bg-gray-700 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-full border-gray-700 bg-[#1e1d42]">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <span className="text-sm">1 / 2</span>

            <Button variant="outline" className="rounded-full border-gray-700 bg-[#1e1d42]">
              <ChevronRight className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="rounded-full border-gray-700 bg-[#1e1d42]">
                <Play className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-gray-700 bg-[#1e1d42]">
                <Shuffle className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-gray-700 bg-[#1e1d42]">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-gray-700 bg-[#1e1d42]">
                <Maximize2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-8 text-xs text-gray-500">
          <div className="text-teal-500">Criada por</div>
          <div className="font-medium">Loop_11</div>
          <div>Criada 3 dias atrás</div>
        </div>
      </div>
    </div>
  )
}
