(function () {
  'use strict';

  const qs = (s, root = document) => root.querySelector(s);
  const qsa = (s, root = document) => Array.from(root.querySelectorAll(s));

  qsa('[data-stage-walkthrough]').forEach((root) => {
    const stages = qsa('[data-stage]', root);
    const prev = qs('[data-stage-prev]', root);
    const next = qs('[data-stage-next]', root);
    const replay = qs('[data-stage-replay]', root);
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let index = 0;
    let timer = null;
    function render() {
      stages.forEach((el, i) => {
        const active = i === index;
        el.classList.toggle('is-active', active);
        el.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === stages.length - 1;
      const counter = qs('[data-stage-counter]', root);
      if (counter) counter.textContent = `${index + 1} / ${stages.length}`;
    }
    function stopAuto() { if (timer) clearInterval(timer); timer = null; }
    function startAuto() {
      if (reduceMotion || root.dataset.stageAutoplay !== 'true' || stages.length < 2) return;
      stopAuto();
      const delay = Math.max(1400, Number(root.dataset.stageDelay || 2600));
      timer = setInterval(() => { index = (index + 1) % stages.length; render(); }, delay);
    }
    if (prev) prev.addEventListener('click', () => { stopAuto(); if (index > 0) { index -= 1; render(); } });
    if (next) next.addEventListener('click', () => { stopAuto(); if (index < stages.length - 1) { index += 1; render(); } });
    if (replay) replay.addEventListener('click', () => { index = 0; render(); startAuto(); });
    render();
  });

  qsa('[data-frame-scrubber]').forEach((root) => {
    const image = qs('[data-frame-image]', root);
    const slider = qs('input[type="range"]', root);
    const counter = qs('[data-frame-counter]', root);
    const pattern = root.dataset.frameBase;
    const count = Number(root.dataset.frameCount || 0);
    const pad = Number(root.dataset.framePad || 6);
    if (!image || !slider || !pattern || count < 1) return;
    slider.min = '0'; slider.max = String(count - 1); slider.step = '1';
    const srcFor = (i) => pattern.replace('{frame}', String(i).padStart(pad, '0'));
    const cache = new Map();
    function load(i) {
      if (!cache.has(i)) { const im = new Image(); im.src = srcFor(i); cache.set(i, im); }
      return cache.get(i);
    }
    function render(i) {
      const idx = Math.max(0, Math.min(count - 1, Number(i)));
      image.src = load(idx).src;
      if (counter) counter.textContent = `${idx + 1} / ${count}`;
      [-2,-1,1,2].forEach((d) => { const j = idx + d; if (j >= 0 && j < count) load(j); });
    }
    slider.addEventListener('input', () => render(slider.value));
    render(Number(slider.value || 0));
  });

  function setupCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const kind = canvas.dataset.researchCanvas;
    const host = canvas.closest('.research-demo');
    const slider = host && qs('input[type="range"]', host);
    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const cssW = Math.max(300, Math.floor(rect.width));
      const cssH = Number(canvas.dataset.height || 300);
      canvas.width = Math.floor(cssW * dpr); canvas.height = Math.floor(cssH * dpr);
      canvas.style.height = cssH + 'px'; ctx.setTransform(dpr,0,0,dpr,0,0); draw(cssW,cssH);
    }
    function axes(w,h){ctx.save();ctx.lineWidth=1;ctx.globalAlpha=.3;ctx.beginPath();ctx.moveTo(38,h-30);ctx.lineTo(w-18,h-30);ctx.moveTo(38,h-30);ctx.lineTo(38,18);ctx.stroke();ctx.restore();}
    function drawTrajectory(w,h,level){axes(w,h);const drift=level/100;[0,20*drift+7,7*drift+3].forEach((offset,idx)=>{ctx.save();ctx.lineWidth=idx===0?2.4:1.8;ctx.globalAlpha=idx===0?.95:.72;ctx.beginPath();for(let i=0;i<100;i++){const t=i/99,x=48+t*(w-82),y=h-48-(Math.sin(t*5.4)+t*1.6)*(h*.18)-offset*t;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();ctx.restore();});}
    function drawPointCloud(w,h,level){axes(w,h);const keep=1-(level/100)*.88;ctx.save();ctx.globalAlpha=.75;for(let i=0;i<850;i++){const rx=((i*73)%997)/997,ry=((i*191)%991)/991;if(((i*37)%100)/100>keep)continue;const x=44+rx*(w-72),y=h-35-(ry*ry)*(h-70);ctx.fillRect(x,y,1.5,1.5);}ctx.restore();ctx.strokeRect(w*.58,h*.46,w*.16,h*.22);ctx.strokeRect(w*.27,h*.58,w*.11,h*.16);}
    function drawHeatmap(w,h,level){const n=6,left=52,top=26,cw=(w-86)/n,ch=(h-72)/n;for(let r=0;r<n;r++)for(let c=0;c<n;c++){const v=Math.min(1,(r+c+level/22)/(2*(n-1)+4));ctx.save();ctx.globalAlpha=.12+.68*v;ctx.fillRect(left+c*cw,top+r*ch,cw-2,ch-2);ctx.restore();}ctx.strokeRect(left,top,cw*n,ch*n);}
    function drawResponse(w,h,level){const cx1=w*.34,cx2=w*.68,cy=h*.5;function peak(cx,amp,sigma){for(let y=0;y<h;y+=5)for(let x=0;x<w;x+=5){const d2=(x-cx)**2+(y-cy)**2,v=amp*Math.exp(-d2/(2*sigma*sigma));if(v<.035)continue;ctx.save();ctx.globalAlpha=Math.min(.85,v);ctx.fillRect(x,y,5,5);ctx.restore();}}peak(cx1,.85,48+level*.2);peak(cx2,.35+level/220,35);ctx.strokeRect(cx1-35,cy-35,70,70);}
    function draw(w,h){ctx.clearRect(0,0,w,h);const level=slider?Number(slider.value):30;if(kind==='trajectory')drawTrajectory(w,h,level);if(kind==='pointcloud')drawPointCloud(w,h,level);if(kind==='heatmap')drawHeatmap(w,h,level);if(kind==='response')drawResponse(w,h,level);}
    if(slider){const out=qs('[data-range-output]',host);slider.addEventListener('input',()=>{if(out)out.textContent=slider.value;draw(canvas.clientWidth||700,Number(canvas.dataset.height||300));});}
    window.addEventListener('resize',resize);resize();
  }
  qsa('[data-research-canvas]').forEach(setupCanvas);

  function mediaNode(src,type,alt){if(type==='video'){const v=document.createElement('video');v.src=src;v.muted=true;v.loop=true;v.playsInline=true;v.controls=true;v.preload='metadata';return v;}const img=document.createElement('img');img.src=src;img.loading='lazy';img.alt=alt||'';return img;}

  qsa('[data-evidence-gallery]').forEach(async (root) => {
    const src=root.dataset.evidenceGallery;if(!src)return;
    try{const res=await fetch(src);if(!res.ok)throw new Error('manifest not available');const data=await res.json();const target=qs('[data-evidence-gallery-content]',root)||root;(data.items||[]).forEach((item)=>{const card=document.createElement('figure');card.className='research-gallery-card';if(item.video)card.appendChild(mediaNode(item.video,'video'));else if(item.image)card.appendChild(mediaNode(item.image,'image',item.alt));const cap=document.createElement('figcaption');cap.innerHTML=`<strong>${item.title||'Evidence'}</strong>${item.note?`<br>${item.note}`:''}`;card.appendChild(cap);target.appendChild(card);});}catch(_){root.classList.add('is-empty');}
  });

  qsa('[data-pair-gallery]').forEach(async (root) => {
    const src=root.dataset.pairGallery;if(!src)return;
    try{const res=await fetch(src);if(!res.ok)throw new Error('manifest not available');const data=await res.json();root.innerHTML='';(data.items||[]).forEach((item)=>{const fig=document.createElement('figure');fig.className='research-pair-card';const media=document.createElement('div');media.className='research-pair-card__media';[item.left,item.right].forEach((side)=>{const pane=document.createElement('div');pane.className='research-pair-card__pane';const label=document.createElement('span');label.className='research-pair-card__label';label.textContent=side.label||'';pane.appendChild(label);pane.appendChild(mediaNode(side.src,side.type||'image',side.alt));media.appendChild(pane);});fig.appendChild(media);const cap=document.createElement('figcaption');cap.innerHTML=`<strong>${item.title||'Comparison'}</strong>${item.note?`<br>${item.note}`:''}`;fig.appendChild(cap);root.appendChild(fig);});}catch(_){root.classList.add('is-empty');}
  });

  const copy=qs('[data-copy-citation]');
  if(copy)copy.addEventListener('click',async()=>{const text=qs('[data-citation-text]')?.innerText||'';try{await navigator.clipboard.writeText(text);const old=copy.textContent;copy.textContent='Copied ✓';setTimeout(()=>{copy.textContent=old;},1500);}catch(_){copy.textContent='Copy failed';}});
})();
