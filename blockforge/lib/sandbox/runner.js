// lib/sandbox/runner.js
import { createAPI } from './api.js';

export function createSandboxRunner(iframe) {
  // Initialize iframe document
  const html = `
    <!doctype html><html><head><style>
      body{margin:0;background:#000;color:#fff;font-family:system-ui}
      canvas{display:block;width:100vw;height:100vh}
    </style></head><body>
      <canvas id="c" width="800" height="600"></canvas>
      <script>
        window.addEventListener('message', async (e)=>{
          const { type, code } = e.data || {};
          if (type !== 'RUN') return;
          const canvas = document.getElementById('c');
          const apiURL = '${location.origin}/lib/sandbox/api.js';
          const mod = await import(apiURL);
          const api = mod.createAPI(canvas);
          try {
            const blob = new Blob([code], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);
            const userMod = await import(url);
            if (typeof userMod.default === 'function') {
              api.clear();
              userMod.default(api);
            } else {
              console.error('No default start(api) function');
            }
          } catch (err) {
            console.error(err);
          }
        });
      </script>
    </body></html>`;
  iframe.srcdoc = html;

  return {
    run(code) {
      iframe.contentWindow.postMessage({ type: 'RUN', code }, '*');
    }
  };
}
