"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const root = document.documentElement;
        if (root.classList.contains("dark")) {
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    if (!mounted) {
        // Prevent hydration mismatch by returning a placeholder
        return <button className="w-10 h-10 p-2 rounded-full opacity-0"></button>;
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-3 bg-sage-200 dark:bg-sage-800 text-sage-800 dark:text-sage-200 rounded-full hover:bg-sage-300 dark:hover:bg-sage-700 transition-colors shadow-sm cursor-pointer"
            aria-label="Toggle Dark Mode"
            title={isDark ? "Passer au thème clair" : "Passer au thème sombre"}
        >
            {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
    );
}
