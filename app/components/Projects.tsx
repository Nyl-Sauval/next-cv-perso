export default function Projects() {
    const projects = [
        {
            title: "DriveOps",
            status: "En cours (13/09/25)",
            description: "Application de gestion d’entretien automobile avec suivi, factures et notifications.",
            statusColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/50"
        },
        {
            title: "DriveBy",
            status: "Terminé (06/05/25)",
            description: "Application de location de véhicules avec API centralisée, client web et application mobile.",
            statusColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/50"
        },
        {
            title: "Portfolio",
            status: "En cours (03/01/25)",
            description: "Site web personnel pour présenter mes projets et compétences.",
            statusColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/50"
        },
        {
            title: "Marathon du Web",
            status: "Terminé (18/12/24)",
            description: "Concours de développement web en équipe sur 36 heures.",
            statusColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/50"
        },
        {
            title: "Cardle",
            status: "En cours (11/11/24)",
            description: "Jeu de devinettes automobiles où les joueurs identifient des véhicules à partir d'images.",
            statusColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/50"
        },
        {
            title: "LensJudge",
            status: "Terminé (22/10/24)",
            description: "Application de gestion de compétition de programmation.",
            statusColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/50"
        },
        {
            title: "Juste Prix",
            status: "Terminé (07/10/24)",
            description: "Application web reprenant le concept du célèbre jeu télévisé.",
            statusColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/50"
        },
        {
            title: "Bomberman",
            status: "En cours (01/10/24)",
            description: "Jeu de stratégie en JavaFX",
            statusColor: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800/50"
        },
        {
            title: "MasterMind",
            status: "Terminé (01/04/24)",
            description: "Version numérique du jeu de réflexion avec combinaisons secrètes de couleurs.",
            statusColor: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/50"
        }
    ];

    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-sage-800 dark:text-sage-200 mb-8 flex items-center gap-3 transition-colors">
                <span className="w-8 h-8 rounded-full bg-sage-200 dark:bg-sage-800 flex items-center justify-center text-sage-700 dark:text-sage-300 text-sm transition-colors">🚀</span>
                Mes Projets
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <article key={index} className="flex flex-col bg-white dark:bg-sage-900/60 backdrop-blur-xl p-6 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none border border-sage-200 dark:border-sage-800 hover:border-sage-300 dark:hover:border-sage-600 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-sage-900 dark:text-sage-100 group-hover:text-sage-700 dark:group-hover:text-white transition-colors">{project.title}</h3>
                        </div>
                        <p className="text-sage-700 dark:text-sage-300 mb-6 flex-grow transition-colors">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center mt-auto">
                            <span className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${project.statusColor}`}>
                                {project.status}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
