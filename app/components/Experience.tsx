export default function Experience() {
    const experiences = [
        {
            title: "Développeur Java (Alternant)",
            company: "Lenrek Informatique",
            period: "01/2025 - 08/2026",
            location: "Eleu-dit-Lauwette",
            description: "Développement d'applications, maintenance et intégration logicielle.",
            skills: ["Java", "JavaScript", "SQL", "PostgreSQL", "Vaadin", "Hibernate"]
        },
        {
            title: "Vendeur Polyvalent (Étudiant)",
            company: "Brico Dépôt",
            period: "08/2021 - 08/2024",
            location: "Faches-Thumesnil",
            description: "Accueil client, conseil technique sur les produits, gestion des rayons et inventaires.",
            skills: ["Conseil client", "Gestion de stock"]
        },
        {
            title: "Agent Contractuel (Intérim)",
            company: "QualiService",
            period: "06/2020 - 06/2021",
            location: "Cambrai",
            description: "Missions de soutien logistique, préparation de commandes et gestion de stocks.",
            skills: ["Logistique", "Préparation de commandes"]
        }
    ];

    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-sage-800 dark:text-sage-200 mb-8 flex items-center gap-3 transition-colors">
                <span className="w-8 h-8 rounded-full bg-sage-200 dark:bg-sage-800 flex items-center justify-center text-sage-700 dark:text-sage-300 text-sm transition-colors">💼</span>
                Expériences Professionnelles
            </h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <article key={index} className="group bg-white dark:bg-sage-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none border border-sage-200 dark:border-sage-800 hover:border-sage-300 dark:hover:border-sage-600 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4 md:gap-0">
                            <div>
                                <h3 className="text-2xl font-bold text-sage-900 dark:text-sage-100 group-hover:text-sage-700 dark:group-hover:text-white transition-colors">
                                    {exp.title} <span className="text-sage-500 dark:text-sage-400 font-medium whitespace-nowrap">- {exp.company}</span>
                                </h3>
                                <p className="text-sage-500 dark:text-sage-400 text-sm font-medium mt-1 uppercase tracking-wider transition-colors">{exp.location}</p>
                            </div>
                            <span className="inline-block px-4 py-1.5 bg-sage-100 dark:bg-sage-800 text-sage-800 dark:text-sage-200 rounded-full text-sm font-bold tracking-wide whitespace-nowrap h-fit transition-colors">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-sage-700 dark:text-sage-300 leading-relaxed text-lg mb-4 transition-colors">
                            {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {exp.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="text-xs font-bold px-3 py-1.5 bg-sage-50 dark:bg-sage-800/80 text-sage-700 dark:text-sage-200 rounded-lg border border-sage-200 dark:border-sage-700 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
