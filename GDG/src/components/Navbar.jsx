import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react" 


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="h-[70px] container mx-auto px-6 py-4 flex items-center justify-between">
    

        <div className="flex items-center space-x-4">
          <img src="/gdg-logo.png" className="h-[35px] w-[75px] " />
            &nbsp;&nbsp;
          <span className="ml-2 font-[Product Sans] font-normal text-[21.88px] leading-[100%] tracking-[3%] text-[#868686]">GDG RCOEM</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" className="hover:text-blue-600">Events</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" className="hover:text-blue-600">Team</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" className="hover:text-blue-600">Alumni</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" className="hover:text-blue-600">Contact</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="h-[36px] w-[90px] p-2 rounded-full  bg-[#7A7A7A] dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>

          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3">
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#purpose" className="block hover:text-blue-600">Purpose</a>
          <a href="#events" className="block hover:text-blue-600">Events</a>
          <a href="#tech" className="block hover:text-blue-600">Technologies</a>
          <a href="#faq" className="block hover:text-blue-600">FAQ</a>
        </div>
      )}
    </nav>
  )
}
