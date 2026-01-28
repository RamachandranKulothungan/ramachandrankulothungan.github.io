# Ramachandran Kulothungan Portfolio

This is a personal portfolio website built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction).

## Features

- **Next.js App Router**: Modern routing and layouts.
- **Tailwind CSS**: Utility-first styling with potential for dark mode.
- **Three.js / R3F**: Interactive 3D skills visualization.
- **Framer Motion**: Smooth animations.
- **TypeScript**: Full type safety.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

- `app/`: Application routes and pages.
- `components/`: Reusable UI components.
  - `home/`: Components specific to the home page (e.g., `Skills3D`).
  - `projects/`: Components for the projects page.
  - `now/`: Components for the "Now" page.
  - `ui/`: Generic UI components (Navbar, Footer, etc.).
- `lib/`: Utility functions.
- `public/`: Static assets (images, PDFs).
- `legacy_backup/`: Backup of the original HTML site.
