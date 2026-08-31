# INTEL-X — Where Intelligence Meets Exploration

<div align="center">

![INTEL-X Preview](src/assets/worldmap.jpg)

### An interactive intelligence and operations dashboard designed to bring global activity and operational data together in one place.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.575.0-F05032?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Deployment](#-deployment)

</div>

---

## 🛰️ Overview

**INTEL-X** is an interactive intelligence and operations dashboard designed to bring global activity and operational data together in one place. The project focuses on creating a clean, futuristic interface that makes complex information easier to explore and understand.

The dashboard combines interactive global maps, flight-route visualization, intelligence insights, and real-time command-center style UI elements to create an immersive experience.

---

## ✨ Features

- **🌐 Interactive Global Map & Location Visualization**: Dynamic SVG flight paths and telemetry nodes rendered over a high-contrast world map with smooth animated plane routes.
- **🎯 Heads-Up Display (HUD) Telemetry**: Real-time cyber HUD elements, grid coordinates (`Lat 28.61° / Long 77.20°`), and system telemetry badges.
- **🕵️ Interactive Operative Artwork**: Layered intelligence operative artwork featuring a contoured black mouth mask and visible human eyes in balanced 3/4 profile, revealed smoothly on hover.
- **✨ Soft-Cyan Floating Particle System**: Procedurally seeded lightweight particle layer with continuous floating animation loops.
- **🖱️ Mouse Parallax Dynamics**: Responsive mouse-tracking physics that gently shift foreground, HUD, and map layers independently.
- **🎨 Modular CSS Architecture**: Clean single-page structure with individual, dedicated `.css` style sheets for every component.
- **📊 Intelligence Data Panels**: Interactive charts, metric counters, and operational data components.

---

## 🛠️ Tech Stack

| Technology                                                           | Purpose                                               |
| :------------------------------------------------------------------- | :---------------------------------------------------- |
| **[React 19](https://react.dev/)**                                   | Core UI library                                       |
| **[Vite 8](https://vitejs.dev/)**                                    | Next-generation build tool & dev server               |
| **[Tailwind CSS v4](https://tailwindcss.com/)**                      | Utility-first styling & custom semantic design tokens |
| **[Lucide React](https://lucide.dev/)**                              | Modern vector iconography                            |
| **[Recharts](https://recharts.org/)**                                | Interactive data charts & visualization               |
| **[IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)** | Monospace telemetry & HUD typography                  |
| **[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)** | Futuristic display headings                           |
| **[Inter](https://fonts.google.com/specimen/Inter)**                 | Clean sans-serif body typography                      |

---

## 📂 Project Structure

```text
intel-x-project/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── operative.png              # Base operative artwork
│   │   ├── operative_face_masked.png  # Aligned 3/4 profile face mask
│   │   └── worldmap.jpg               # Global coordinates map texture
│   ├── components/
│   │   └── intel/
│   │       ├── FlightRoutes.jsx & .css    # SVG flight corridor animations
│   │       ├── Hero.jsx & .css            # Main stage & mouse parallax
│   │       ├── IntelligenceHUD.jsx & .css # HUD overlay & telemetry scanlines
│   │       ├── Navbar.jsx & .css          # Top navigation & network status
│   │       ├── Particles.jsx & .css       # Floating particle background
│   │       └── WorldMap.jsx & .css        # World map atmosphere layer
│   ├── App.jsx & App.css              # Root application component
│   ├── main.jsx                       # DOM mounting entry
│   └── styles.css                     # Global tokens & animations
├── index.html                         # Main HTML entry
├── vite.config.js                     # Vite configuration with @ alias
└── package.json                       # Project scripts & dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or higher) and **npm** installed.

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

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

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

## 🚢 Deployment

The project is ready to be deployed using **Vercel**, **Netlify**, or **GitHub Pages**:

- **Vercel**: Connect the GitHub repository and use the default Vite build settings (`npm run build`, output `dist`).
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.

---

## 👤 Author

**Sristi Singh**
- GitHub: [@sristisingh67-dev](https://github.com/sristisingh67-dev)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
