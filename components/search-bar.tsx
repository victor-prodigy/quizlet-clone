import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder: string
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-3xl">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="search"
        className="block w-full p-3 pl-10 text-sm rounded-lg bg-[#1e1d42] border border-gray-700 focus:ring-purple-500 focus:border-purple-500"
        placeholder={placeholder}
      />
    </div>
  )
}
