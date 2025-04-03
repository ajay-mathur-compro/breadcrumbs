# Breadcrumbs Assignment

This project demonstrates a Nuxt 3 application with a breadcrumb navigation system. The breadcrumbs dynamically update based on the user's navigation, providing an accessible and user-friendly way to track the current location within the app.

## Features

- **Dynamic Breadcrumbs**: Breadcrumbs update automatically as users navigate through the app.
- **Pinia State Management**: Breadcrumbs are managed using Pinia for reactive state management.
- **Nuxt 3 Framework**: Built with Nuxt 3 for modern server-side rendering and static site generation.

## Setup

Make sure to install dependencies before running the project:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Project Structure

```
├── components/
│   └── Breadcrumb.vue       # Breadcrumb component
├── middleware/
│   └── breadcrumb.global.ts # Global middleware for managing breadcrumbs
├── pages/
│   ├── index.vue            # Home page
│   ├── friends.vue          # Friends page
│   ├── events.vue           # Events page
│   └── locations.vue        # Locations page
├── stores/
│   └── breadcrumb.ts        # Pinia store for managing breadcrumb state
├── README.md                # Project documentation
```

## Deployment

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information on deploying your application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [ARIA Breadcrumb Accessibility](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)