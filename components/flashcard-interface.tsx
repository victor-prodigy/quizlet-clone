"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Flashcard from "./flashcard";
import Sidebar from "./sidebar";
import Header from "./header";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Settings,
  Maximize2,
  Lightbulb,
  Star,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import {
  Pencil,
  Copy,
  Printer,
  Link2,
  Download,
  Code,
  Trash2,
} from "lucide-react";

const flashcards = [
  { id: 1, term: "abide", definition: "suportar, tolerar, permanecer" },
  { id: 2, term: "abundant", definition: "abundante, farto, copioso" },
  { id: 3, term: "accomplish", definition: "realizar, completar, conseguir" },
  { id: 4, term: "accurate", definition: "preciso, exato, correto" },
  { id: 5, term: "achieve", definition: "alcançar, atingir, conquistar" },
  { id: 6, term: "acquire", definition: "adquirir, obter, conseguir" },
  { id: 7, term: "adequate", definition: "adequado, suficiente, apropriado" },
  { id: 8, term: "adjacent", definition: "adjacente, vizinho, próximo" },
  { id: 9, term: "advocate", definition: "defender, apoiar, advogar" },
  { id: 10, term: "ambiguous", definition: "ambíguo, duvidoso, incerto" },
];

export default function FlashcardInterface({
  flashcardId,
}: {
  flashcardId?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTerm, setEditedTerm] = useState("");
  const [editedDefinition, setEditedDefinition] = useState("");

  const currentCard = flashcards[currentIndex];
  const router = useRouter();

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleEdit = () => {
    setEditedTerm(currentCard.term);
    setEditedDefinition(currentCard.definition);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    // Here you would typically update the flashcard in your database
    // For now, we'll just close the dialog
    setIsEditing(false);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Title and Actions */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Palavras em Inglês</h1>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-400">
              Deixar a primeira avaliação
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
            Salvar
          </Button>
          <Button variant="outline" className="border-gray-700 bg-[#1e1d42]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2V15" stroke="currentColor" strokeWidth="2" />
            </svg>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-gray-700 bg-[#1e1d42]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="19" cy="12" r="2" fill="currentColor" />
                  <circle cx="5" cy="12" r="2" fill="currentColor" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1e1d42] border border-gray-700 text-white w-56">
              <DropdownMenuItem
                onClick={() => router.push(`/flashcard/${currentCard.id}/edit`)}
                className="gap-2"
              >
                <Pencil className="w-4 h-4" /> Editar
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Copy className="w-4 h-4" /> Fazer uma cópia
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Printer className="w-4 h-4" /> Imprimir
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Link2 className="w-4 h-4" /> Combinar
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Download className="w-4 h-4" /> Exportar
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Code className="w-4 h-4" /> Incorporar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 text-red-500 focus:text-red-500">
                <Trash2 className="w-4 h-4" /> Apagar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Study Mode Tabs */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1e1d42] border border-blue-500 rounded-lg p-4 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="text-lg font-medium">Cartões</span>
          </div>
        </div>

        <div className="bg-[#1e1d42] border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-600 rounded">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-lg font-medium">Aprender</span>
          </div>
        </div>

        <div className="bg-[#1e1d42] border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500 rounded">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
        </div>

        <div className="bg-[#1e1d42] border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-600 rounded">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                />
                <rect
                  x="4"
                  y="13"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                />
                <rect
                  x="13"
                  y="4"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                />
                <rect
                  x="13"
                  y="13"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="text-lg font-medium">Blocos</span>
            <Badge className="bg-green-600 text-white text-xs">Novo</Badge>
          </div>
        </div>

        <div className="bg-[#1e1d42] border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-600 rounded">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4L19 18H5L12 4Z" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-lg font-medium">Blast</span>
          </div>
        </div>

        <div className="bg-[#1e1d42] border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500 rounded">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  stroke="white"
                  strokeWidth="2"
                />
                <path d="M8 12H16" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-lg font-medium">Combinar</span>
          </div>
        </div>
      </div>

      {/* Tip */}
      <div className="flex items-center gap-2 mb-8">
        <Lightbulb className="w-5 h-5 text-gray-400" />
        <span className="text-gray-400">Receber uma dica</span>
      </div>

      {/* Flashcard */}
      <div className="flex justify-center mb-8">
        <Flashcard
          term={currentCard.term}
          definition={currentCard.definition}
          isFlipped={isFlipped}
          onClick={handleCardClick}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Acompanhe o progresso</span>
          <div
            className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer"
            onClick={() => setProgress(!progress)}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full absolute transition-transform duration-200 ${
                progress ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="rounded-full border-gray-700 bg-[#1e1d42] w-12 h-12"
            onClick={prevCard}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <span className="text-sm font-medium">
            {currentIndex + 1} / {flashcards.length}
          </span>

          <Button
            variant="outline"
            className="rounded-full border-gray-700 bg-[#1e1d42] w-12 h-12"
            onClick={nextCard}
            disabled={currentIndex === flashcards.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2 ml-4">
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-[#1e1d42] w-12 h-12"
            >
              <Play className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-[#1e1d42] w-12 h-12"
            >
              <X className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-[#1e1d42] w-12 h-12"
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-[#1e1d42] w-12 h-12"
            >
              <Maximize2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Creator Info */}
      <div className="flex items-center gap-2 mt-8 text-xs text-gray-500">
        <div className="text-teal-500">Criada por</div>
        <div className="font-medium">ismael_cesar</div>
        <Badge className="bg-blue-600 text-white text-xs">Professor</Badge>
      </div>
    </div>
  );
}
