<div align="center">
  <h1>✨ Velorah - Interior Design Studio ✨</h1>
  <p><strong>A premium, cinematic scrollytelling web experience for modern interior design.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

<br />

## 📖 Overview

**Velorah** is a visually stunning, high-performance web application tailored for an elite interior design studio. It leverages modern web technologies to create an immersive, cinematic experience. By combining scroll-controlled canvas animations, interactive 3D parallax effects, and buttery-smooth page transitions, the platform is designed to leave a lasting impression on visitors.

## 🚀 Key Features

- **Cinematic Scrollytelling:** 240 high-resolution frames of animation seamlessly controlled by the user's scroll position, creating an interactive film-like journey.
- **High-Performance Canvas Rendering:** Utilizes an HTML5 canvas with intelligent `object-fit: cover` logic, dynamically resizing and adapting to any aspect ratio without performance drops.
- **Immersive Mouse Parallax:** Interactive 3D depth effects powered by GSAP, reacting smoothly to mouse movement for an engaging UX.
- **Intelligent Preloading:** Real-time percentage display during asset preloading to ensure smooth playback without buffering.
- **Premium Aesthetics:** Features a dark, glassmorphic UI, liquid-glass navigation, and elegant typography (Instrument Serif and Inter).
- **Interactive Portfolio Gallery:** A curated exhibition section powered by `framer-motion` for complex scroll-triggered layout animations.
- **Fully Responsive:** Adapts flawlessly to any screen size, guaranteeing a premium experience on desktop, tablet, and mobile.

## 🛠️ Technology Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS, `clsx`, `tailwind-merge`
- **Animations:** GSAP (ScrollToPlugin) & Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Build Tool:** Vite

## ⚙️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v16+ recommended) and `npm` installed.

### Installation

1. **Clone the repository** (if not already local)
   ```bash
   git clone https://github.com/Aayu126/InteriorDesignWebsite-.git
   cd InteriorDesignWebsite-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

## 🧠 Architecture & Logic

### Frame Preloading & Canvas Rendering
All 240 frames are preloaded into memory before the experience starts. The scroll position is mapped linearly to a frame index (0-239). The canvas employs a `requestAnimationFrame` loop for a butter-smooth 60fps render. A zoom factor of 1.35x ensures no letterboxing occurs, creating a true full-screen cinematic effect.

### Mouse Parallax
The canvas is intentionally scaled to 1.05x to prevent viewport edge clipping during mouse movement. GSAP smoothly translates the background in the opposite direction of the cursor, creating a subtle, highly premium 3D depth illusion.

## 🔧 Configuration

You can easily adjust the core animation parameters by editing `src/components/ScrollytellingCanvas.tsx`:

- `TOTAL_FRAMES`: Number of scroll frames (default: `240`)
- `ZOOM_FACTOR`: Controls the fill scale (default: `1.35`)
- `SCROLL_HEIGHT`: Distance required to complete the animation (default: `500vh`)

## 🤝 Deployment

This project is fully optimized and deployment-ready for platforms like **Vercel**, **Netlify**, or **Cloudflare Pages**. Simply connect your GitHub repository to your preferred host, and the build settings will be automatically detected (`npm run build`, output directory: `dist`).

---
<div align="center">
  <p>Built with passion for digital craftsmanship and design excellence.</p>
</div>
