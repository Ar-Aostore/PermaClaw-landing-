# 🦞 PermaClaw Landing Page

This repository contains the official landing page for **PermaClaw** – your immortal AI assistant with wallet‑recoverable memory.

The site is built with **React**, **TypeScript**, and . It features a responsive design, light/dark theme toggle, and clearly communicates the value of PermaClaw to two main audiences: **biocomputer engineers** and **users seeking their personal AI asistant to have  permanent memory**.

---

## ✨ Features

- **Hero section** with wallet‑recoverable memory badge and key metrics.
- **Two‑audience cards** explaining benefits for biocomputer engineers and privacy‑conscious users.
- **How it works** three‑step process (Provide Wallet → Spawn Memory → Chat & Store).
- **Features grid** with icons for Wallet‑Recoverable, aoStore, Multi‑Channel Chat, Tool Calling, Biocomputing Integration, and Ultra‑Lightweight.
- **Comparison table** contrasting traditional AI with PermaClaw.
- **Call‑to‑action** section with links to launch the app and documentation.
- **Footer** with product links, resources, ecosystem, and social media.
- **Theme toggle** (light/dark) with persistent user preference.

---

## 🚀 Getting Started (Development)

### Prerequisites
- [Node.js 18+](https://nodejs.org/)
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/) or [bun](https://bun.sh)

### Installation
```bash
git clone https://github.com/yourname/permaclaw-landing.git
cd permaclaw-landing
npm install   # or yarn install / bun install
Run Development Server
bash
npm run dev   # or yarn dev / bun dev
The site will be available at http://localhost:5173 (default Vite port).

Build for Production
bash
npm run build
# output is in `dist/`



###  🗂️ Project Structure
text
src/
├── components/
│   ├── NavigationsButton.tsx       # Reusable button with navigation
│   ├── navbar/
│   │   └── NavBar.tsx              # Navbar with logo and theme toggle
│   └── sidebar/                     # (not used on landing page)
├── data/
│   └── docsData.json                # Documentation content (used in docs page)
├── pages/
│   └── home/
│       ├── Home.tsx                  # Main landing page component
│       ├── Home.css                   # Landing page styles
│       └── components/                 # Homepage sub‑components
│           ├── Navbar.tsx
│           ├── HeroSection.tsx
│           ├── UserGroupsSection.tsx
│           ├── HowItWorksSection.tsx
│           ├── FeaturesSection.tsx
│           ├── ComparisonTable.tsx
│           ├── CTASection.tsx
│           └── Footer.tsx
├── services/
│   └── ThemeProvider.tsx             # Theme context for light/dark mode
├── App.tsx                            # Main app with routing
├── main.tsx
└── index.html
🎨 Customising the Content
All text and links are contained within the React components in src/pages/home/components/. You can edit them directly to update the landing page.

To change theme colors, modify the CSS variables in src/pages/home/Home.css under the :root and [data-theme="dark"] selectors.


###  🌐 Deployment
The site is static and can be deployed to any static hosting service:

Vercel – vercel --prod
### 📄 License
This landing page is licensed under the MIT License. See LICENSE for details.