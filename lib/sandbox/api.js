// lib/sandbox/api.js
export function createAPI(canvas) {
  const ctx = canvas.getContext('2d');
  const clear = () => { ctx.clearRect(0,0,canvas.width,canvas.height); };
  return {
    clear,
    drawRect: (x,y,w,h,color='#fff') => { ctx.fillStyle=color; ctx.fillRect(x,y,w,h); },
    text: (x,y,txt,color='#fff') => { ctx.fillStyle=color; ctx.fillText(txt,x,y); },
    onKey: (fn) => { window.addEventListener('keydown', fn); },
    width: canvas.width,
    height: canvas.height,
  };
}
