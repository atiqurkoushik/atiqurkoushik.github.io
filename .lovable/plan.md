
# Koushik Atiqur — Premium 3D Portfolio (Phase 1)

## Overview
A visually stunning, futuristic portfolio with 3D elements, glassmorphism, neon accents (purple/blue/orange), smooth animations, and a dark/light theme toggle. Confident, bold copywriting throughout.

## Design System
- **Dark theme default** with light toggle — deep navy/black backgrounds, glassmorphic cards
- **Neon accent palette**: Purple (#A855F7), Blue (#3B82F6), Orange (#F97316) with glow effects
- **Typography**: Bold, modern sans-serif (Inter/Space Grotesk)
- **Glassmorphism**: Frosted glass cards with backdrop blur and subtle borders

## Sections to Build (Phase 1 — 8 Core Sections)

### 1. Animated Loading Screen
- Animated "KA" logo with neon glow fade-in, then transition to main site

### 2. Sticky Navbar
- Glassmorphic navbar, smooth scroll links, dark/light theme toggle with animated icon, hamburger menu on mobile

### 3. Hero Section
- Full-screen with animated 3D floating geometric shapes (Three.js via React Three Fiber)
- Mouse-reactive 3D object in the background
- Bold headline: *"I solve problems — just share it with me, dude."*
- Subtitle + CTA buttons with glow hover effects
- Animated particle/gradient mesh background

### 4. About Me
- Story-driven section with animated text reveals on scroll
- Glassmorphic card layout, personality-driven copy
- Parallax depth layering

### 5. Skills Overview
- Animated 3D rotating tech stack icons using React Three Fiber
- Skill categories with animated progress indicators
- Hover micro-interactions on each skill

### 6. Featured Projects (3–5 cards)
- 3D floating project cards with flip/expand interaction on hover
- Filterable by category tags
- Each card: thumbnail, title, description, tech stack badges, live/GitHub links
- Placeholder project data

### 7. Services Offered
- Glassmorphic service cards with neon icon accents
- Hover scale + glow animations
- Sales + Tech hybrid services highlighted

### 8. Contact Section + Footer
- Contact form (name, email, message) with animated input focus states
- Social links with hover glow effects (GitHub, LinkedIn, Twitter, etc.)
- Bold CTA: *"Your problem = my next win."*
- Clean modern footer with links and copyright

## Animations & Interactions (Throughout)
- **Framer Motion** for scroll-triggered fade-ins, slide-ins, stagger animations
- **React Three Fiber** for 3D hero object + floating elements
- **Smooth scroll** behavior site-wide
- **Hover effects** on all interactive elements (scale, glow, color shifts)
- **Parallax** depth on section backgrounds
- **Custom cursor glow** effect (desktop only)

## Technical Approach
- React + Vite + TypeScript + Tailwind CSS (existing stack)
- Framer Motion for animations
- @react-three/fiber + @react-three/drei for 3D
- Dark/light theme via CSS variables + context
- Mobile-first responsive design
- Static blog pages (placeholder, expandable later)

## Phase 2 (Later)
Experience Timeline, All Projects Grid, Case Studies, Achievements, Testimonials, Blog categories, Fun/Savage Quotes section, Newsletter signup, and remaining sections.
