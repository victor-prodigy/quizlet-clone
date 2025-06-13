import Link from "next/link"
import { Home, FileText, Bell, BookOpen, Bookmark } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-16 min-h-screen bg-[#0a092d] border-r border-gray-800 flex flex-col items-center py-4 fixed z-10">
      <div className="mb-8">
        <Link href="/">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#0a092d] font-bold text-2xl">Q</span>
          </div>
        </Link>
      </div>

      <nav className="flex flex-col items-center gap-6">
        <Link href="/" className="p-2 rounded-lg bg-gray-800">
          <Home className="w-6 h-6" />
        </Link>
        <Link href="/documentos" className="p-2 rounded-lg hover:bg-gray-800">
          <FileText className="w-6 h-6" />
        </Link>
        <Link href="/notificacoes" className="p-2 rounded-lg hover:bg-gray-800">
          <Bell className="w-6 h-6" />
        </Link>
        <div className="border-t border-gray-800 w-8 my-2"></div>
        <Link href="/estudos" className="p-2 rounded-lg hover:bg-gray-800">
          <BookOpen className="w-6 h-6" />
        </Link>
        <Link href="/salvos" className="p-2 rounded-lg hover:bg-gray-800">
          <Bookmark className="w-6 h-6" />
        </Link>
      </nav>
    </div>
  )
}
