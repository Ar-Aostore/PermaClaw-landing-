
```markdown
# PermaClaw Landing Page

This repository contains the **landing page** and **documentation site** for [PermaClaw](https://github.com/yourname/permaclaw) – the immortal AI assistant.

The site is built with **Vite**, **React**, and **Tailwind CSS**. It serves as both a marketing page and a central hub for documentation and community links.

---

## ✨ Features

- **Hero section** with animated background (canvas/particles).
- **Logo carousel** of partners and technologies (Arweave, AO, picoclaw, etc.).
- **About / use‑cases** split into two main audiences: Biocomputer Engineers & Privacy‑conscious users.
- **Features grid** with custom icons for permanent memory, aoStore, multi‑channel, tool calling, etc.
- **Call‑to‑action** to download or build PermaClaw.
- **Documentation** section linking to the main repo’s README, guides, and API reference.
- **Responsive** design, mobile‑friendly.

---

## 🚀 Getting Started (Development)

### Prerequisites
- [Node.js 18+](https://nodejs.org/)
- [Bun](https://bun.sh) (optional, but recommended)

### Install & Run
```bash
git clone https://github.com/yourname/permaclaw-landing.git
cd permaclaw-landing
bun install   # or npm install
bun run dev   # starts dev server at http://localhost:5173
Build for Production
bash
bun run build
# output is in `dist/`
🗂️ Project Structure
text
src/
  components/
    ├── Hero/
    ├── About/
    ├── Features/
    ├── Logos/
    └── ...
  pages/
    ├── Home.jsx
    ├── Docs.jsx
    └── ...
  assets/
    ├── icons/          # custom feature icons
    └── images/
  styles/
    └── index.css       # Tailwind imports & custom styles
public/
  ├── favicon.ico
  └── logo.svg
index.html
package.json
vite.config.js
tailwind.config.js
🎨 Customising the Content
Text & copy – edit the JSX files in src/components/ or src/pages/.

Icons – place custom SVG icons in src/assets/icons/ and import them in the components.

Logo carousel – update the list of logos in src/components/Logos/Logos.jsx.

Animations – the background is implemented in src/components/Hero/BackgroundCanvas.jsx. You can replace it with your own effect.

🌐 Deployment
The site is designed to be deployed to any static hosting service:

Vercel – vercel --prod

Netlify – drag dist/ or connect your Git repo

GitHub Pages – use gh-pages branch and the deploy script

Example deploy script (add to package.json):

json
"scripts": {
  "deploy": "bun run build && npx gh-pages -d dist"
}
📄 License
This landing page is also MIT licensed. Feel free to reuse, modify, and adapt.

🙏 Contributing
Found a typo or want to improve the design? PRs are welcome!
For major changes, please open an issue first to discuss.
# PermaClaw-landing-
