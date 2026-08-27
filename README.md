# INTEL-X — Where Intelligence Meets Exploration

<div align="center">

![INTEL-X Banner](src/assets/operative.png)

**A futuristic, classified-format intelligence interface and technology landing experience.**

[![React](https://img.shields.io/badge/React-19.x-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 🛰️ Overview

**INTEL-X** is an immersive single-page web experience engineered with a tactical HUD aesthetic, high-contrast dark theme, and interactive cybernetic visual elements. Built with **React (JSX)**, **Vite**, and **Tailwind CSS v4**, the application demonstrates modern frontend animation techniques, SVG path morphing, and cursor-reactive parallax depth.

---

## ✨ Key Features

- **🌐 Interactive World Map & Flight Trajectories**: Animated SVG flight routes with real-time glowing pulses, animated coordinates, and telemetry.
- **🕶️ Operative Visual with Parallax Depth**: Multi-layered operative graphic with breathing animations and smooth cursor-tracking parallax.
- **⚡ Cyberpunk HUD Overlay**: Telemetry readouts, signal status indicators, corner framing brackets, and coordinate trackers (`28.61° N / 77.20° E`).
- **✨ Ambient Particle Field**: Lightweight floating ambient particles with varying depth speeds and soft cyan luminescence.
- **🎨 Modular Component Architecture**: Clean React JSX architecture where each component has its own dedicated `.css` stylesheet.
- **⚡ Blazing Fast Vite Build**: Sub-second builds and instantaneous Hot Module Replacement (HMR).

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) (JSX) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Dedicated Component CSS |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | `Space Grotesk`, `Inter`, `IBM Plex Mono` |

---

## 📁 Project Structure

```text
intel-x-project/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── operative.png           # Operative visual asset
│   │   └── worldmap.jpg            # Dotted continents map texture
│   ├── components/
│   │   ├── intel/
│   │   │   ├── FlightRoutes.css    # SVG route animation styles
│   │   │   ├── FlightRoutes.jsx    # Animated SVG global route lines
│   │   │   ├── Hero.css            # Hero stage styles
│   │   │   ├── Hero.jsx            # Main interactive hero section
│   │   │   ├── IntelligenceHUD.css # HUD layout styles
│   │   │   ├── IntelligenceHUD.jsx # Telemetry & coordinate overlays
│   │   │   ├── Navbar.css          # Navigation bar styles
│   │   │   ├── Navbar.jsx          # Header with status indicator
│   │   │   ├── Particles.css       # Particle animation styles
│   │   │   ├── Particles.jsx       # Floating ambient particles
│   │   │   ├── WorldMap.css        # Map layer styles
│   │   │   └── WorldMap.jsx        # Atmospheric background map
│   │   └── ui/                     # UI components (Sonner, Tooltip, etc.)
│   ├── hooks/
│   │   └── use-mobile.jsx          # Responsive viewport hook
│   ├── lib/
│   │   └── utils.js                # Class utilities (clsx / tailwind-merge)
│   ├── App.css                     # Main application styles
│   ├── App.jsx                     # Single-page root component
│   ├── main.jsx                    # Client DOM entry point
│   └── styles.css                  # Global tokens & HUD utility classes
├── index.html                      # Single main HTML template
├── jsconfig.json                   # Path alias mappings (@/*)
├── package.json                    # Dependencies & scripts
└── vite.config.js                  # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed.

### 1. Clone the repository

```bash
git clone https://github.com/sristisingh67-dev/INTEL-X-PROJECT.git
cd INTEL-X-PROJECT
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to explore the experience.

---

## 📦 Available Scripts

- `npm run dev` — Launches the local development server with HMR.
- `npm run build` — Compiles and bundles production-ready assets into the `dist/` folder.
- `npm run preview` — Locally previews the production build.
- `npm run lint` — Runs ESLint to verify code quality.
- `npm run format` — Formats codebase using Prettier.

---

## 👤 Author

**Sristi Singh**
- GitHub: [@sristisingh67-dev](https://github.com/sristisingh67-dev)
- Email: [sristisingh67@gmail.com](mailto:sristisingh67@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
