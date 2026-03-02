import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Éco-responsable | Nyl Sauval",
  description: "Curriculum Vitae minimaliste et éco-conçu en Next.js, au design moderne et épuré.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen relative font-sans text-sage-900 overflow-x-hidden selection:bg-sage-400 selection:text-white bg-sage-100/70 dark:bg-[#0f170f] transition-colors duration-500">
        {/* Decorative background gradients (Light mode) */}
        <div className="fixed inset-0 -z-10 dark:hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-sage-200/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sage-300/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sage-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        {/* Decorative background gradients (Dark mode) */}
        <div className="fixed inset-0 -z-10 hidden dark:block opacity-30">
          <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-sage-800 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sage-900/80 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
