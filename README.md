# 🪄 The Wizard's Portfolio

> A cinematic, interactive developer portfolio designed as an **ancient magical book**.

This project turns a traditional developer portfolio into an immersive reading experience. Instead of navigating through conventional sections and cards, visitors explore the portfolio by opening a magical book and turning its pages.

## ✨ Concept

The portfolio is designed around one simple interaction:

**See the book → choose a chapter → turn the page → discover the developer.**

The visual experience is inspired by the atmosphere of an old wizarding manuscript, with:

- 📖 A physically styled upright book
- 📜 Aged parchment pages
- 🕯️ Dark candlelit surroundings
- ✨ Subtle magical particles and glow
- 🧭 Chapter-based navigation
- 📑 Realistic 3D page-turn animations
- 🖋️ Antique manuscript-inspired typography

> The project uses an original magical aesthetic and does not use copyrighted Harry Potter characters, logos, movie artwork, or proprietary assets.

---

## 🎬 Experience

The main interface is an open book standing in a dark magical environment.

Each spread contains a different part of the portfolio.

### Portfolio Chapters

```text
01  About Me
02  Skills
03  Projects
04  Experience
05  Achievements
06  Open Source
07  Resume
08  Contact
```

Visitors can either use the chapter navigation or physically turn through the book using the page controls.

---

## 📖 Page Turning

The most important interaction in the project is the page transition.

When the user clicks **NEXT PAGE**, the current parchment page physically turns around the book's spine.

The animation is designed to include:

- 3D perspective
- Page rotation
- Page shadows
- Front and back page faces
- Physical page thickness
- Center-gutter depth
- Smooth animation timing
- Input locking while the page is turning

The goal is to make the interaction feel like turning an actual sheet of paper rather than changing content inside two HTML containers.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Interactive UI |
| **TypeScript** | Type-safe development |
| **Vite** | Development server and build tool |
| **CSS / CSS Modules** | Visual design and 3D effects |
| **React PageFlip / StPageFlip** | Page-turning engine when suitable |
| **Lucide React** | UI icons |

The book's visual realism primarily comes from **CSS 3D transforms, perspective, shadows, textures, and animation**.

---

## 🗂️ Project Structure

```text
src/
├── components/
│   ├── Book/
│   │   ├── PortfolioBook.tsx
│   │   ├── BookCover.tsx
│   │   ├── BookPage.tsx
│   │   ├── PageTurnControls.tsx
│   │   └── book.css
│   │
│   ├── Navigation/
│   │   ├── SideNavigation.tsx
│   │   └── navigation.css
│   │
│   ├── Effects/
│   │   ├── MagicalParticles.tsx
│   │   ├── Candlelight.tsx
│   │   └── effects.css
│   │
│   └── common/
│
├── data/
│   ├── portfolio.ts
│   └── navigation.ts
│
├── pages/
│   ├── AboutPage.tsx
│   ├── SkillsPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ExperiencePage.tsx
│   ├── AchievementsPage.tsx
│   ├── OpenSourcePage.tsx
│   ├── ResumePage.tsx
│   └── ContactPage.tsx
│
├── styles/
│   ├── variables.css
│   ├── global.css
│   ├── typography.css
│   └── responsive.css
│
├── App.tsx
└── main.tsx
```

---

## 🎨 Design Philosophy

The goal is **not** to create a normal portfolio with a magical background.

The **book itself is the interface**.

Instead of:

```text
Navbar
Hero
About
Skills
Project Cards
Experience
Contact
```

the experience is:

```text
              ┌─────────────────────┐
              │                     │
              │    MAGICAL BOOK     │
              │                     │
              │   ABOUT | SKILLS    │
              │                     │
              └─────────────────────┘
                       ↓
                  NEXT PAGE
                       ↓
              ┌─────────────────────┐
              │                     │
              │ PROJECTS | EXPERIENCE│
              │                     │
              └─────────────────────┘
```

Every design decision should support the illusion that the visitor is reading a real magical portfolio book.

---

## 🎨 Visual Language

### Colors

The visual system uses a restrained palette based around:

- Deep brown
- Charcoal black
- Aged parchment
- Antique gold
- Candlelight
- Subtle magical blue

### Typography

The typography aims for an old manuscript/editorial feeling while remaining highly readable.

The design avoids overly decorative blackletter fonts in favor of elegant serif typography.

### Atmosphere

The environment uses subtle:

- Vignette
- Candlelight
- Dust
- Smoke
- Magical glow
- Paper texture
- Book shadows

These effects are intentionally restrained so the portfolio content remains the focus.

---

## 📱 Responsive Design

The experience is designed for:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile
- 📟 Tablet

On smaller screens, the book adapts to a single-page reading experience while preserving the physical-book concept.

The mobile layout does **not** simply shrink the desktop UI.

---

## ♿ Accessibility

The visual effects do not replace usability.

The portfolio supports:

- Keyboard navigation
- Semantic buttons
- Focus states
- Accessible labels
- Reduced-motion preferences
- Responsive layouts

Keyboard controls:

```text
ArrowRight → Next page
ArrowLeft  → Previous page
Escape     → Close menu / modal
```

Users who prefer reduced motion can use the portfolio without the full animation effects.

---

## ⚡ Performance

The project aims to maintain a smooth experience without relying on unnecessarily heavy effects.

Performance considerations include:

- CSS-based visual effects where possible
- Lightweight particle effects
- Optimized assets
- Lazy-loaded project images
- Minimal dependencies
- Controlled 3D animations
- Reduced-motion support

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown by Vite.

### 4. Create a production build

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## 📝 Updating Portfolio Content

Portfolio information is intentionally separated from the UI.

Update:

```text
src/data/portfolio.ts
```

Example:

```ts
export const portfolio = {
  person: {
    name: "Your Name",
    role: "Software Engineer",
    email: "you@example.com",
  },

  about: {
    paragraphs: [
      "Your introduction goes here..."
    ],
  },

  skills: {
    languages: ["Java", "C++", "JavaScript"],
    frameworks: ["Spring Boot", "React"],
    tools: ["Git", "Docker"],
  },

  projects: [
    {
      title: "Project Name",
      description: "Project description...",
      technologies: ["React", "TypeScript"],
      github: "https://github.com/...",
      live: "https://...",
    },
  ],
};
```

This allows the portfolio content to change without modifying the core book implementation.

---

## 🧙 Development Priorities

When extending the project, prioritize:

```text
1. Book realism
2. Page-turn animation
3. Parchment styling
4. Overall composition
5. Portfolio content
6. Ambient magical effects
```

A convincing book interaction is more important than adding additional visual effects.

---

## 🔮 Future Ideas

Possible future enhancements:

- 🔐 Interactive magical book lock
- 🪶 Animated handwritten signature
- 🗺️ Interactive project "maps"
- 🧪 Project details as magical recipes
- 🏆 Achievement pages as enchanted certificates
- 📜 Animated resume scroll
- ✉️ Magical contact parchment
- 🔊 Optional ambient sound
- 🌙 Day/night visual modes
- 🪄 More advanced physically simulated page bending

---

## 📌 Project Status

**Status:** 🚧 In Development

The project is being built incrementally with the book interaction and realistic page-turn animation as the primary focus.

---

## 👨‍💻 Author

**Your Name**

Software Developer

- GitHub: `your-github`
- LinkedIn: `your-linkedin`
- Email: `your-email`

---

## 📄 License

This project is intended as a personal portfolio project.

Replace this section with your preferred open-source license if you decide to make the source code publicly reusable.
