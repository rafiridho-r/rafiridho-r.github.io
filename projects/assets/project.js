(()=>{
  "use strict";
  const q=(s,r=document)=>r.querySelector(s);
  const qa=(s,r=document)=>Array.from(r.querySelectorAll(s));

  qa("[data-concept-demo]").forEach(root=>{
    const canvas=q("canvas",root);
    if(!canvas)return;
    const ctx=canvas.getContext("2d");
    const sliders=qa("input[type=range]",root);
    const type=root.dataset.conceptDemo;
    const value=(name,def=0)=>Number(q('[name="'+name+'"]',root)?.value??def);

    function setup(){
      const dpr=window.devicePixelRatio||1;
      const rect=canvas.getBoundingClientRect();
      const w=Math.max(320,Math.floor(rect.width));
      const h=parseInt(getComputedStyle(canvas).height,10)||350;
      canvas.width=w*dpr;
      canvas.height=h*dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      draw(w,h);
    }
    function clear(w,h){
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle="#fff";
      ctx.fillRect(0,0,w,h);
    }
    function text(t,x,y,size=13,color="#666"){
      ctx.fillStyle=color;
      ctx.font=size+"px Arial, Helvetica, sans-serif";
      ctx.fillText(t,x,y);
    }
    function tracking(w,h){
      const a=value("ambiguity",35)/100; clear(w,h);
      text("Illustrative response surface",22,28,13);
      const peaks=[{x:w*.36,y:h*.5,amp:.92},{x:w*.68,y:h*.5,amp:.18+.7*a}];
      peaks.forEach((p,k)=>{
        for(let r=70;r>5;r-=7){
          const alpha=p.amp*(1-r/80)*.16;
          ctx.fillStyle="rgba(36,95,158,"+alpha+")";
          ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();
        }
        ctx.strokeStyle=k===0?"#245f9e":"#8a6530";
        ctx.lineWidth=2;
        ctx.strokeRect(p.x-34,p.y-27,68,54);
      });
      text("target",w*.36-17,h*.5+48,12,"#245f9e");
      text("distractor",w*.68-25,h*.5+48,12,"#8a6530");
      text("ambiguity "+Math.round(a*100)+"%",22,h-20,12);
    }
    function vo(w,h){
      const d=value("dynamic",30)/100; clear(w,h);
      text("Illustrative correspondences and camera path",22,28,13);
      ctx.strokeStyle="#245f9e";ctx.lineWidth=3;ctx.beginPath();
      ctx.moveTo(48,h-48);ctx.bezierCurveTo(w*.28,h*.72,w*.56,h*.43,w-52,72);ctx.stroke();
      for(let i=0;i<44;i++){
        const x=45+((i*71)%997)/997*(w-90);
        const y=55+((i*43)%991)/991*(h-120);
        const dyn=((i*37)%100)/100<d;
        ctx.fillStyle=dyn?"#b85650":"#5b88ae";
        ctx.beginPath();ctx.arc(x,y,dyn?4:3,0,Math.PI*2);ctx.fill();
      }
      text("blue: candidate static correspondences",22,h-40,12,"#5b88ae");
      text("red: dynamic/outlier candidates",22,h-20,12,"#b85650");
    }
    function pillars(w,h){
      const drop=value("dropout",25)/100; clear(w,h);
      text("Illustrative point density",22,28,13);
      const keep=1-drop;
      for(let i=0;i<900;i++){
        if(((i*47)%100)/100>keep)continue;
        const x=38+((i*67)%997)/997*(w-76);
        const ry=((i*181)%991)/991;
        const y=h-42-ry*ry*(h-92);
        ctx.fillStyle="#6c5a96";ctx.fillRect(x,y,2,2);
      }
      ctx.strokeStyle="#6c5a96";ctx.lineWidth=2;
      ctx.strokeRect(w*.26,h*.48,w*.16,h*.18);
      ctx.strokeRect(w*.61,h*.36,w*.19,h*.22);
      text("dropout "+Math.round(drop*100)+"%",22,h-20,12);
    }
    function mot(w,h){
      const det=value("det",20)/100,pose=value("pose",15)/100;clear(w,h);
      text("Illustrative tracks under detection / pose perturbation",22,28,13);
      ctx.strokeStyle="#e0e0e0";ctx.lineWidth=1;
      for(let x=80;x<w;x+=80){ctx.beginPath();ctx.moveTo(x,45);ctx.lineTo(x,h-38);ctx.stroke()}
      for(let y=70;y<h;y+=55){ctx.beginPath();ctx.moveTo(35,y);ctx.lineTo(w-35,y);ctx.stroke()}
      const tracks=[{x:.25,y:.62,c:"#245f9e"},{x:.5,y:.42,c:"#39745f"},{x:.72,y:.65,c:"#8a6530"}];
      tracks.forEach((t,k)=>{
        ctx.strokeStyle=t.c;ctx.lineWidth=3;ctx.beginPath();
        for(let j=0;j<5;j++){
          const x=w*(t.x-.12+j*.055)+(pose*22*j);
          const y=h*(t.y-.10+j*.025)+Math.sin(j+k)*det*22;
          j?ctx.lineTo(x,y):ctx.moveTo(x,y);
        }
        ctx.stroke();
        const bx=w*t.x+pose*35,by=h*t.y+det*(k-1)*28;
        ctx.strokeRect(bx-28,by-18,56,36);
      });
      text("detection "+Math.round(det*100)+"% · pose "+Math.round(pose*100)+"%",22,h-20,12);
    }
    function draw(w,h){
      if(type==="tracking")tracking(w,h);
      else if(type==="vo")vo(w,h);
      else if(type==="pillars")pillars(w,h);
      else if(type==="mot")mot(w,h);
    }
    sliders.forEach(s=>s.addEventListener("input",setup));
    window.addEventListener("resize",setup);
    setup();
  });
})();
