# INTEL-X — Where Intelligence Meets Exploration

<div align="center">

![INTEL-X Preview](src/assets/worldmap.jpg)

### A classified-format futuristic innovation & intelligence technology experience.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.575.0-F05032?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Live Demo](#) • [Explore Features](#-features) • [Getting Started](#-getting-started) • [Design System](#-design-system)

</div>

---

## 🛰️ Overview

**INTEL-X** is an interactive, futuristic single-page web experience built around intelligence, cyber telemetry, and classified operations. Built as a high-performance **React + Vite** single-page application, it combines dark aesthetic interfaces, real-time HUD telemetry, animated SVG flight network corridors, atmospheric operative artwork, and smooth interactive parallax physics.

---

## ✨ Features

- **🌐 Interactive World Map & Flight Corridors**: Dynamic SVG flight paths and telemetry nodes rendered over a high-contrast world map with smooth animated plane routes and pulse nodes.
- **🎯 Heads-Up Display (HUD) Telemetry**: Real-time cyber HUD elements, animated scanlines, grid coordinates (`Lat 28.61° / Long 77.20°`), and system telemetry badges.
- **🕵️ Ambient Operative Visuals**: Layered intelligence operative artwork with ambient radial lighting and smooth breathing animations.
- **✨ Soft-Cyan Floating Particle System**: Procedurally seeded lightweight particle layer with continuous floating animation loops.
- **🖱️ Mouse Parallax Dynamics**: Responsive mouse-tracking physics that gently shift foreground, HUD, and map layers independently.
- **🎨 Modular CSS Architecture**: Clean single-page structure with individual, dedicated `.css` style sheets for every component.
- **⚡ Ultra-Fast Performance**: Built on Vite with Tailwind CSS v4 and pure JSX, bundling in under 400ms.

---

## 🛠️ Tech Stack

| Technology                                                           | Purpose                                               |
| :------------------------------------------------------------------- | :---------------------------------------------------- |
| **[React 19](https://react.dev/)**                                   | Core UI library                                       |
| **[Vite 8](https://vitejs.dev/)**                                    | Next-generation build tool & dev server               |
| **[Tailwind CSS v4](https://tailwindcss.com/)**                      | Utility-first styling & custom semantic design tokens |
| **[Lucide React](https://lucide.dev/)**                              | Modern, clean vector iconography                      |
| **[IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)** | Monospace telemetry & HUD typography                  |
| **[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)** | Futuristic display headings                           |
| **[Inter](https://fonts.google.com/specimen/Inter)**                 | Clean, readable sans-serif body font                  |

---

## 📂 Project Structure

```text
intel-x-project/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── operative.png       # Classified operative artwork
│   │   └── worldmap.jpg        # Global coordinates map texture
│   ├── components/
│   │   └── intel/
│   │       ├── FlightRoutes.jsx & .css    # SVG flight corridor animations
│   │       ├── Hero.jsx & .css            # Main stage & mouse parallax
│   │       ├── IntelligenceHUD.jsx & .css # HUD overlay & telemetry scanlines
│   │       ├── Navbar.jsx & .css          # Top navigation & network status
│   │       ├── Particles.jsx & .css       # Floating particle background
│   │       └── WorldMap.jsx & .css        # World map atmosphere layer
│   ├── App.jsx & App.css       # Root application component
│   ├── main.jsx                # DOM mounting entry
│   └── styles.css              # Global tokens & HUD animations
├── index.html                  # Main HTML entry & Google Fonts
├── vite.config.js              # Vite configuration with @ path alias
└── package.json                # Project scripts & dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sristisingh67-dev/INTEL-X-PROJECT.git
   cd INTEL-X-PROJECT
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 📦 Build & Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Design System & Color Palette

| Token           | CSS Variable  | Color Preview           | Description                   |
| :-------------- | :------------ | :---------------------- | :---------------------------- |
| **Deep Black**  | `--black`     | `#000000`               | Void background base          |
| **Cyber Cyan**  | `--cyan`      | `oklch(0.78 0.096 218)` | Primary highlight & glows     |
| **Soft Cyan**   | `--soft-cyan` | `oklch(0.87 0.072 216)` | Particle & text contrast      |
| **HUD Blue**    | `--blue`      | `oklch(0.45 0.062 220)` | Ambient atmospheric gradient  |
| **Line / Grid** | `--line`      | `rgba(cyan, 0.25)`      | Interface borders & gridlines |

---

## 🚢 Deployment

You can deploy this Vite React project effortlessly on:

- **[Vercel](https://vercel.com/)**: Connect your GitHub repository and deploy with default Vite preset settings.
- **[Netlify](https://www.netlify.com/)**: Set build command to `npm run build` and publish directory to `dist`.
- **[GitHub Pages](https://pages.github.com/)**: Build and deploy via GitHub Actions.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with intelligence & precision by <a href="https://github.com/sristisingh67-dev">sristisingh67-dev</a>.</sub>
</div>
