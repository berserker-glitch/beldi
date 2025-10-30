# Beldi Frontend

## Project Overview

Beldi is an e-commerce platform built with modern web technologies, providing users with a seamless shopping experience.

## Getting Started

### Prerequisites

- Node.js & npm (or bun) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Navigate to the project directory.
cd FE

# Step 2: Install the necessary dependencies.
npm install

# Step 3: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Building for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Technologies Used

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and state management

## Project Structure

```
FE/
├── src/
│   ├── components/    # Reusable React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── ...
├── public/            # Static assets
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
