export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #FAF8F1; color: #16241C; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; font-family: "Fraunces", serif; color: #1F3D2B; }
      p { color: #16241C; opacity: 0.8; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; font-family: "IBM Plex Mono", monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.2s; }
      .primary { background: #1F3D2B; color: #FAF8F1; }
      .secondary { background: #FAF8F1; color: #1F3D2B; border-color: #D8D2C0; }
      .primary:hover { background: #3F6B4A; }
      .secondary:hover { border-color: #C98A2C; color: #C98A2C; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
