import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  dark: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ dark, toggleDarkMode }: NavbarProps) {
  return (
    <nav className="bg-white dark:bg-neutral-800 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-neutral-800 dark:text-white">
          Where in the world?
        </h1>

        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:underline"
        >
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
