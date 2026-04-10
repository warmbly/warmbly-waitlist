<div align="center">
  <img src="public/web-app-manifest-512x512.png" alt="Warmbly" width="128" height="128" />

  <h1>Warmbly Waitlist</h1>

  <p>
    <strong>Open source, AI-powered email warmup and outreach.</strong><br/>
    Build sender reputation. Stay out of spam. Ship at scale.
  </p>

  <p>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
    <img src="https://img.shields.io/badge/built%20with-Astro-FF5D01.svg" alt="Built with Astro" />
  </p>
</div>

---

This repo hosts the landing page and early-access waitlist for [Warmbly](https://warmbly.com). It's a static Astro site styled with Tailwind CSS.

## Stack

- [Astro](https://astro.build) 5
- [Tailwind CSS](https://tailwindcss.com) 4 (via `@tailwindcss/vite`)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) for automatic sitemap generation
- [Inter](https://fontsource.org/fonts/inter) via `@fontsource/inter`

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Scripts

| Command           | What it does                              |
| :---------------- | :---------------------------------------- |
| `npm run dev`     | Start the local dev server                |
| `npm run build`   | Build the production site to `./dist/`    |
| `npm run preview` | Preview the production build locally      |
| `npm run astro`   | Run Astro CLI commands (`add`, `check`, …) |

## Contributing

Issues and pull requests are welcome. If you're planning a larger change, open an issue first so we can talk through it.

## License

[MIT](LICENSE) © Warmbly
