import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="space-y-4">
      <Header />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </main>
  );
}
