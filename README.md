# Metla House Cleaning - Miami

A premium residential cleaning services website built with React, TypeScript, and Tailwind CSS.

## Features

- **Service Pages**: Detailed pages for each cleaning service (Standard, Deep, Post-Construction, Vacation Rental, Move-In/Out)
- **Location Pages**: SEO-optimized pages for each service area (Miami, Brickell, Coral Gables, etc.)
- **Booking Integration**: Integrated Jobber booking form
- **Responsive Design**: Fully responsive design for all device sizes
- **Accessibility**: WCAG-compliant navigation and interactive elements

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- React Router DOM
- Vite
- Lucide React (icons)

## Run Locally

**Prerequisites:** Node.js (v18+)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) (optional, for AI features)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── components/          # Reusable UI components
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── JobberEmbed.tsx
│   ├── Navigation.tsx
│   └── StatsPanel.tsx
├── pages/               # Page components
│   ├── AboutPage.tsx
│   ├── BookingPage.tsx
│   ├── Home.tsx
│   ├── LocationPage.tsx
│   ├── PoliciesPage.tsx
│   └── ServicePage.tsx
├── App.tsx              # Main app with routing
├── constants.tsx        # Services, locations, testimonials data
├── types.ts             # TypeScript interfaces
├── index.css            # Global styles
└── index.html           # HTML template
```

## License

Private - All rights reserved
