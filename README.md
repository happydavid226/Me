"# Happy David — Portfolio

Static personal site deployed on Render. The production build serves files directly from `public/`, so keep all HTML, CSS, JS, and assets inside that folder to avoid drift.

## Local development

1. Open the workspace in Cursor (or VS Code).
2. Use any static server (e.g. the Live Server extension or `npx serve public`) and point it to the `public/` directory.
3. Edit `public/index.html`, `public/styles.css`, and `public/script.js`; the browser reload reflects those files immediately.

## Deployment

Render picks up `render.yaml`, which already targets the `public/` folder (`staticPublishPath`). No build step is needed—pushing changes to the default branch redeploys the site."
