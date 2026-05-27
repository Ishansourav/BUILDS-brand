```txt
npm install
npm run dev
```

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```
# BUILDS-brand

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://3000-iok9qnt6wci0s2kpt6qvl-d0b9e1e2.sandbox.novita.ai/)
