# 🚀 Démarrer un nouveau projet React (template personnel)

Ce projet est un **template React personnalisé** prêt à l'emploi avec :

- Vite
- Yarn (v3 Plug’n’Play)
- React Router
- Sass (SCSS) structuré
- ESLint + Prettier déjà configurés
- Structure modulaire : `styles/`, `pages/`, `components/`, `data/`, `assets/`
---

## ✅ Étapes à suivre après avoir copié ce projet :

# 1. Copier le template
cp -R ~/Desktop/projets/mon-template-react ~/Desktop/projets/new-project

# 2. Entrer dans le dossier
cd ~/Desktop/projets/new-project

# 3. Supprimer l’ancien Git (si présent)
rm -rf .git

# 4. (Optionnel) Modifier le package.json : nom, description, auteur

# 5. Installer les dépendances
yarn install

# 5. (Optionnel) Vérifier / formater ton code
yarn lint          # pour vérifier ton code
yarn lint --fix    # pour corriger automatiquement
yarn format        # pour appliquer Prettier

# 6. (Optionnel) Créer un nouveau dépôt Git
git init
git add .
git commit -m "Initial commit"

# 7. Lancer le projet
yarn dev

👉 Le projet sera accessible à : http://localhost:5173
---

## ✨ Convention utilisée

- Chaque composant ou page a son propre dossier + son fichier `.scss`
- Tous les styles globaux sont centralisés dans `styles/main.scss`
- Prettier et ESLint sont configurés pour formater automatiquement le code

## ✨ Structure du projet

src/
├── assets/              # Images, icônes, polices, etc.
├── components/          # Composants réutilisables (1 dossier = 1 composant)
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.scss
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.scss
├── pages/               # Pages principales (1 dossier = 1 page)
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.scss
│   └── About/
│       ├── About.jsx
│       └── About.scss
├── styles/              # SCSS globaux
│   ├── abstracts/       # Variables, mixins
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── base/            # Reset, base, typographie
│   │   ├── _reset.scss
│   │   ├── _base.scss
│   │   └── _typography.scss
│   ├── animations/      # Keyframes, transitions
│   │   └── _keyframes.scss
│   └── main.scss        # Point d’entrée des styles (importe tout le reste)
├── App.jsx              # Composant racine
├── main.jsx             # Point d’entrée React
