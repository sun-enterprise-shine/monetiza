var re=["Neg\xF3cios, vendas e marketing","Finan\xE7as e organiza\xE7\xE3o","Educa\xE7\xE3o e desenvolvimento","Beleza, moda e estilo","Culin\xE1ria e alimenta\xE7\xE3o","Casa, fam\xEDlia e rotina","Tecnologia e ferramentas digitais","Artes, criatividade e hobbies","Outra \xE1rea"],le=["Ainda n\xE3o sei","Mulheres","M\xE3es e fam\xEDlias","Empreendedores e aut\xF4nomos","Profissionais de uma \xE1rea","Estudantes e iniciantes","Pessoas com um hobby ou interesse espec\xEDfico","Outro p\xFAblico"],ce=["Materiais prontos (PDFs, planilhas, templates)","Aulas gravadas ou minicursos","Aulas ao vivo e encontros em grupo","Atendimento individual e personalizado","N\xE3o sei, quero que a IA recomende"],A=[{key:"q1",title:"O que voc\xEA sabe fazer bem?",help:"Pode ser do trabalho, de um hobby ou da vida pessoal. Respostas curtas valem.",ex:"Exemplo: organizo as finan\xE7as da casa, fa\xE7o bolos decorados, ensino ingl\xEAs para crian\xE7as."},{key:"q2",title:"Sobre o que as pessoas costumam pedir sua ajuda?",help:"Pense nas perguntas que amigas, clientes ou familiares fazem para voc\xEA.",ex:"Exemplo: me pedem dicas para montar a rotina dos filhos e organizar a casa."},{key:"q3",title:"Qual dessas \xE1reas mais combina com voc\xEA?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:re,other:{when:"Outra \xE1rea",key:"q3_other",label:"Qual \xE1rea? (opcional)"}},{key:"q4",title:"Quem voc\xEA gostaria de ajudar?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:le,exclusive:"Ainda n\xE3o sei",other:{when:"Outro p\xFAblico",key:"q4_other",label:"Qual p\xFAblico? (opcional)"}},{key:"q5",title:"Voc\xEA j\xE1 ensinou ou ajudou algu\xE9m a conseguir um resultado?",help:"Conte em poucas palavras. Se ainda n\xE3o, tudo bem: escreva \u201Cainda n\xE3o\u201D.",ex:"Exemplo: ajudei uma vizinha a organizar as contas e sair do cheque especial."},{key:"q6",title:"Como voc\xEA prefere entregar seu conhecimento?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:ce,exclusive:"N\xE3o sei, quero que a IA recomende"}],de=3,$=e=>Array.isArray(e)?e:typeof e=="string"&&e?[e]:[],j=(e,a)=>a==="q3"||a==="q4"||a==="q6"?$(e[a]).length>0:!!e[a]?.trim(),H=e=>{let a=A.findIndex(t=>!j(e,t.key));return a<0?5:a},i=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),_=e=>"R$\xA0"+e.toLocaleString("pt-BR");function N(e){let a=e.price_min===e.price_max?_(e.price_min):`${_(e.price_min)} a ${_(e.price_max)}`;return e.price_period==="mes"?e.price_annual?`${a} por m\xEAs (plano anual)`:`${a} por m\xEAs`:e.tier==="abre_carteira"?a:`${a} ou em at\xE9 12x`}var O=e=>(e.price_min===e.price_max?_(e.price_min):`${_(e.price_min)}\u2013${e.price_max.toLocaleString("pt-BR")}`)+(e.price_period==="mes"?"/m\xEAs":""),M=[{tier:"abre_carteira",cls:"t1",name:"Abre Carteira",role:"Produtos de entrada: uma pequena vit\xF3ria r\xE1pida, pre\xE7o acess\xEDvel."},{tier:"base",cls:"t2",name:"Base",role:"O n\xFAcleo da sua oferta: resolve um problema maior, com mais profundidade."},{tier:"personalizacao",cls:"t3",name:"Personaliza\xE7\xE3o",role:"Acompanhamento pr\xF3ximo e sob medida, com valor mais alto."}];function ue(e,a=""){return`<div class="stairs ${a}" aria-hidden="true">${e.map(([t,o],s)=>`<div class="step t${s+1}"><b>${i(t)}</b><small>${i(o)}</small></div>`).join("")}</div><div class="stairs-base"></div>`}function B(e,a,t="",o=!1){return`<article class="idea ${a}">
    <div class="head"><h3>${i(e.name)}</h3><span class="price">${i(N(e))}</span></div>
    <p class="sub">${i(e.subtitle)}</p>
    ${t?`<span class="pick">${i(t)}</span>`:""}
    <dl>
      <div><dt>Para quem</dt><dd>${i(e.audience)}</dd></div>
      <div><dt>Problema que resolve</dt><dd>${i(e.problem)}</dd></div>
      <div><dt>Promessa</dt><dd>${i(e.promise)}</dd></div>
      <div><dt>Formato</dt><dd>${i(e.format)}</dd></div>
      <div><dt>Por que esta ideia</dt><dd>${i(e.rationale)}</dd></div>
    </dl>
    ${o?`<button class="copy" type="button" data-id="${i(e.id)}">Copiar ideia</button>`:""}
  </article>`}function D(e,a,t,o){let s=A[a],d=s.options?`<fieldset class="opts"><legend class="sr">${i(s.title)}</legend>
        ${s.options.map(m=>`<label class="opt"><input type="checkbox" name="opt" value="${i(m)}" ${$(t[s.key]).includes(m)?"checked":""}><span>${i(m)}</span></label>`).join("")}
      </fieldset>
      ${s.other?`<div class="other" id="other" ${$(t[s.key]).includes(s.other.when)?"":"hidden"}><label class="count" for="otherIn">${i(s.other.label)}</label>
        <input type="text" id="otherIn" maxlength="100" value="${i(t[s.other.key])}"></div>`:""}`:`<div class="field"><textarea id="txt" maxlength="600" aria-label="${i(s.title)}" aria-describedby="help ex">${i(t[s.key])}</textarea>
        <div class="counter"><span id="cnt">${(t[s.key]??"").length}</span>/600</div>
        <button class="link quick" id="dunno" type="button">N\xE3o sei responder</button></div>`;e.innerHTML=`
  <section class="q">
    <div class="progress" aria-hidden="true">${A.map((m,b)=>`<i class="${b<=a?"on":""}"></i>`).join("")}</div>
    <p class="count">Pergunta ${a+1} de 6</p>
    <h1>${i(s.title)}</h1>
    <p class="help" id="help">${i(s.help)}</p>
    ${s.ex?`<p class="ex" id="ex">${i(s.ex)}</p>`:""}
    ${d}
    <p class="err" id="err" role="alert" hidden></p>
    <div class="nav">
      <button class="btn ghost" id="back" type="button">Voltar</button>
      <button class="btn" id="next" type="button">${a===5?i(o.lastLabel):"Continuar"}</button>
    </div>
  </section>`;let u=e.querySelector("#txt");u?.addEventListener("input",()=>{t[s.key]=u.value,e.querySelector("#cnt").textContent=String(u.value.length),o.save()});let g=[...e.querySelectorAll('input[name="opt"]')],l=()=>{let m=g.filter(y=>y.checked).map(y=>y.value);t[s.key]=m,o.save(),g.forEach(y=>{y.disabled=!y.checked&&m.length>=de,y.closest(".opt").classList.toggle("off",y.disabled)});let b=e.querySelector("#other");b&&s.other&&(b.hidden=!m.includes(s.other.when))};g.forEach(m=>m.addEventListener("change",()=>{m.checked&&s.exclusive&&(m.value===s.exclusive?g.forEach(b=>{b!==m&&(b.checked=!1)}):g.forEach(b=>{b.value===s.exclusive&&(b.checked=!1)})),l()})),g.length&&l();let p=e.querySelector("#otherIn");p?.addEventListener("input",()=>{t[s.other.key]=p.value,o.save()}),e.querySelector("#back").addEventListener("click",o.back);let v=()=>{if(!j(t,s.key)){let m=e.querySelector("#err");m.textContent=s.options?"Escolha pelo menos uma op\xE7\xE3o para continuar.":"Escreva uma resposta, mesmo curta, ou toque em \u201CN\xE3o sei responder\u201D.",m.hidden=!1;return}o.next()};e.querySelector("#dunno")?.addEventListener("click",()=>{u.value="N\xE3o sei",t[s.key]="N\xE3o sei",o.save(),v()}),e.querySelector("#next").addEventListener("click",v),u?.focus({preventScroll:!0})}function V(e,a,t=!1){let o=t?[0,1,2,3]:[0,4,9,15];e.innerHTML=`
  <section class="wait" aria-live="polite">
    <h1>Criando suas <em>ideias</em></h1>
    <p class="sub" id="sub">${t?"S\xF3 um instante.":"Isso leva de 10 a 40 segundos. N\xE3o feche esta p\xE1gina."}</p>
    ${ue([["Abre Carteira",""],["Base",""],["Personaliza\xE7\xE3o",""]])}
    <ul>
      <li data-at="${o[0]}">Lendo suas respostas</li>
      <li data-at="${o[1]}">Criando as ideias</li>
      <li data-at="${o[2]}">Montando sua esteira</li>
      <li data-at="${o[3]}">Conferindo a qualidade</li>
    </ul>
  </section>`;let s=Date.now(),d=[...e.querySelectorAll(".stairs .step")],u=()=>{if(!a())return;let g=(Date.now()-s)/1e3;e.querySelectorAll(".wait li").forEach(l=>l.classList.toggle("done",g>=Number(l.dataset.at)+(t?.5:3))),d.forEach((l,p)=>l.classList.toggle("lit",g>=o[p+1])),g>45&&(e.querySelector("#sub").textContent="Est\xE1 levando um pouco mais que o normal. Continue nesta p\xE1gina."),setTimeout(u,t?300:1e3)};u()}function U(e){let a={q1:e.q1.trim(),q2:e.q2.trim(),q3:$(e.q3),q4:$(e.q4),q5:e.q5.trim(),q6:$(e.q6)};return $(e.q3).includes("Outra \xE1rea")&&e.q3_other?.trim()&&(a.q3_other=e.q3_other.trim()),$(e.q4).includes("Outro p\xFAblico")&&e.q4_other?.trim()&&(a.q4_other=e.q4_other.trim()),a}var T='<p class="support">Suporte: <a href="https://wa.me/5585999107083" target="_blank" rel="noopener">WhatsApp (85) 9 9910-7083</a> \xB7 <a href="mailto:contato@carolbergantini.com">contato@carolbergantini.com</a></p>';function G(e){return`${e.name}
${e.subtitle}

Para quem: ${e.audience}
Problema que resolve: ${e.problem}
Promessa: ${e.promise}
Formato: ${e.format}
Pre\xE7o: ${N(e).replace(/\u00a0/g," ")}
Por que esta ideia: ${e.rationale}`}async function J(e){try{return await navigator.clipboard.writeText(e),!0}catch{let a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="fixed",a.style.opacity="0",document.body.append(a),a.select();let t=document.execCommand("copy");return a.remove(),t}}var P=(e="logo",a="mzlg")=>`<svg class="${e}" viewBox="0 0 64 64" aria-hidden="true"><defs><mask id="${a}"><rect width="64" height="64" fill="#fff"/><path d="M26 38 A11 11 0 1 1 38 38 L37 42 H27 Z" fill="#000"/><path d="M28 47 H36" stroke="#000" stroke-width="3" stroke-linecap="round"/></mask></defs><circle cx="32" cy="32" r="28" fill="#9A6B12" mask="url(#${a})"/></svg>`,me=0,pe=(e="logo")=>P(e,`mzl${++me}`),E=(e,a,t,o,s,d)=>`<div class="mini ${e}"><div class="h"><b>${a} <em>${t}</em></b><span class="p">${o}</span></div><small>${s}</small><span class="t">${d}</span></div>`;function Q(){return`<div class="mz-video" role="img" aria-label="Anima\xE7\xE3o: a pessoa responde o que sabe fazer, o Monetiza cria as ideias e mostra 3 produtos da esteira com pre\xE7os">
      <div class="mz-top"><span>Veja como funciona</span><span class="dots"><i></i><i></i><i></i></span></div>
      <div class="mz-scene mz-s1 mz-q" aria-hidden="true">
        <small class="count">Pergunta 1 de 6</small>
        <b>O que voc\xEA sabe fazer <em>bem</em>?</b>
        <div class="mz-field"><span class="mz-type">Organizo finan\xE7as de pequenos neg\xF3cios</span></div>
        <span class="mz-fake">Continuar</span>
      </div>
      <div class="mz-scene mz-s2" aria-hidden="true">${pe()}<b>Criando suas <em>ideias</em></b><div class="mz-bars"><i></i><i></i><i></i></div></div>
      <div class="mz-scene mz-s3" aria-hidden="true">
        <small class="count">Suas 10 ideias \xB7 esteira recomendada</small>
        ${E("t1","Contas Separadas","na Pr\xE1tica","R$ 27 a 47","Planilha para empreendedoras que querem separar as contas sem entender de finan\xE7as.","Abre Carteira")}
        ${E("t2","Caixa no Azul","em 4 Semanas","R$ 397 a 997","Programa em grupo para organizar o caixa em 15 minutos por semana.","Base")}
        ${E("t3","Mentoria","Caixa Leve","R$ 1.500 a 3.000","Acompanhamento individual por 3 meses, com encontros quinzenais.","Personaliza\xE7\xE3o")}
      </div>
    </div>`}function F(e){!e||matchMedia("(prefers-reduced-motion: reduce)").matches||!matchMedia("(hover: hover)").matches||(e.style.transition="transform .25s ease",e.addEventListener("pointermove",a=>{let t=e.getBoundingClientRect(),o=(a.clientX-t.left)/t.width-.5,s=(a.clientY-t.top)/t.height-.5;e.style.transform=`perspective(900px) rotateY(${o*8}deg) rotateX(${-s*8}deg) translateY(-4px)`}),e.addEventListener("pointerleave",()=>{e.style.transform=""}))}var S="mz-sessao",K="mz-aparelho",k={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,a)=>{try{localStorage.setItem(e,a)}catch{}},del:e=>{try{localStorage.removeItem(e)}catch{}}};function Y(){let e=new URLSearchParams(location.hash.replace(/^#/,""));return!e.has("access_token")&&!e.has("error_description")&&!e.has("error")?null:(history.replaceState(null,"",location.pathname+location.search),e.get("access_token")&&e.get("refresh_token")?(k.set(S,JSON.stringify({access:e.get("access_token"),refresh:e.get("refresh_token"),exp:Date.now()+Number(e.get("expires_in")??3600)*1e3})),null):/expired|invalid/i.test(e.get("error_description")??e.get("error_code")??"")?"Este link expirou ou j\xE1 foi usado. Pe\xE7a um novo abaixo.":"N\xE3o conseguimos entrar com este link. Pe\xE7a um novo abaixo.")}var w=()=>!!k.get(S);function q(){k.del(S)}function ge(){let e=k.get(K);return e||(e=crypto.randomUUID(),k.set(K,e)),e}function W(){let e=navigator.userAgent,a=/iPhone|iPad/.test(e)?"iPhone/iPad":/Android/.test(e)?"Android":/Mac/.test(e)?"Mac":/Windows/.test(e)?"Windows":"Outro",t=/Instagram/.test(e)?"Instagram":/Edg\//.test(e)?"Edge":/Chrome\//.test(e)?"Chrome":/Safari\//.test(e)?"Safari":/Firefox\//.test(e)?"Firefox":"Navegador";return`${a} \xB7 ${t}`}async function ve(){let e=k.get(S);if(!e)return null;let a;try{a=JSON.parse(e)}catch{return q(),null}if(a.exp-Date.now()>6e4)return a.access;try{let t=await fetch("https://dyepykxuygmmilchyybr.supabase.co/functions/v1/monetiza-app",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({acao:"renovar",refresh_token:a.refresh})});if(!t.ok)return(t.status===400||t.status===401)&&q(),null;let o=await t.json();return k.set(S,JSON.stringify({access:o.access_token,refresh:o.refresh_token,exp:Date.now()+Number(o.expires_in??3600)*1e3})),o.access_token}catch{return a.access}}async function h(e,a,t={},o={auth:!0}){let s={"content-type":"application/json","x-request-id":crypto.randomUUID(),"x-device-id":ge()};if(o.auth){let d=await ve();if(!d)return{ok:!1,status:401,body:{code:"login",message:"Entre com o link enviado ao seu e-mail."}};s.authorization=`Bearer ${d}`}try{let d=await fetch(e,{method:"POST",headers:s,body:JSON.stringify({acao:a,...t})}),u=await d.json().catch(()=>({code:"internal",message:"Algo deu errado. Tente de novo."}));return d.status===401&&q(),{ok:d.ok&&u?.status==="ok",status:d.status,body:u}}catch{return{ok:!1,status:0,body:{code:"network",message:"N\xE3o conseguimos falar com o servidor. Confira sua internet e tente de novo."}}}}var f="https://dyepykxuygmmilchyybr.supabase.co/functions/v1/monetiza-app";var ee="monetiza-app-v1",n=(()=>{try{let e=JSON.parse(sessionStorage.getItem(ee)??"");if(e?.view)return e}catch{}return{view:{name:"inicio"},answers:{}}})(),z=()=>{try{sessionStorage.setItem(ee,JSON.stringify(n))}catch{}},r=document.getElementById("app"),L=document.getElementById("user");function c(e){n.view=e,z(),oe(),window.scrollTo(0,0),r.focus({preventScroll:!0})}var he=e=>e?new Date(e).toLocaleDateString("pt-BR"):"";function x(e){return e.body.code==="login"?(q(),c({name:"login",msg:e.body.message}),!0):e.body.code==="outro_dispositivo"?(c({name:"fora"}),!0):e.body.code==="sem_acesso"?(c({name:"erro",code:"sem_acesso",message:e.body.message??""}),!0):!1}function ae(e){L.innerHTML="",r.innerHTML=`
  <div class="auth">
    <section class="auth-card">
      <span class="pill-tag">\xC1rea da aluna</span>
      <h1>Entrar no <em>Monetiza</em></h1>
      <p class="lead">Digite o e-mail que voc\xEA usou na compra. Enviamos um link de entrada, sem senha.</p>
      ${e?`<p class="err" role="alert">${i(e)}</p>`:""}
      <form id="f" class="login">
        <label for="email" class="count">Seu e-mail</label>
        <div class="glow"><input type="email" id="email" autocomplete="email" inputmode="email" required placeholder="voce@email.com" value="${i(n.email??"")}"></div>
        <button class="btn block shine" id="send">Receber link de entrada</button>
      </form>
      <ul class="auth-perks">
        <li><span class="dot t1"></span>10 ideias de produtos por gera\xE7\xE3o</li>
        <li><span class="dot t2"></span>Sua esteira e o primeiro produto detalhado</li>
        <li><span class="dot t3"></span>Tudo salvo automaticamente na sua conta</li>
      </ul>
      <p class="meta">Ainda n\xE3o tem acesso? <a href="/monetiza/">Conhe\xE7a o Monetiza</a>.</p>
    </section>
    <section class="auth-side" aria-hidden="false">
      <span class="orb o1" aria-hidden="true"></span><span class="orb o2" aria-hidden="true"></span><span class="orb o3" aria-hidden="true"></span>
      ${Q()}
    </section>
  </div>`,F(r.querySelector(".mz-video"));let a=r.querySelector("#email"),t=r.querySelector(".glow");a.addEventListener("input",()=>t.classList.toggle("ok",a.checkValidity()&&a.value.includes("."))),r.querySelector("#f").addEventListener("submit",async o=>{o.preventDefault();let s=a.value.trim(),d=r.querySelector("#send");d.disabled=!0,d.classList.add("loading"),d.textContent="Enviando...";let u=await h(f,"link",{email:s},{auth:!1});n.email=s,u.ok?c({name:"enviado",email:s}):ae(u.body.message)})}function fe(e){r.innerHTML=`<div class="auth sent">
  <section class="auth-card center">
    <div class="mail" aria-hidden="true">
      <svg viewBox="0 0 120 90" width="120" height="90"><rect class="env" x="6" y="18" width="108" height="66" rx="14"/><path class="flap" d="M10 24 L60 58 L110 24"/><circle class="coin" cx="92" cy="20" r="14"/></svg>
    </div>
    <h1>Confira seu <em>e-mail</em></h1>
    <p class="lead">Se <b>${i(e)}</b> tem acesso ao Monetiza, o link de entrada chega em instantes. Abra o link neste mesmo aparelho.</p>
    <p class="meta">N\xE3o chegou? Confira o spam e a aba Promo\xE7\xF5es. O link vale por 1 hora.</p>
    <div class="actions center"><button class="btn ghost" id="again">Usar outro e-mail</button></div>
  </section></div>`,r.querySelector("#again").addEventListener("click",()=>c({name:"login"}))}function I(){let e=n.view.name;L.innerHTML=n.email?`<nav class="appnav" aria-label="Menu">
    <a href="#inicio" data-go="inicio" ${e==="inicio"?'aria-current="page"':""}>In\xEDcio</a>
    <a href="#salvas" data-go="salvas" ${e==="salvas"?'aria-current="page"':""}>Minhas ideias</a>
    <span class="who">${i(n.email)}</span>
    <button class="link small" id="out">Sair</button></nav>`:"",L.querySelectorAll("[data-go]").forEach(a=>a.addEventListener("click",t=>{t.preventDefault(),c({name:a.dataset.go})})),L.querySelector("#out")?.addEventListener("click",async()=>{await h(f,"sair"),q(),n={view:{name:"login"},answers:{}},c({name:"login"})})}var be=e=>(e??"").trim().split(/\s+/)[0]??"";function ye(){let e=n.limite??3,a=Math.min(n.hoje??0,e),t=e-a,o=Array.from({length:e},(s,d)=>`<i class="${d<t?"on":""}"></i>`).join("");return`<p class="counter ${t?"":"zero"}"><span class="dots" aria-hidden="true">${o}</span>${t?`Voc\xEA ainda tem ${t} de ${e} gera\xE7\xF5es hoje`:"Voc\xEA usou as 3 gera\xE7\xF5es de hoje. Volte amanh\xE3!"}</p>`}function te(e){let a=new Date(e.created_at),t=new Date,o=a.toDateString()===t.toDateString()?`hoje, ${a.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}`:a.toLocaleDateString("pt-BR");return`<li><button class="open" data-id="${i(e.id)}"><span class="ico">${P("logo","s"+i(e.id).slice(0,8))}</span><span class="txt"><b>${i(e.titulo)}</b>${e.primeira?`<small>1\xAA ideia: ${i(e.primeira)}</small>`:""}</span><small class="when">${i(o)}</small></button>`}async function se(e){let a=await h(f,"abrir",{id:e});if(a.ok){let t=a.body.item;n.report=t.resultado,n.titulo=t.titulo,c({name:"result",salvoId:t.id})}else x(a)}function X(){I();let e=Object.keys(n.answers).length>0,a=be(n.nome),t=n.limite??3,o=(n.hoje??0)>=t;r.innerHTML=`
  <div class="home">
    <section class="home-main">
      <h1>Ol\xE1${a?`, ${i(a)}`:""}! Vamos criar suas <em>ideias</em>?</h1>
      <p class="lead">Responda 6 perguntas e receba 10 ideias de produtos, sua esteira e o primeiro produto detalhado.</p>
      <p class="lp-meta"><span>6 perguntas</span><span>cerca de 3 minutos</span><span>salvo automaticamente</span></p>
      ${ye()}
      <button class="btn block" id="start" ${o?"disabled":""}>${e?"Continuar de onde parei":"Gerar novas ideias"}</button>
      <p class="meta">Acesso v\xE1lido at\xE9 ${i(he(n.expira))}</p>
    </section>
    <section class="home-side">
      <div class="card stairs-card"><small>Sua esteira de produtos</small>
        <div class="stairs"><div class="step t1"><b>Abre Carteira</b><small>5 ideias</small></div><div class="step t2"><b>Base</b><small>3 ideias</small></div><div class="step t3"><b>Personaliza\xE7\xE3o</b><small>2 ideias</small></div></div>
      </div>
      <div class="recent"><div class="recent-h"><h2>Suas \xFAltimas ideias</h2><a href="#salvas" id="all">Ver todas</a></div><ul class="savelist" id="recent"><li class="meta">Carregando...</li></ul></div>
    </section>
  </div>`,r.querySelector("#start").addEventListener("click",()=>c({name:"q",i:H(n.answers)})),r.querySelector("#all").addEventListener("click",s=>{s.preventDefault(),c({name:"salvas"})}),h(f,"listar",{limite:3}).then(s=>{let d=r.querySelector("#recent");if(!d)return;if(!s.ok){x(s)||(d.innerHTML='<li class="meta">N\xE3o foi poss\xEDvel carregar agora.</li>');return}let u=s.body.itens;d.innerHTML=u.length?u.map(g=>te(g)+"</li>").join(""):'<li class="meta empty">Suas ideias aparecem aqui assim que voc\xEA gerar a primeira.</li>',d.querySelectorAll(".open").forEach(g=>g.addEventListener("click",()=>{g.disabled=!0,se(g.dataset.id)}))})}var C=!1;async function ie(){C=!0,c({name:"wait"});let e=await h(f,"gerar",{answers:U(n.answers)});if(C=!1,e.ok){n.report=e.body.report;let a=e.body.salvo;n.titulo=void 0,n.hoje=Number(e.body.geracoes_hoje??n.hoje??0),c({name:"result",salvoId:a?.id});return}x(e)||c({name:"erro",code:e.body.code??"internal",message:e.body.message??"Algo deu errado. Tente de novo."})}function $e(e){I();let a=n.report,t=new Map(a.ideas.map(l=>[l.id,l])),o=a.recommended_ladder,s=[t.get(o.entry_idea_id),t.get(o.base_idea_id),t.get(o.premium_idea_id)],d=new Map([[o.entry_idea_id,"Na sua esteira: entrada"],[o.base_idea_id,"Na sua esteira: base"],[o.premium_idea_id,"Na sua esteira: valor alto"]]),u=a.first_product,g=u?t.get(u.idea_id):void 0;r.innerHTML=`
  <article class="res">
    <h1>${n.titulo?i(n.titulo):"Suas 10 <em>ideias</em>"}</h1>
    <p class="summary">${i(a.profile.summary)}</p>
    <p class="area"><b>\xC1rea de oportunidade:</b> ${i(a.profile.opportunity_area)}</p>
    <div class="savebar">${e?'<span class="pick saved-pill">Salvo automaticamente em Minhas ideias</span>':'<button class="btn" id="save">Salvar estas ideias</button>'}
      <button class="btn ghost" id="saved">Minhas ideias</button></div>

    <section aria-labelledby="h-ladder">
      <h2 id="h-ladder">Sua esteira recomendada</h2>
      <p class="intro">Um produto de cada categoria, em ordem: quem compra o primeiro est\xE1 pronto para o seguinte.</p>
      <div class="ladder">
        <div class="stairs">${s.map((l,p)=>`<div class="step t${p+1}"><span class="tier">${M[p].name}</span><b>${i(l?.name)}</b><small>${l?i(O(l)):""}</small></div>`).join("")}</div>
        <div class="stairs-base"></div>
        <p class="prog">${i(o.progression)}</p>
      </div>
    </section>

    ${u&&g?`<section aria-labelledby="h-first" class="first">
      <h2 id="h-first">Seu primeiro produto: ${i(g.name)}</h2>
      ${u.specific_audience?`<p class="intro"><b>Para quem:</b> ${i(u.specific_audience)}</p>`:""}
      <h3>O que entregar</h3><ul>${u.deliverables.map(l=>`<li>${i(l)}</li>`).join("")}</ul>
      <h3>A vers\xE3o mais simples para come\xE7ar</h3><p>${i(u.minimum_viable_version)}</p>
      <h3>Como testar antes de produzir tudo</h3><p>${i(u.validation_method)}</p>
    </section>`:""}

    ${M.map(l=>{let p=a.ideas.filter(v=>v.tier===l.tier);return`<section aria-labelledby="h-${l.cls}">
        <div class="tier-h"><h2 id="h-${l.cls}">${l.name}</h2><span class="n">${p.length} ${p.length===1?"ideia":"ideias"}</span></div>
        <p class="intro">${l.role}</p>
        <div class="ideas ${p.length>2?"cols":""}">${p.map(v=>B(v,l.cls,d.get(v.id)??"",!0)).join("")}</div>
      </section>`}).join("")}

    <div class="again">
      <p>Os pre\xE7os e o potencial s\xE3o hip\xF3teses para voc\xEA testar com seu p\xFAblico, n\xE3o previs\xF5es de vendas.</p>
      <button class="btn ghost" id="new">Gerar novas ideias</button>
    </div>
  </article>`,r.querySelector("#save")?.addEventListener("click",async l=>{let p=l.currentTarget;p.disabled=!0,p.textContent="Salvando...";let v=a.ideas[0]?.name?`Ideias de ${new Date().toLocaleDateString("pt-BR")}`:"Minhas ideias",m=await h(f,"salvar",{titulo:v,resultado:a});if(m.ok){n.titulo=void 0,c({name:"result",salvoId:String(m.body.id)});return}x(m)||(p.disabled=!1,p.textContent="Salvar estas ideias",qe(m.body.message??"N\xE3o foi poss\xEDvel salvar."))}),r.querySelector("#saved").addEventListener("click",()=>c({name:"salvas"})),r.querySelector("#new").addEventListener("click",()=>{n.answers={},c({name:"q",i:0})}),r.querySelectorAll(".copy").forEach(l=>l.addEventListener("click",async()=>{let p=t.get(l.dataset.id);if(!p)return;let v=await J(G(p));l.textContent=v?"Copiada!":"N\xE3o foi poss\xEDvel copiar",l.classList.toggle("done",v),setTimeout(()=>{l.textContent="Copiar ideia",l.classList.remove("done")},2e3)}))}function qe(e){let a=r.querySelector(".savebar");a&&a.insertAdjacentHTML("afterend",`<p class="err" role="alert">${i(e)}</p>`)}async function ne(){I(),r.innerHTML='<section class="saved"><h1>Minhas <em>ideias</em></h1><p class="meta">Carregando...</p></section>';let e=await h(f,"listar",{limite:200});if(!e.ok){if(x(e))return;r.querySelector(".meta").textContent=e.body.message??"N\xE3o foi poss\xEDvel carregar.";return}let a=e.body.itens;r.innerHTML=`<section class="saved">
    <h1>Minhas <em>ideias</em></h1>
    <p class="meta">Cada gera\xE7\xE3o fica salva aqui automaticamente.</p>
    ${a.length?`<ul class="savelist">${a.map(t=>te(t)+`<button class="link small del" data-id="${i(t.id)}">Apagar</button></li>`).join("")}</ul>`:'<p class="meta">Voc\xEA ainda n\xE3o gerou nenhuma ideia. Toque em \u201CGerar novas ideias\u201D para come\xE7ar.</p>'}
    <div class="actions"><button class="btn" id="new">Gerar novas ideias</button><button class="btn ghost" id="back">Voltar ao in\xEDcio</button></div>
  </section>`,r.querySelectorAll(".open").forEach(t=>t.addEventListener("click",()=>{t.disabled=!0,se(t.dataset.id)})),r.querySelectorAll(".del").forEach(t=>t.addEventListener("click",async()=>{if(t.dataset.confirm!=="1"){t.dataset.confirm="1",t.textContent="Toque de novo para apagar";return}let o=await h(f,"apagar",{id:t.dataset.id});o.ok?ne():x(o)})),r.querySelector("#new").addEventListener("click",()=>{n.answers={},c({name:"q",i:0})}),r.querySelector("#back").addEventListener("click",()=>c({name:"inicio"}))}function ke(e){let a={limite:"Limite de hoje atingido",sem_acesso:"Acesso n\xE3o encontrado",network:"Sem conex\xE3o"};r.innerHTML=`<section class="problem" role="alert"><h1>${i(a[e.code]??"Algo deu errado")}</h1><p>${i(e.message)}</p>
    <div class="actions">${e.code==="sem_acesso"?'<a class="btn" href="/monetiza/">Conhecer o Monetiza</a>':e.code==="limite"?'<button class="btn" id="saved">Ver ideias salvas</button>':'<button class="btn" id="retry">Tentar de novo</button>'}
    <button class="btn ghost" id="home">Voltar ao in\xEDcio</button></div></section>${T}`,r.querySelector("#retry")?.addEventListener("click",ie),r.querySelector("#saved")?.addEventListener("click",()=>c({name:"salvas"})),r.querySelector("#home").addEventListener("click",()=>e.code==="sem_acesso"?(q(),c({name:"login"})):c({name:"inicio"}))}function xe(){r.innerHTML=`<section class="problem" role="alert"><h1>Conta aberta em outro aparelho</h1>
    <p>Por seguran\xE7a, o Monetiza fica conectado em um aparelho por vez. Se foi voc\xEA, pode voltar a usar aqui: o outro aparelho ser\xE1 desconectado.</p>
    <div class="actions"><button class="btn" id="here">Usar neste aparelho</button><button class="btn ghost" id="out">Sair</button></div></section>${T}`,r.querySelector("#here").addEventListener("click",R),r.querySelector("#out").addEventListener("click",()=>{q(),c({name:"login"})})}async function R(){r.innerHTML='<section class="hero narrow"><p class="meta">Entrando...</p></section>';let e=await h(f,"entrar",{descricao:W()});if(!e.ok){x(e)||c({name:"erro",code:e.body.code??"internal",message:e.body.message??""});return}n.email=String(e.body.email),n.expira=String(e.body.expira_em),n.nome=e.body.nome??null,n.hoje=Number(e.body.geracoes_hoje??0),n.limite=Number(e.body.limite??3),c(n.view.name==="login"||n.view.name==="enviado"||n.view.name==="fora"||n.view.name==="erro"?{name:"inicio"}:n.view)}function oe(){let e=n.view;if(!w()&&e.name!=="enviado")return e.name!=="login"&&(n.view={name:"login"}),ae(n.view.msg);if(e.name==="login")return R();if(e.name==="enviado")return fe(e.email);if(e.name==="inicio"){X(),h(f,"status").then(a=>{if(a.ok&&n.view.name==="inicio"){let t=Number(a.body.geracoes_hoje??0);t!==n.hoje&&(n.hoje=t,z(),X())}});return}if(e.name==="q")return D(r,e.i,n.answers,{save:z,lastLabel:"Gerar minhas ideias",back:()=>c(e.i===0?{name:"inicio"}:{name:"q",i:e.i-1}),next:()=>e.i<5?c({name:"q",i:e.i+1}):ie()});if(e.name==="wait")return C?V(r,()=>n.view.name==="wait"):c({name:"erro",code:"interrompido",message:"A p\xE1gina foi recarregada antes de o resultado chegar. Suas respostas continuam salvas."});if(e.name==="result"&&n.report)return $e(e.salvoId);if(e.name==="salvas")return void ne();if(e.name==="erro")return ke(e);if(e.name==="fora")return xe();c({name:"inicio"})}var _e=location.hash.includes("access_token"),Z=Y();document.getElementById("brand").addEventListener("click",e=>{e.preventDefault(),w()&&c({name:"inicio"})});Z?c({name:"login",msg:Z}):w()&&(_e||!n.email)?R():oe();
