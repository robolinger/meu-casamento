(() => {
const c=window.WEDDING_CONFIG||{},$=s=>document.querySelector(s);
const menu=$(".menu-toggle"),nav=$(".main-nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰";});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false");if(menu)menu.textContent="☰";}));
const slides=[...document.querySelectorAll(".slide")],dots=[...document.querySelectorAll(".dot")];let current=0;
function show(i){if(!slides.length)return;current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle("active",n===current));dots.forEach((d,n)=>d.classList.toggle("active",n===current));}
$(".prev")?.addEventListener("click",()=>show(current-1));$(".next")?.addEventListener("click",()=>show(current+1));dots.forEach((d,i)=>d.addEventListener("click",()=>show(i)));
const target=new Date(c.weddingDate||"2027-09-18T16:00:00-04:00").getTime();
function tick(){let t=Math.max(0,target-Date.now()),v=[Math.floor(t/86400000),Math.floor(t%86400000/3600000),Math.floor(t%3600000/60000),Math.floor(t%60000/1000)];["days","hours","minutes","seconds"].forEach((id,i)=>{const e=document.getElementById(id);if(e)e.textContent=String(v[i]).padStart(i?2:3,"0");});}tick();setInterval(tick,1000);
const cm=$("[data-map-ceremony]"),pm=$("[data-map-party]"),gl=$("[data-gift-link]");if(cm&&c.ceremonyMap)cm.href=c.ceremonyMap;if(pm&&c.partyMap)pm.href=c.partyMap;if(gl&&c.giftListUrl)gl.href=c.giftListUrl;
$("#rsvp-form")?.addEventListener("submit",e=>{e.preventDefault();const name=$("#guest-name").value.trim(),count=$("#guest-count").value,msg=$("#guest-message").value.trim(),phone=String(c.whatsapp||"").replace(/\D/g,"");if(!name)return;if(!phone||phone==="5592999999999"){alert("Edite o número de demonstração no arquivo config.js antes de publicar.");return;}const text=`Olá! Meu nome é ${name} e quero confirmar minha presença no casamento de ${c.coupleNames||"vocês"}. ${count} pessoa(s) irão.${msg?" Mensagem: "+msg:""}`;window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,"_blank","noopener");});
})();
