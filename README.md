# 🌌 Antigravity: The Premium CV Portfolio Engine

Welcome to the **Antigravity** project—a sophisticated, motion-driven CV showcase engineered for professional impact. This architecture blends high-performance animation with a mobile-first, deeply localized foundation to create a "weightless" user experience.

---

## ✨ Core Features

### 🌌 Antigravity Motion System
- **Velocity-Based Skew**: Utilizing GSAP and `ScrollTrigger`, the project implements a custom "jelly" motion where `.card` and `.template` elements respond to scroll speed. 
- **Physical Constraints**: Motion is dynamically clamped between `-10deg` and `10deg` using a velocity proxy, ensuring fluidity without compromising readability.
- **Hardware Acceleration**: Optimized with `force3D: true` and `transform-origin` anchoring for stutter-free performance on mobile.

### 🌍 Advanced i18n & Localization
- **Nested JSON Engine**: A robust, data-attribute-driven system (`data-i18n`) supporting **English, French, Spanish, and Arabic (ARA)** using a scalable nested JSON architecture.
- **RTL Native Logic**: Full **Right-to-Left** support that goes beyond text direction—reversing layout flows, flipping icon-to-text relationships, and adjusting logical CSS properties.
- **Precision Phrasing**: Specific manual refinements like the **"تمرير"** (Pass/Scroll) indicator for Arabic users ensure cultural and linguistic accuracy.

### 🌓 Reactive Environment
- **State-Driven Backgrounds**: A seamless 6-state gradient system (Hero + 5 Templates) that transitions dynamically based on user scroll position.
- **Antigravity Transitions**: Background shifts are synchronized with content entry animations using `ScrollTrigger` for a cohesive narrative flow.

---

## 📱 Mobile-First Engineering & Tactile UX

### 🛠️ Technical QoL Improvements
- **100dvh Viewport Logic**: Implemented the Dynamic Viewport Height fix to eliminate the infamous "address bar jump" on mobile browsers.
- **Fluid Typography**: Leveraging CSS `clamp(1.8rem, 8vw, 2.8rem)` for headers, providing a seamless scaling experience from ultra-small devices to 4K displays.
- **High-Contrast Interaction**: Action buttons on light themes feature a **manual 2px black border** for maximum visual accessibility and a premium "tactile" feel.

### � Geometric Symmetry
- **Diagonal Constants**: The layout maintains a strict **40px diagonal padding** symmetry.
- **Top-Left**: Multilingual Switcher.
- **Bottom-Right**: SVG Progress Ring + "Back to Top" tracker.
- **Logical Flow**: These constants use logical properties (`inset-inline-start/end`) to ensure the symmetry persists perfectly even when the direction is flipped to RTL.

---

## 🚀 Tech Stack

- **Core**: Semantic HTML5, CSS3 Custom Properties, Modern JavaScript (ES6+).
- **Animation**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, ScrollTo, Core).
- **Layout**: CSS Grid, Flexbox, and **CSS Logical Properties** for internationalization.
- **Typography**: Optimized loading for 'Inter', 'DM Sans', and 'IBM Plex Sans Arabic'.

---

## 🧩 Quality of Life Refinements

- **Touch-Optimized Sliders**: The "See the Transformation" component uses `touch-action: pan-y` to prevent interference between slider interaction and vertical scrolling.
- **Persistent Preferences**: Native `localStorage` integration remembers user language and currency (MAD/USD) choices.
- **Instant Sync**: A recursive translation updater that swaps content in the background before motion triggers, preventing "text flash" or flickering.

---

> *"Build things that feel expensive."* — **Antigravity Standards**