# Velorah - Cinematic Scrollytelling

A cinematic scrollytelling experience with canvas-based frame animation controlled by scroll position.

## Features

- **Scroll-Controlled Animation**: 240 frames of animation driven by scroll position
- **Canvas Rendering**: High-performance HTML5 canvas with object-fit: cover logic
- **Mouse Parallax**: Interactive 3D depth effect with GSAP animations
- **Loading Screen**: Real-time percentage display during frame preloading
- **Glassmorphic UI**: Liquid-glass navigation and buttons
- **Cinematic Typography**: Instrument Serif and Inter fonts
- **Smooth Scrolling**: GSAP ScrollToPlugin for buttery-smooth navigation
- **Responsive Design**: Adapts to any screen size with zoom factor

## Technical Stack

- React + TypeScript
- Vite
- Tailwind CSS
- GSAP (with ScrollToPlugin)
- HTML5 Canvas

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## How It Works

### Frame Preloading
All 240 frames are preloaded into memory before the experience starts. A loading screen displays real-time progress.

### Scroll-to-Frame Mapping
- Container height: 500vh (creates long scrollable area)
- Scroll position maps to frame index (0-239)
- Uses `requestAnimationFrame` for smooth 60fps rendering

### Canvas Rendering
- Fullscreen canvas with `object-fit: cover` logic
- Zoom factor of 1.35x to hide letterboxing
- Automatic aspect ratio calculation
- Dynamic resizing on window resize

### Mouse Parallax
- Canvas scaled to 1.05x to prevent edge visibility
- GSAP smooth animation in opposite direction of mouse movement
- Creates subtle 3D depth effect

## Configuration

Edit `src/components/ScrollytellingCanvas.tsx` to adjust:

- `TOTAL_FRAMES`: Number of frames (currently 240)
- `ZOOM_FACTOR`: Zoom level (currently 1.35)
- `SCROLL_HEIGHT`: Scroll distance in vh (currently 500vh)
