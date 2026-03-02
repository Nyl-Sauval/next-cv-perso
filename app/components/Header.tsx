import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="mb-12 text-center md:text-left md:flex md:items-center md:justify-between bg-white dark:bg-sage-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-sage-200 dark:border-sage-800 transition-colors">
            <div className="md:w-2/3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-sage-900 dark:text-sage-50 tracking-tight transition-colors">
                        Nyl Sauval
                    </h1>
                    <div className="flex justify-center md:justify-start">
                        <ThemeToggle />
                    </div>
                </div>
                <p className="text-xl md:text-2xl text-sage-600 dark:text-sage-300 font-semibold mb-6 transition-colors">
                    Développeur Java & Fullstack
                </p>
                <p className="text-sage-700 dark:text-sage-400 leading-relaxed max-w-2xl text-lg transition-colors">
                    Développeur passionné par la conception logicielle. Actuellement alternant chez Lenrek Informatique.
                </p>
            </div>

            <div className="mt-8 md:mt-0 flex flex-row md:flex-col justify-center items-stretch gap-4">
                <a href="mailto:nyl.sauval@laposte.net" className="flex items-center justify-center gap-3 px-6 py-4 bg-sage-800 dark:bg-sage-200 text-white dark:text-sage-900 rounded-2xl hover:bg-sage-700 dark:hover:bg-white transition-all font-bold shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <FaEnvelope className="text-xl" /> <span className="hidden sm:inline">Me contacter</span>
                </a>
                <a href="https://github.com/Nyl-Sauval" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-sage-800 text-sage-900 dark:text-sage-50 border border-sage-200 dark:border-sage-700 rounded-2xl hover:bg-sage-50 dark:hover:bg-sage-700 transition-all font-medium shadow-sm hover:-translate-y-1">
                    <FaGithub className="text-xl" /> <span className="hidden sm:inline">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/nyl-sauval/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-sage-800 text-sage-900 dark:text-sage-50 border border-sage-200 dark:border-sage-700 rounded-2xl hover:bg-sage-50 dark:hover:bg-sage-700 transition-all font-medium shadow-sm hover:-translate-y-1">
                    <FaLinkedin className="text-xl text-[#0A66C2] dark:text-[#3b8bdc]" /> <span className="hidden sm:inline">LinkedIn</span>
                </a>
            </div>
        </header>
    );
}
