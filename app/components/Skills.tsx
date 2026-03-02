export default function Skills() {
    const skillCategories = [
        {
            title: "IDE",
            skills: ["IntelliJ IDEA", "PyCharm", "PhpStorm", "VS Code", "Eclipse"]
        },
        {
            title: "Langages de programmation",
            skills: ["PHP", "Java", "Python", "HTML", "CSS", "JavaScript"]
        },
        {
            title: "Frameworks",
            skills: ["Laravel", "JavaFX", "Flask", "Maven", "JUnit", "Next.js"]
        },
        {
            title: "Base de données",
            skills: ["SQLite", "MySQL", "PostgreSQL", "Oracle"]
        },
        {
            title: "Outils",
            skills: ["GitHub", "GitLab", "Docker"]
        },
        {
            title: "Autres compétences",
            skills: ["Unit Testing", "Agile Methodologies", "Éco-conception Web"]
        }
    ];

    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-sage-800 dark:text-sage-200 mb-8 flex items-center gap-3 transition-colors">
                <span className="w-8 h-8 rounded-full bg-sage-200 dark:bg-sage-800 flex items-center justify-center text-sage-700 dark:text-sage-300 text-sm transition-colors">⚡</span>
                Compétences
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="bg-white dark:bg-sage-900/60 backdrop-blur-xl p-6 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none border border-sage-200 dark:border-sage-800 hover:border-sage-300 dark:hover:border-sage-600 transition-all">
                        <h3 className="text-lg font-bold text-sage-900 dark:text-sage-100 border-b border-sage-200 dark:border-sage-700/50 pb-3 mb-4 transition-colors">{category.title}</h3>
                        <ul className="flex flex-wrap gap-2" aria-label={`Compétences en ${category.title}`}>
                            {category.skills.map((skill, index) => (
                                <li key={index} className="bg-sage-100 dark:bg-sage-800 text-sage-800 dark:text-sage-200 px-3 py-1.5 rounded-xl text-sm font-bold hover:bg-sage-200 dark:hover:bg-sage-700 hover:text-sage-900 dark:hover:text-white transition-colors cursor-default">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
