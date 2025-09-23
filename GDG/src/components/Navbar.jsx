import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = stored ? stored === "dark" : prefersDark;
    setDarkMode(shouldDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="h-[70px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    

        <div className="flex items-center gap-3">
          <img src="/gdg-logo.png" alt="GDG Logo" className="h-[35px] w-[75px]" />
          <span className="font-[Product Sans] text-[21.88px] leading-[100%] tracking-[3%] text-[#868686]">GDG RCOEM</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#events" className="hover:text-blue-600">Events</a>
          <a href="#team" className="hover:text-blue-600">Team</a>
          <a href="#alumni" className="hover:text-blue-600">Alumni</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            aria-pressed={darkMode}
            aria-label="Toggle dark mode"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
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
              aria-hidden="true"
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
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-3 border-t border-gray-100 dark:border-gray-800">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#events" className="block hover:text-blue-600">Events</a>
          <a href="#team" className="block hover:text-blue-600">Team</a>
          <a href="#alumni" className="block hover:text-blue-600">Alumni</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
