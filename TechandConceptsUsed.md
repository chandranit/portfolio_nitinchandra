# Technologies & Concepts Used

This document outlines the core stack and engineering principles behind the portfolio's scrollytelling experience.

## Core Technologies & Languages (Ranked by Contribution)

1.  **Next.js 14 (App Router)**: The architecture’s foundation. It handles the routing, server-side rendering, and production build optimizations (SSG) that make the project extremely fast.
2.  **TypeScript**: Every file in the project is written in TS, ensuring professional-grade type safety and structured data handling for your technical projects and experience.
3.  **Framer Motion**: The "animation brain." Crucial for the project’s identity, it handles the complex mapping of scroll progress to visual states and provides the momentum-based "spring" physics.
4.  **HTML5 Canvas**: Used for high-performance rendering. By drawing the image sequences to a `<canvas>` element instead of manipulating traditional DOM images, we achieve smooth 60fps animations.
5.  **Tailwind CSS**: Used for the design system. It handles the glassmorphism effects, responsive layouts, and the "premium dark mode" aesthetic quickly and consistently.
6.  **React 18**: The library driving the component-based architecture, hooks (like `useRef` and `useEffect`), and rendering logic.
7.  **JavaScript (ES6+)**: The underlying language powering the logic for the canvas engine and interactive elements.

---

## Crucial Concepts & Paradigms

1.  **Scrollytelling**: The primary UX concept where the story of your career unfolds chronologically as the user interacts with the scroll bar.
2.  **Momentum/Spring Physics**: A performance-focused concept that adds "weight" and "friction" to interactions, making the site feel like a high-end physical object rather than a standard webpage.
3.  **Component Memoization (`React.memo`)**: An optimization concept used to prevent expensive re-renders during high-frequency scrolling, preserving battery life and performance.
4.  **Parallax Animation**: The technique of moving different layers (text overlays vs. background sequence) at different speeds to create a sense of depth.
5.  **Responsive Design (Unified Flow)**: Ensuring complex scroll logic behaves identically across Mobile, iPad, and Desktop through CSS breakpoints and dynamic JS detection.
6.  **Glassmorphism**: A design trend utilized in the "Experience" and "Projects" sections using background blurs and thin borders to create a high-end "frosted glass" look.
7.  **Static Site Generation (SSG)**: Building the site into optimized, static files so it loads instantly when deployed.
8.  **GPU Hardware Acceleration**: Using `will-change` CSS hints to tell the computer’s Graphics Card to handle specific animations for maximum smoothness.
