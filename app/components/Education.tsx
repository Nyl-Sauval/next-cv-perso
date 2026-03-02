export default function Education() {
    const educationList = [
        {
            degree: "BUT Informatique (Étudiant)",
            school: "IUT de Lens",
            period: "09/2023 - 07/2026",
            location: "Lens",
            description: "Formation généraliste en informatique (développement local et web, architecture réseau, BDD, gestion de projet)."
        },
        {
            degree: "BAC Général S SI Phy/Chimie",
            school: "Lycée Paul Duez",
            period: "Obtenu en 07/2018",
            location: "Cambrai",
            description: "Sciences de l'ingénieur, dominante Physique et Chimie."
        }
    ];

    const certifications = [
        {
            degree: "Certification TOEIC",
            school: "Score : 980 / 990",
            period: "Obtenu en 11/2025",
            location: "Anglais Professionnel",
            description: "Niveau C1 avancé attestant d'une excellente compréhension écrite et orale de la langue anglaise en milieu professionnel."
        }
    ];

    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-sage-800 dark:text-sage-200 mb-8 flex items-center gap-3 transition-colors">
                <span className="w-8 h-8 rounded-full bg-sage-200 dark:bg-sage-800 flex items-center justify-center text-sage-700 dark:text-sage-300 text-sm transition-colors">🎓</span>
                Formations & Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {educationList.map((edu, index) => (
                    <article key={index} className="bg-white dark:bg-sage-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none border border-sage-200 dark:border-sage-800 hover:border-sage-300 dark:hover:border-sage-600 transition-all">
                        <h3 className="text-xl font-bold text-sage-900 dark:text-sage-100 mb-2 transition-colors">{edu.degree}</h3>
                        <p className="text-sage-600 dark:text-sage-400 font-medium mb-1 transition-colors">{edu.school} - {edu.location}</p>
                        <p className="text-sage-700 dark:text-sage-200 text-sm font-bold mb-4 bg-sage-100 dark:bg-sage-800 inline-block px-3 py-1.5 rounded-full transition-colors">{edu.period}</p>
                        <p className="text-sage-700 dark:text-sage-300 leading-relaxed transition-colors">
                            {edu.description}
                        </p>
                    </article>
                ))}
                {certifications.map((cert, index) => (
                    <article key={`cert-${index}`} className="bg-emerald-50 dark:bg-emerald-900/20 backdrop-blur-xl p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none border border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all">
                        <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2 transition-colors flex items-center gap-2">
                            🏆 {cert.degree}
                        </h3>
                        <p className="text-emerald-700 dark:text-emerald-300 font-bold mb-1 transition-colors">{cert.school} - <span className="font-medium">{cert.location}</span></p>
                        <p className="text-emerald-800 dark:text-emerald-200 text-sm font-bold mb-4 bg-emerald-100 dark:bg-emerald-800/50 inline-block px-3 py-1.5 rounded-full transition-colors">{cert.period}</p>
                        <p className="text-emerald-800/80 dark:text-emerald-200/80 leading-relaxed transition-colors">
                            {cert.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
