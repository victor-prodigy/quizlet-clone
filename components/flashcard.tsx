"use client"

import { motion } from "framer-motion"

interface FlashcardProps {
  term: string
  definition: string
  isFlipped: boolean
  onClick: () => void
}

export default function Flashcard({ term, definition, isFlipped, onClick }: FlashcardProps) {
  return (
    <div className="perspective-1000 w-full max-w-4xl h-96">
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        onClick={onClick}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-[#1e1d42] border border-gray-700 rounded-xl flex items-center justify-center backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center p-8">
            <div className="text-4xl font-bold text-white mb-4">{term}</div>
            <div className="text-sm text-gray-400">Clique para ver a tradução</div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-[#1e1d42] border border-gray-700 rounded-xl flex items-center justify-center backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center p-8">
            <div className="text-2xl text-gray-300 mb-4">{term}</div>
            <div className="text-3xl font-bold text-white">{definition}</div>
            <div className="text-sm text-gray-400 mt-4">Clique para voltar ao termo</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
