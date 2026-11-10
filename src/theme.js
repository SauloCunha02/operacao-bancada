export const THEME_KEY='amc-mundo-theme-v1';
export function initTheme({onChange=()=>{},icon=()=>''}={}){
  const media=matchMedia('(prefers-color-scheme: dark)');let choice='system',active='light';
  try{const raw=localStorage.getItem(THEME_KEY);if(['light','dark','system'].includes(raw))choice=raw;}catch{}
  function apply(){active=choice==='system'?(media.matches?'dark':'light'):choice;document.documentElement.dataset.theme=active;document.documentElement.style.colorScheme=active;
    const button=document.querySelector('#theme-toggle');if(button){button.dataset.icon=active==='dark'?'sun':'moon';button.innerHTML=icon(button.dataset.icon);button.setAttribute('aria-label',active==='dark'?'Ativar modo claro':'Ativar modo escuro');button.setAttribute('aria-pressed',String(active==='dark'));button.title=active==='dark'?'Ativar modo claro':'Ativar modo escuro';}onChange(active);}
  const api={get active(){return active;},get choice(){return choice;},set(value){if(!['light','dark','system'].includes(value))return;choice=value;try{localStorage.setItem(THEME_KEY,choice);}catch{}apply();}};
  document.querySelector('#theme-toggle')?.addEventListener('click',()=>api.set(active==='dark'?'light':'dark'));
  media.addEventListener?.('change',()=>{if(choice==='system')apply();});addEventListener('storage',e=>{if(e.key===THEME_KEY){choice=['light','dark','system'].includes(e.newValue)?e.newValue:'system';apply();}});apply();return api;
}
