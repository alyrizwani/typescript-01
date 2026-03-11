# Ali Raza Portfolio

A full-stack personal portfolio application built with React, Vite, TypeScript, Tailwind CSS, and Express.

## Features

- **Responsive Design**: Built with Tailwind CSS for a seamless experience on all devices.
- **Frontend Components**: Hero, About, Skills, Experience, Projects, and Contact sections.
- **Interactive Elements**: Uses `motion` and `lucide-react` for icons and animations.
- **Contact Form Backend**: Express server with an embedded SQLite database (`better-sqlite3`) to handle and store contact form submissions securely.

## Prerequisites

- Node.js (v18 or higher recommended)

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   This will start both the Express backend and the Vite development server on `http://localhost:3000`.

## Scripts

- `npm run dev`: Starts the development server (`tsx server.ts`).
- `npm run build`: Compiles the React application into the `dist` folder via Vite.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs TypeScript compiler for type-checking.
- `npm run clean`: Removes the `dist` directory.

## Architecture

- `src/` - React frontend application files (components, styles, entry point).
- `server.ts` - Express backend server that runs on port 3000, handles the `/api/contact` route, and seamlessly serves the Vite React app.
- `messages.db` - SQLite database auto-generated to store contact form submissions.

## Build for Production

To build for production, compile the Vite app and set your environment appropriately:
```bash
npm run build
```
In a production setting (`NODE_ENV=production`), the `server.ts` script securely serves the static resources from the `dist/` directory built by Vite.
