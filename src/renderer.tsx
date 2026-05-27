import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'SANIBUILDS – Building in Public. Creating in Silence.'}</title>
        <meta name="description" content="SANIBUILDS is a build-in-public journey documenting the process of building AI systems, startup ideas, creator workflows, and real digital products." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js"></script>
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
