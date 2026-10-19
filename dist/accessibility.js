/* Acessibilidade compartilhada. Não altera respostas, XP ou registros pedagógicos. */
(()=>{
  'use strict';
  const q=s=>document.querySelector(s);
  const root=document.documentElement;
  const KEY='amc-accessibility-v1';
  const THEME_KEY='amc-theme-v1';
  let theme=root.dataset.theme==='dark'?'dark':'light';
  const defaults={palette:'default',contrast:'default',size:100,spacing:false,readable:false,links:false,titles:false,focus:false,ruler:false,motion:false,quiet:false,images:false,cursor:false,rate:1,voice:''};
  const palettes={
    default:{accent:'#086b66',soft:'#eaf3ef',warning:'#faf0d9'},
    protanopia:{accent:'#174e9c',soft:'#e7effa',warning:'#fff0d0'},
    deuteranopia:{accent:'#21549b',soft:'#edf1fa',warning:'#f9eac8'},
    tritanopia:{accent:'#842449',soft:'#f5e8ed',warning:'#edeef8'},
    achromatopsia:{accent:'#262626',soft:'#ededed',warning:'#e0e0e0'}
  };
  let prefs={...defaults},saved=true;
  try{const stored=JSON.parse(localStorage.getItem(KEY)||'null');if(stored&&typeof stored==='object'){
    if(Object.hasOwn(palettes,stored.palette))prefs.palette=stored.palette;
    if(['default','light','dark'].includes(stored.contrast))prefs.contrast=stored.contrast;
    if([100,125,150,175,200].includes(stored.size))prefs.size=stored.size;
    for(const k of Object.keys(defaults))if(typeof defaults[k]==='boolean'&&typeof stored[k]==='boolean')prefs[k]=stored[k];
    if([.75,1,1.25,1.5].includes(stored.rate))prefs.rate=stored.rate;
    if(typeof stored.voice==='string'&&stored.voice.length<500)prefs.voice=stored.voice;
  }}catch{saved=false;}
  const host=document.createElement('div');host.id='a11y-host';
  host.innerHTML=`<div id="a11y-dock" hidden><p id="a11y-reading-status" role="status" aria-live="polite"></p><div class="a11y-buttons"><button type="button" id="a11y-dock-pause">Pausar</button><button type="button" id="a11y-dock-stop">Parar leitura</button></div></div><button type="button" id="a11y-launcher" aria-haspopup="dialog" aria-controls="a11y-panel" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="6.8" r="1.5"/><path d="M6 10h12m-6-1v6m0 0-3 5m3-5 3 5"/></svg><span>Acessibilidade</span></button>`;
  document.body.append(host);
  const launcher=q('#a11y-launcher');
  // Keep one control: in the page menu, or in the active dialog's header.
  launcher.querySelector('span').replaceWith(document.createTextNode('Acessibilidade'));
  const menu=q('.navigation')||q('.header-actions')||q('.a11y-menu')||q('header');
  menu.append(launcher);
  const themeToggle=document.createElement('button');themeToggle.type='button';themeToggle.id='theme-toggle';themeToggle.setAttribute('aria-label','Tema escuro');
  menu.insertBefore(themeToggle,launcher);
  function themeControl(){themeToggle.setAttribute('aria-pressed',String(theme==='dark'));themeToggle.title=theme==='dark'?'Ativar tema claro':'Ativar tema escuro';themeToggle.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${theme==='dark'?'<path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/>':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>'}</svg><span>${theme==='dark'?'Tema escuro':'Tema claro'}</span>`;}
  themeControl();
  const panel=document.createElement('dialog');panel.id='a11y-panel';panel.setAttribute('aria-labelledby','a11y-title');
  const toggle=(key,label)=>`<label class="a11y-toggle" for="a11y-${key}"><span>${label}</span><input type="checkbox" id="a11y-${key}" data-a11y-setting="${key}"></label>`;
  panel.innerHTML=`<div class="a11y-panel-head"><div><p class="a11y-kicker">DO SEU JEITO</p><h2 id="a11y-title">Acessibilidade</h2></div><button type="button" class="a11y-close" id="a11y-close" aria-label="Fechar acessibilidade">×</button></div><div class="a11y-panel-body"><p>Ative só o que ajudar você. As preferências visuais ficam neste navegador e valem também na biblioteca e no guia.</p><p id="a11y-status" role="status" aria-live="polite">Ajustes disponíveis.</p>
  <section class="a11y-section" aria-labelledby="a11y-colors-title"><h3 id="a11y-colors-title">Cores e contraste</h3><label class="a11y-field" for="a11y-palette">Paleta de apoio ao daltonismo<select id="a11y-palette" data-a11y-setting="palette"><option value="default">Cores da identidade visual</option><option value="protanopia">Protanopia / protanomalia · azul e âmbar</option><option value="deuteranopia">Deuteranopia / deuteranomalia · azul e ocre</option><option value="tritanopia">Tritanopia / tritanomalia · vinho e tons neutros</option><option value="achromatopsia">Acromatopsia · tons neutros</option></select></label><p>Paletas alternativas para facilitar a distinção dos estados. Não simulam nem corrigem a visão; escolha a que funcionar melhor para você. Mensagens e símbolos continuam indicando cada estado.</p><label class="a11y-field" for="a11y-contrast">Contraste<select id="a11y-contrast" data-a11y-setting="contrast"><option value="default">Contraste da paleta</option><option value="light">Alto contraste · fundo claro</option><option value="dark">Alto contraste · fundo escuro</option></select></label><p>O alto contraste prevalece sobre as cores da paleta.</p></section>
  <section class="a11y-section" aria-labelledby="a11y-text-title"><h3 id="a11y-text-title">Texto e leitura visual</h3><label class="a11y-field" for="a11y-size">Tamanho do texto: <output id="a11y-size-value" for="a11y-size">100%</output><input type="range" id="a11y-size" data-a11y-setting="size" min="100" max="200" step="25" value="100" aria-valuetext="100 por cento"></label><div class="a11y-options">${toggle('spacing','Aumentar espaço entre letras, palavras e linhas')}${toggle('readable','Usar fonte simples de leitura')}${toggle('links','Destacar links')}${toggle('titles','Destacar títulos')}</div></section>
  <section class="a11y-section" aria-labelledby="a11y-focus-title"><h3 id="a11y-focus-title">Foco e menos distrações</h3><div class="a11y-options">${toggle('focus','Reforçar o destaque do foco')}${toggle('ruler','Ativar guia de leitura')}${toggle('motion','Desativar animações e transições')}${toggle('quiet','Reduzir sombras e efeitos decorativos')}${toggle('images','Ocultar ilustrações decorativas')}${toggle('cursor','Aumentar o ponteiro do mouse')}</div><p>O guia acompanha o ponteiro ou o foco do teclado. Ilustrações informativas e instruções permanecem disponíveis.</p></section>
  <section class="a11y-section" aria-labelledby="a11y-speech-title"><h3 id="a11y-speech-title">Leitura em voz alta</h3><p id="a11y-speech-help">Lê o conteúdo visível da tela ou do chamado que estava aberto. Para ler um trecho, selecione-o antes de abrir este painel.</p><label class="a11y-field" for="a11y-voice">Voz em português<select id="a11y-voice" data-a11y-setting="voice"><option value="">Voz padrão do navegador · português</option></select></label><label class="a11y-field" for="a11y-rate">Velocidade<select id="a11y-rate" data-a11y-setting="rate"><option value="0.75">Mais lenta · 0,75×</option><option value="1">Normal · 1×</option><option value="1.25">Mais rápida · 1,25×</option><option value="1.5">Rápida · 1,5×</option></select></label><div class="a11y-buttons"><button type="button" id="a11y-read" class="a11y-main">Ler conteúdo atual</button><button type="button" id="a11y-read-selection">Ler seleção</button><button type="button" id="a11y-pause" disabled>Pausar</button><button type="button" id="a11y-stop" disabled>Parar</button></div><p>A voz depende do navegador e das vozes instaladas. Vozes online podem exigir internet. Este recurso não substitui leitores de tela como NVDA, VoiceOver ou TalkBack.</p></section>
  <section class="a11y-section" aria-labelledby="a11y-libras-title"><h3 id="a11y-libras-title">Libras · VLibras</h3><p>Tradução automática de português para Libras pelo serviço VLibras. Ao ativar, o navegador conecta-se ao serviço externo. Requer internet e pode ter limitações em termos técnicos; não substitui interpretação humana.</p><div class="a11y-buttons"><button type="button" id="a11y-libras" aria-pressed="false">Ativar VLibras online</button></div><p id="a11y-libras-status" role="status" aria-live="polite">Desativado. Nenhum serviço de Libras é carregado antes da ativação.</p><p><a href="https://vlibras.gov.br/doc/widget/functionalities/text-translation.html" target="_blank" rel="noopener noreferrer">Como selecionar um texto no VLibras ↗</a></p></section>
  <section class="a11y-section"><h3>Teclado e retomada</h3><p><kbd>Tab</kbd> e <kbd>Shift + Tab</kbd> percorrem os controles. <kbd>Enter</kbd> ou <kbd>Espaço</kbd> ativam botões. <kbd>Esc</kbd> fecha o painel.</p><p><kbd>Alt + Shift + A</kbd> abre acessibilidade; <kbd>Alt + Shift + L</kbd> inicia a leitura do conteúdo atual. Atalhos podem variar conforme o navegador.</p><p id="a11y-save-note">Preferências salvas apenas neste navegador. Áudio e Libras só iniciam quando você solicitar.</p><div class="a11y-buttons"><button type="button" id="a11y-reset">Restaurar ajustes de acessibilidade</button></div><p>Restaurar estes ajustes não apaga seu progresso na oficina.</p></section></div>`;
  document.body.append(panel);
  const ruler=document.createElement('div');ruler.id='a11y-reading-guide';ruler.hidden=true;ruler.setAttribute('aria-hidden','true');host.append(ruler);
  let source=null,readingSource=null,opener=null,selection='',selectionRoot=null,selectionRange=null,raf=0,utterance=null,chunks=[],chunkIndex=0,session=0,reading=false,paused=false,voices=[],librasEnabled=false,librasLoading=false,librasTimer=0;
  const speech=window.speechSynthesis;
  const canSpeak=!!speech&&typeof window.SpeechSynthesisUtterance==='function';
  function say(message){q('#a11y-status').textContent=message;}
  function persist(){try{localStorage.setItem(KEY,JSON.stringify(prefs));saved=true;}catch{saved=false;}q('#a11y-save-note').textContent=saved?'Preferências salvas apenas neste navegador. Áudio e Libras só iniciam quando você solicitar.':'Este navegador não permitiu salvar os ajustes. Eles continuam ativos nesta página.';}
  function contentRoot(){return [...document.querySelectorAll('dialog[open]')].filter(d=>d!==panel).at(-1)||q('main')||document.body;}
  function visible(el){if(!el||el.closest('[hidden],[aria-hidden="true"],script,style,noscript,svg,#a11y-panel,#a11y-host,#a11y-launcher,#theme-toggle,#vlibras-app-root,#vlibras-access-wrapper,dialog:not([open])'))return false;const details=el.closest('details:not([open])');if(details&&!el.closest('summary'))return false;const style=getComputedStyle(el);return style.display!=='none'&&style.visibility!=='hidden'&&el.getClientRects().length>0&&!el.classList.contains('sr-only');}
  function clearSelection(){selection='';selectionRoot=null;selectionRange=null;q('#a11y-read-selection').disabled=true;}
  function validSelection(target=contentRoot()){return !!selection&&selectionRoot===target&&target.isConnected&&selectionRange?.startContainer.isConnected&&selectionRange?.endContainer.isConnected&&target.contains(selectionRange.commonAncestorContainer)&&selectionRange.toString().trim()===selection;}
  function captureSelection(){const sel=window.getSelection();if(!sel||sel.isCollapsed||!sel.anchorNode)return;const el=sel.anchorNode.nodeType===1?sel.anchorNode:sel.anchorNode.parentElement;const target=contentRoot();if(visible(el)&&target.contains(el)&&target.contains(sel.focusNode)){selection=sel.toString().trim().slice(0,100000);selectionRoot=target;selectionRange=sel.getRangeAt(0).cloneRange();q('#a11y-read-selection').disabled=!canSpeak||!selection;}}
  function textFrom(target){if(!target?.isConnected)return '';const walker=document.createTreeWalker(target,NodeFilter.SHOW_TEXT);const parts=[];let n;while((n=walker.nextNode())){const el=n.parentElement;if(visible(el)){const t=n.textContent.replace(/\s+/g,' ').trim();if(t&&t!=='×')parts.push(t);}}return parts.join(' ').slice(0,100000);}
  function fonts(){root.classList.remove('a11y-text-size');if(prefs.size===100)return;const elements=[...document.body.querySelectorAll('*')].filter(el=>el.namespaceURI==='http://www.w3.org/1999/xhtml'&&!el.closest('#vlibras-app-root,#vlibras-access-wrapper,script,style')&&([...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())||el.matches('input,select,button')));const sizes=elements.map(el=>getComputedStyle(el).fontSize);elements.forEach((el,i)=>{el.style.setProperty('--a11y-base-font',sizes[i]);el.setAttribute('data-a11y-font','');});root.classList.add('a11y-text-size');}
  function apply(){
    root.dataset.theme=theme;root.style.colorScheme=prefs.contrast==='default'?theme:prefs.contrast;
    const meta=q('meta[name="theme-color"]');if(meta)meta.content=prefs.contrast==='dark'?'#111111':prefs.contrast==='light'?'#ffffff':theme==='dark'?'#0c1d24':'#f3f5ef';
    const p=palettes[prefs.palette];let colors={bg:'#f3f5ef',surface:'#ffffff',text:'#102e38',muted:'#52676c',accent:p.accent,'on-accent':'#ffffff',line:'#a5bab7',soft:p.soft,warning:p.warning};
    if(prefs.palette==='achromatopsia')Object.assign(colors,{bg:'#f4f4f4',text:'#191919',muted:'#424242',line:'#858585'});
    if(theme==='dark'){
      Object.assign(colors,{bg:'#0c1d24',surface:'#152d35',text:'#edf5f4',muted:'#b1c7c9',accent:'#63d6cb','on-accent':'#102e38',line:'#405c63',soft:'#1c3e42',warning:'#44351f'});
      if(['protanopia','deuteranopia'].includes(prefs.palette))Object.assign(colors,{accent:'#9ec5ff',soft:'#20364e'});
      if(prefs.palette==='tritanopia')Object.assign(colors,{accent:'#ffaccb',soft:'#412838',warning:'#34364b'});
      if(prefs.palette==='achromatopsia')Object.assign(colors,{bg:'#171717',surface:'#262626',text:'#f3f3f3',muted:'#c4c4c4',accent:'#e4e4e4','on-accent':'#191919',line:'#707070',soft:'#383838',warning:'#424242'});
    }
    if(prefs.contrast==='light')Object.assign(colors,{bg:'#ffffff',surface:'#ffffff',text:'#111111',muted:'#242424',accent:'#143e83','on-accent':'#ffffff',line:'#444444',soft:'#ededed',warning:'#fff1b0'});
    if(prefs.contrast==='dark')Object.assign(colors,{bg:'#111111',surface:'#191919',text:'#ffffff',muted:'#efefef',accent:'#ffe066','on-accent':'#111111',line:'#bdbdbd',soft:'#303030',warning:'#3c3319'});
    for(const [k,v]of Object.entries(colors))root.style.setProperty('--a11y-'+k,v);
    root.classList.toggle('a11y-custom-colors',theme==='dark'||prefs.palette!=='default'||prefs.contrast!=='default');
    root.dataset.a11yPalette=prefs.palette;root.dataset.a11yContrast=prefs.contrast;
    for(const k of ['spacing','readable','links','titles','focus','ruler','quiet','cursor'])root.classList.toggle('a11y-'+k,prefs[k]);
    root.classList.toggle('a11y-no-motion',prefs.motion);root.classList.toggle('a11y-hide-images',prefs.images);root.classList.toggle('a11y-large',prefs.size>=150);
    root.style.setProperty('--a11y-font-scale',prefs.size/100);ruler.hidden=!prefs.ruler;
    for(const input of panel.querySelectorAll('[data-a11y-setting]')){const k=input.dataset.a11ySetting;if(input.type==='checkbox')input.checked=prefs[k];else input.value=String(prefs[k]);}
    q('#a11y-size-value').textContent=prefs.size+'%';q('#a11y-size').setAttribute('aria-valuetext',prefs.size+' por cento');fonts();
  }
  function sync(){const target=contentRoot();if(host.parentNode!==target&&target.tagName==='DIALOG')target.append(host);else if(target.tagName!=='DIALOG'&&host.parentNode!==document.body)document.body.append(host);
    const controls=target.tagName==='DIALOG'?(target.querySelector('.dialog-head,.dialog-top')||target):menu;
    if(launcher.parentNode!==controls){const close=controls.querySelector('button[aria-label^="Fechar"]');controls.insertBefore(launcher,close?.parentNode===controls?close:null);}
    if(themeToggle.parentNode!==controls||themeToggle.nextElementSibling!==launcher)controls.insertBefore(themeToggle,launcher);
    for(const id of ['vlibras-access-wrapper','vlibras-app-root']){const el=document.getElementById(id);if(el){el.hidden=!librasEnabled;const parent=target.tagName==='DIALOG'?target:document.body;if(el.parentNode!==parent)parent.append(el);}}
    fonts();if(selection&&!validSelection(target))clearSelection();if(reading&&readingSource&&(!readingSource.isConnected||readingSource!==target||readingSource.tagName==='DIALOG'&&!readingSource.open))stop('Leitura interrompida: o conteúdo foi fechado ou mudou.');
  }
  function schedule(){if(raf)return;raf=requestAnimationFrame(()=>{raf=0;sync();});}
  function openPanel(){if(panel.open)return;opener=document.activeElement;source=contentRoot();captureSelection();if(selection&&!validSelection(source))clearSelection();q('#a11y-read-selection').disabled=!canSpeak||!selection;panel.showModal();launcher.setAttribute('aria-expanded','true');q('#a11y-close').focus();}
  function closePanel(){if(panel.open)panel.close();}
  function updateSpeech(message){q('#a11y-dock').hidden=!reading;q('#a11y-reading-status').textContent=message||'';q('#a11y-stop').disabled=!reading;q('#a11y-pause').disabled=!reading;q('#a11y-pause').textContent=paused?'Continuar':'Pausar';q('#a11y-dock-pause').textContent=paused?'Continuar':'Pausar';}
  function stop(message='Leitura encerrada.'){session++;reading=false;paused=false;chunks=[];utterance=null;readingSource=null;if(canSpeak)speech.cancel();updateSpeech(message);if(message)say(message);}
  function speakChunk(token){if(token!==session||!reading)return;if(chunkIndex>=chunks.length){reading=false;utterance=null;updateSpeech('Leitura concluída.');say('Leitura concluída.');return;}
    const u=new SpeechSynthesisUtterance(chunks[chunkIndex]);utterance=u;u.lang='pt-BR';u.rate=prefs.rate;const chosen=voices.find(v=>v.voiceURI===prefs.voice)||voices.find(v=>/^pt[-_]BR$/i.test(v.lang)&&v.localService)||voices.find(v=>/^pt/i.test(v.lang));if(chosen)u.voice=chosen;
    u.onstart=()=>{if(token===session){updateSpeech(`Lendo trecho ${chunkIndex+1} de ${chunks.length}.`);say('Leitura em andamento. Use Pausar ou Parar nos controles flutuantes.');}};
    u.onend=()=>{if(token!==session)return;chunkIndex++;speakChunk(token);};
    u.onerror=event=>{if(token!==session)return;reading=false;paused=false;utterance=null;updateSpeech();say('A voz não pôde concluir a leitura ('+event.error+'). Tente outra voz ou verifique as vozes em português do dispositivo.');};
    speech.speak(u);
  }
  function read(selected=false){if(!canSpeak){if(!panel.open)openPanel();say('Este navegador não oferece síntese de voz. Use um leitor de tela ou outro navegador compatível.');return;}
    if(!source?.isConnected)source=contentRoot();if(selected&&!validSelection(source))clearSelection();const text=selected?selection:textFrom(source);if(!text){say(selected?'Selecione um trecho do conteúdo antes de abrir este painel.':'Não há texto visível neste conteúdo para ler.');return;}
    stop('');const sentences=text.match(/[^.!?]+[.!?]?/g)||[text];chunks=[];for(const sentence of sentences){let s=sentence.trim();while(s.length>220){let pos=s.lastIndexOf(' ',220);if(pos<1)pos=220;chunks.push(s.slice(0,pos));s=s.slice(pos).trim();}if(s)chunks.push(s);}
    chunkIndex=0;reading=true;readingSource=source;paused=false;updateSpeech('Preparando a voz…');closePanel();speakChunk(session);
  }
  function pause(){if(!reading)return;paused=!paused;if(paused)speech.pause();else speech.resume();updateSpeech(paused?'Leitura pausada.':`Lendo trecho ${chunkIndex+1} de ${chunks.length}.`);}
  function loadVoices(){if(!canSpeak)return;voices=speech.getVoices().filter(v=>/^pt/i.test(v.lang));const select=q('#a11y-voice');select.replaceChildren(new Option('Voz padrão do navegador · português',''));for(const v of voices)select.add(new Option(`${v.name} (${v.lang}${v.localService?' · local':' · online'})`,v.voiceURI));select.value=voices.some(v=>v.voiceURI===prefs.voice)?prefs.voice:'';}
  function setLibras(enabled){librasEnabled=enabled;root.dataset.a11yLibras=enabled?'on':'off';q('#a11y-libras').setAttribute('aria-pressed',String(enabled));q('#a11y-libras').textContent=enabled?'Desativar VLibras':'Ativar VLibras online';for(const id of ['vlibras-access-wrapper','vlibras-app-root']){const el=document.getElementById(id);if(el){el.hidden=!enabled;if(!enabled&&id==='vlibras-app-root')el.dataset.active='false';}}}
  function librasReady(){clearTimeout(librasTimer);librasLoading=false;q('#a11y-libras').disabled=false;const wrapper=q('#vlibras-access-wrapper');if(!wrapper){setLibras(false);q('#a11y-libras-status').textContent='Não foi possível iniciar o VLibras. Verifique a conexão e tente novamente.';return;}
    setLibras(librasEnabled);q('#a11y-libras-status').textContent=librasEnabled?'VLibras carregado. Feche o painel, abra o botão de Libras e selecione o texto a traduzir.':'VLibras desativado nesta página.';sync();
  }
  function toggleLibras(){if(librasEnabled){setLibras(false);q('#a11y-libras-status').textContent='VLibras desativado. Para remover também a sessão já carregada do serviço, recarregue a página.';return;}
    if(librasLoading)return;
    if(navigator.onLine===false){q('#a11y-libras-status').textContent='Você está sem internet. O VLibras precisa de conexão; os ajustes visuais continuam disponíveis.';return;}
    setLibras(true);if(q('#vlibras-access-wrapper')){librasReady();return;}
    librasLoading=true;q('#a11y-libras').disabled=true;q('#a11y-libras-status').textContent='Carregando o serviço oficial VLibras…';const script=document.createElement('script');script.src='https://vlibras.gov.br/app/vlibras-plugin.js';script.async=true;script.dataset.a11yVlibras='';script.onload=()=>{const check=()=>{if(q('#vlibras-access-wrapper'))librasReady();else if(librasLoading)setTimeout(check,100);};check();};
    const fail=()=>{if(!librasLoading)return;librasLoading=false;setLibras(false);q('#a11y-libras').disabled=false;q('#a11y-libras-status').textContent='O serviço VLibras não respondeu. Verifique a conexão e tente novamente; os demais recursos continuam disponíveis.';script.remove();};script.onerror=fail;librasTimer=setTimeout(fail,15000);document.body.append(script);
  }
  launcher.addEventListener('click',openPanel);q('#a11y-close').addEventListener('click',closePanel);
  themeToggle.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';themeControl();apply();try{localStorage.setItem(THEME_KEY,theme);}catch{say('Tema aplicado. Este navegador não permitiu salvar a preferência.');}});
  panel.addEventListener('close',()=>{launcher.setAttribute('aria-expanded','false');sync();(opener?.isConnected?opener:launcher).focus();});
  panel.addEventListener('change',event=>{const input=event.target;if(!input.dataset.a11ySetting)return;const k=input.dataset.a11ySetting;prefs[k]=input.type==='checkbox'?input.checked:['size','rate'].includes(k)?Number(input.value):input.value;apply();persist();say('Ajuste aplicado. Você pode alterar ou restaurar a qualquer momento.');});
  q('#a11y-size').addEventListener('input',event=>{prefs.size=Number(event.target.value);apply();persist();});
  q('#a11y-reset').addEventListener('click',()=>{stop('');prefs={...defaults};clearSelection();setLibras(false);apply();persist();q('#a11y-libras-status').textContent='VLibras desativado. Ative quando precisar.';say('Ajustes restaurados. Seu progresso na oficina foi mantido.');});
  q('#a11y-read').addEventListener('click',()=>read());q('#a11y-read-selection').addEventListener('click',()=>read(true));
  for(const id of ['a11y-pause','a11y-dock-pause'])q('#'+id).addEventListener('click',pause);
  for(const id of ['a11y-stop','a11y-dock-stop'])q('#'+id).addEventListener('click',()=>stop());
  q('#a11y-libras').addEventListener('click',toggleLibras);
  document.addEventListener('selectionchange',captureSelection);
  document.addEventListener('pointermove',event=>{if(prefs.ruler)root.style.setProperty('--a11y-ruler-y',event.clientY+'px');},{passive:true});
  document.addEventListener('focusin',event=>{if(prefs.ruler){const rect=event.target.getBoundingClientRect();root.style.setProperty('--a11y-ruler-y',(rect.top+rect.height/2)+'px');}});
  document.addEventListener('keydown',event=>{if(event.altKey&&event.shiftKey&&event.code==='KeyA'){event.preventDefault();panel.open?closePanel():openPanel();}if(event.altKey&&event.shiftKey&&event.code==='KeyL'){event.preventDefault();if(!panel.open)source=contentRoot();read();}});
  document.addEventListener('click',event=>{if(reading&&event.target.closest('.navigation [data-view],.navigation a,.brand,[data-from-modal],[data-mission],#confirm-reset,#next-case,#previous-case'))stop('Leitura interrompida: o conteúdo mudou.');});
  window.addEventListener('pagehide',()=>stop(''));window.addEventListener('resize',schedule);window.addEventListener('storage',event=>{if(event.key===KEY)say('Preferências alteradas em outra aba. Reabra esta página para aplicar os mesmos ajustes.');if(event.key===THEME_KEY){theme=event.newValue==='dark'?'dark':'light';themeControl();apply();}});
  if(canSpeak){loadVoices();speech.addEventListener('voiceschanged',loadVoices);}else{q('#a11y-speech-help').textContent='A síntese de voz não está disponível neste navegador. Os demais ajustes continuam funcionando.';for(const id of ['a11y-read','a11y-read-selection','a11y-pause','a11y-stop','a11y-voice','a11y-rate'])q('#'+id).disabled=true;}
  new MutationObserver(records=>{const relevant=records.filter(r=>{const el=r.target.nodeType===1?r.target:r.target.parentElement;return !el?.closest('#a11y-panel,#a11y-host,#theme-toggle,#vlibras-app-root,#vlibras-access-wrapper')&&!(r.type==='childList'&&[...r.addedNodes,...r.removedNodes].length&&[...r.addedNodes,...r.removedNodes].every(n=>n.nodeType===1&&['a11y-host','a11y-launcher','theme-toggle','vlibras-access-wrapper','vlibras-app-root'].includes(n.id)));});if(relevant.length){if(reading&&readingSource&&relevant.some(r=>r.type==='childList'&&readingSource.contains(r.target)))stop('Leitura interrompida: o conteúdo mudou. Inicie a leitura novamente para ouvir a versão atual.');schedule();}}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['open']});
  setLibras(false);apply();sync();if(!saved)q('#a11y-save-note').textContent='As preferências valem nesta página; o navegador pode não permitir salvamento.';
})();
