# Mémoire d'Éco-conception Web

## 1. L'Intérêt de NextJS pour un site éco-responsable (5 raisons)

Dans une **démarche scientifique** (mesure et documentation de nos choix techniques) visant la **sobriété dimensionnelle et d'usage**, le choix de Next.js se justifie par plusieurs aspects :

1. **Génération de Sites Statiques (SSG) / Export statique :** En utilisant `output: 'export'` sur Next.js, les pages sont pré-rendues à la compilation en fichiers HTML, CSS, et JS statiques. Cela réduit drastiquement la consommation des serveurs (pas de calcul de la page côté serveur à chaque requête) favorisant une **efficacité de gestion** (utilisation minimale de l'infrastructure).
2. **Minification et Code Splitting par défaut :** Next.js divise intelligemment le code JavaScript pout ne charger que ce qui est strictement nécessaire à la page affichée. C'est le principe de **sobriété d'usage** : utilisation limitée aux besoins réels pour réduire le volume de données transféré.
3. **Hébergement en périphérie (Edge / CDN comme Github Pages) :** Un site statique Next.js s'héberge très facilement sur des CDN. Cela rapproche la donnée de l'utilisateur final et réduit le nombre de rebonds réseaux, réduisant de facto l'empreinte carbone liée à la transmission réseau.
4. **Optimisation native (Google Fonts & Scripts) :** Le framework supprime les requêtes réseau superflues (ex: polices imbriquées) ce qui libère au plus vite les ressources de l'utilisateur (**Efficacité d'usage**).
5. **Prévention de l'usure de batterie (Performance frontend) :** Les optimisations du "Virtual DOM" lié à React 19 et la gestion efficace du rendu limitent la sollicitation du CPU local de l'appareil client, allongeant la durée de vie de la batterie et, à long terme, la durée de vie de l'appareil, luttant contre l'**obsolescence**.

## 2. Bonnes pratiques mises en œuvre dans le cadre de ce site CV (5 minimum)

En adoptant une **approche holistique** de l'IT éco-responsable pour minimiser notre impact environnemental limitant l'amplification de nos excès, ce site implémente les pratiques suivantes :

1. **Sobriété d'adaptation avec Tailwind CSS :** Bien que Tailwind soit utilisé pour générer un design moderne, PostCSS purge drastiquement le CSS généré. L'application finale ne charge que les classes CSS strictement utilisées, évitant le téléchargement de milliers de lignes de code inutiles.
2. **Design UI Minimaliste, Contraste élevé et Mode Sombre natif (Accessibilité) :** Utilisation d'un thème vert sauge avec de forts contrastes luttant contre l'"illectronisme" et favorisant l'**accessibilité**, réduisant les inégalités. De plus, un **Mode Sombre** (Dark Mode) a été implémenté via un commutateur développé spécifiquement en React sans librairie externe lourde (comme `next-themes`). Ce mode réduit activement la consommation énergétique sur les écrans OLED.
3. **Polices Systèmes Uniquement :** Au lieu de faire des requêtes vers Google Fonts (qui ont par ailleurs des implications sur la **vie privée** liées aux métadonnées des requêtes), le site exploite `system-ui, -apple-system, sans-serif`. Cela permet d'économiser le téléchargement direct de plusieurs centaines de kilo-octets de polices pour chaque visiteur en limitant les appels externes.
4. **Hébergement sans base de données (Efficacité de Conception) :** En adoptant une architecture complètement "Serverless et sans backend", le CV limite drastiquement son exposition aux défaillances, et le nombre de serveurs nécessaires pour le faire tourner en permanence (pas de veille des bases de données).
5. **DOM Sémantique Allégé :** L'usage de balises sémantiques HTML5 (`<main>`, `<header>`, `<article>`, `<section>`) réduit la profondeur et l'inflation du DOM. L'interface est non seulement bien interprétée par les lecteurs d'écrans (garantissant un accès universel sans contrainte d'**équipement** récent), mais également très rapide à parser pour le navigateur, contribuant à la **sobriété dimensionnelle**.
