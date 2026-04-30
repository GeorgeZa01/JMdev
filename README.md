# JM.dev - Personal Portfolio

A modern, responsive portfolio website built with cutting-edge web technologies.

## Getting Started

The only requirement is having [Bun](https://bun.sh) installed.

### Development

Clone the repository and follow these steps:

```sh
# Clone the repository
git clone https://github.com/yourusername/jm.dev.git

# Navigate to the project directory
cd jm.dev

# Install dependencies
bun install

# Start the development server with hot reload
bun run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```sh
# Build the project
bun run build

# Preview the production build locally
bun run preview
```

### Linting

```sh
bun run lint
```

## Tech Stack

This project is built with:

- **Vite** - Next generation frontend build tool
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS framework

## Deployment

The site is configured to deploy to GitHub Pages. The domain is configured via `CNAME` file in the public directory.
