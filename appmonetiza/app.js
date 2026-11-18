var ne=["Neg\xF3cios, vendas e marketing","Finan\xE7as e organiza\xE7\xE3o","Educa\xE7\xE3o e desenvolvimento","Beleza, moda e estilo","Culin\xE1ria e alimenta\xE7\xE3o","Casa, fam\xEDlia e rotina","Tecnologia e ferramentas digitais","Artes, criatividade e hobbies","Outra \xE1rea"],ie=["Ainda n\xE3o sei","Mulheres","M\xE3es e fam\xEDlias","Empreendedores e aut\xF4nomos","Profissionais de uma \xE1rea","Estudantes e iniciantes","Pessoas com um hobby ou interesse espec\xEDfico","Outro p\xFAblico"],oe=["Materiais prontos (PDFs, planilhas, templates)","Aulas gravadas ou minicursos","Aulas ao vivo e encontros em grupo","Atendimento individual e personalizado","N\xE3o sei, quero que a IA recomende"],A=[{key:"q1",title:"O que voc\xEA sabe fazer bem?",help:"Pode ser do trabalho, de um hobby ou da vida pessoal. Respostas curtas valem.",ex:"Exemplo: organizo as finan\xE7as da casa, fa\xE7o bolos decorados, ensino ingl\xEAs para crian\xE7as."},{key:"q2",title:"Sobre o que as pessoas costumam pedir sua ajuda?",help:"Pense nas perguntas que amigas, clientes ou familiares fazem para voc\xEA.",ex:"Exemplo: me pedem dicas para montar a rotina dos filhos e organizar a casa."},{key:"q3",title:"Qual dessas \xE1reas mais combina com voc\xEA?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:ne,other:{when:"Outra \xE1rea",key:"q3_other",label:"Qual \xE1rea? (opcional)"}},{key:"q4",title:"Quem voc\xEA gostaria de ajudar?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:ie,exclusive:"Ainda n\xE3o sei",other:{when:"Outro p\xFAblico",key:"q4_other",label:"Qual p\xFAblico? (opcional)"}},{key:"q5",title:"Voc\xEA j\xE1 ensinou ou ajudou algu\xE9m a conseguir um resultado?",help:"Conte em poucas palavras. Se ainda n\xE3o, tudo bem: escreva \u201Cainda n\xE3o\u201D.",ex:"Exemplo: ajudei uma vizinha a organizar as contas e sair do cheque especial."},{key:"q6",title:"Como voc\xEA prefere entregar seu conhecimento?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:oe,exclusive:"N\xE3o sei, quero que a IA recomende"}],re=3,$=e=>Array.isArray(e)?e:typeof e=="string"&&e?[e]:[],R=(e,a)=>a==="q3"||a==="q4"||a==="q6"?$(e[a]).length>0:!!e[a]?.trim(),j=e=>{let a=A.findIndex(t=>!R(e,t.key));return a<0?5:a},s=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),w=e=>"R$\xA0"+e.toLocaleString("pt-BR");function N(e){let a=e.price_min===e.price_max?w(e.price_min):`${w(e.price_min)} a ${w(e.price_max)}`;return e.price_period==="mes"?e.price_annual?`${a} por m\xEAs (plano anual)`:`${a} por m\xEAs`:e.tier==="abre_carteira"?a:`${a} ou em at\xE9 12x`}var H=e=>(e.price_min===e.price_max?w(e.price_min):`${w(e.price_min)}\u2013${e.price_max.toLocaleString("pt-BR")}`)+(e.price_period==="mes"?"/m\xEAs":""),M=[{tier:"abre_carteira",cls:"t1",name:"Abre Carteira",role:"Produtos de entrada: uma pequena vit\xF3ria r\xE1pida, pre\xE7o acess\xEDvel."},{tier:"base",cls:"t2",name:"Base",role:"O n\xFAcleo da sua oferta: resolve um problema maior, com mais profundidade."},{tier:"personalizacao",cls:"t3",name:"Personaliza\xE7\xE3o",role:"Acompanhamento pr\xF3ximo e sob medida, com valor mais alto."}];function le(e,a=""){return`<div class="stairs ${a}" aria-hidden="true">${e.map(([t,i],o)=>`<div class="step t${o+1}"><b>${s(t)}</b><small>${s(i)}</small></div>`).join("")}</div><div class="stairs-base"></div>`}function O(e,a,t="",i=!1){return`<article class="idea ${a}">
    <div class="head"><h3>${s(e.name)}</h3><span class="price">${s(N(e))}</span></div>
    <p class="sub">${s(e.subtitle)}</p>
    ${t?`<span class="pick">${s(t)}</span>`:""}
    <dl>
      <div><dt>Para quem</dt><dd>${s(e.audience)}</dd></div>
      <div><dt>Problema que resolve</dt><dd>${s(e.problem)}</dd></div>
      <div><dt>Promessa</dt><dd>${s(e.promise)}</dd></div>
      <div><dt>Formato</dt><dd>${s(e.format)}</dd></div>
      <div><dt>Por que esta ideia</dt><dd>${s(e.rationale)}</dd></div>
    </dl>
    ${i?`<button class="copy" type="button" data-id="${s(e.id)}">Copiar ideia</button>`:""}
  </article>`}function z(e,a,t,i){let o=A[a],m=o.options?`<fieldset class="opts"><legend class="sr">${s(o.title)}</legend>
        ${o.options.map(u=>`<label class="opt"><input type="checkbox" name="opt" value="${s(u)}" ${$(t[o.key]).includes(u)?"checked":""}><span>${s(u)}</span></label>`).join("")}
      </fieldset>
      ${o.other?`<div class="other" id="other" ${$(t[o.key]).includes(o.other.when)?"":"hidden"}><label class="count" for="otherIn">${s(o.other.label)}</label>
        <input type="text" id="otherIn" maxlength="100" value="${s(t[o.other.key])}"></div>`:""}`:`<div class="field"><textarea id="txt" maxlength="600" aria-label="${s(o.title)}" aria-describedby="help ex">${s(t[o.key])}</textarea>
        <div class="counter"><span id="cnt">${(t[o.key]??"").length}</span>/600</div>
        <button class="link quick" id="dunno" type="button">N\xE3o sei responder</button></div>`;e.innerHTML=`
  <section class="q">
    <div class="progress" aria-hidden="true">${A.map((u,f)=>`<i class="${f<=a?"on":""}"></i>`).join("")}</div>
    <p class="count">Pergunta ${a+1} de 6</p>
    <h1>${s(o.title)}</h1>
    <p class="help" id="help">${s(o.help)}</p>
    ${o.ex?`<p class="ex" id="ex">${s(o.ex)}</p>`:""}
    ${m}
    <p class="err" id="err" role="alert" hidden></p>
    <div class="nav">
      <button class="btn ghost" id="back" type="button">Voltar</button>
      <button class="btn" id="next" type="button">${a===5?s(i.lastLabel):"Continuar"}</button>
    </div>
  </section>`;let d=e.querySelector("#txt");d?.addEventListener("input",()=>{t[o.key]=d.value,e.querySelector("#cnt").textContent=String(d.value.length),i.save()});let g=[...e.querySelectorAll('input[name="opt"]')],l=()=>{let u=g.filter(y=>y.checked).map(y=>y.value);t[o.key]=u,i.save(),g.forEach(y=>{y.disabled=!y.checked&&u.length>=re,y.closest(".opt").classList.toggle("off",y.disabled)});let f=e.querySelector("#other");f&&o.other&&(f.hidden=!u.includes(o.other.when))};g.forEach(u=>u.addEventListener("change",()=>{u.checked&&o.exclusive&&(u.value===o.exclusive?g.forEach(f=>{f!==u&&(f.checked=!1)}):g.forEach(f=>{f.value===o.exclusive&&(f.checked=!1)})),l()})),g.length&&l();let p=e.querySelector("#otherIn");p?.addEventListener("input",()=>{t[o.other.key]=p.value,i.save()}),e.querySelector("#back").addEventListener("click",i.back);let v=()=>{if(!R(t,o.key)){let u=e.querySelector("#err");u.textContent=o.options?"Escolha pelo menos uma op\xE7\xE3o para continuar.":"Escreva uma resposta, mesmo curta, ou toque em \u201CN\xE3o sei responder\u201D.",u.hidden=!1;return}i.next()};e.querySelector("#dunno")?.addEventListener("click",()=>{d.value="N\xE3o sei",t[o.key]="N\xE3o sei",i.save(),v()}),e.querySelector("#next").addEventListener("click",v),d?.focus({preventScroll:!0})}function D(e,a,t=!1){let i=t?[0,1,2,3]:[0,4,9,15];e.innerHTML=`
  <section class="wait" aria-live="polite">
    <h1>Criando suas <em>ideias</em></h1>
    <p class="sub" id="sub">${t?"S\xF3 um instante.":"Isso leva de 10 a 40 segundos. N\xE3o feche esta p\xE1gina."}</p>
    ${le([["Abre Carteira",""],["Base",""],["Personaliza\xE7\xE3o",""]])}
    <ul>
      <li data-at="${i[0]}">Lendo suas respostas</li>
      <li data-at="${i[1]}">Criando as ideias</li>
      <li data-at="${i[2]}">Montando sua esteira</li>
      <li data-at="${i[3]}">Conferindo a qualidade</li>
    </ul>
  </section>`;let o=Date.now(),m=[...e.querySelectorAll(".stairs .step")],d=()=>{if(!a())return;let g=(Date.now()-o)/1e3;e.querySelectorAll(".wait li").forEach(l=>l.classList.toggle("done",g>=Number(l.dataset.at)+(t?.5:3))),m.forEach((l,p)=>l.classList.toggle("lit",g>=i[p+1])),g>45&&(e.querySelector("#sub").textContent="Est\xE1 levando um pouco mais que o normal. Continue nesta p\xE1gina."),setTimeout(d,t?300:1e3)};d()}function B(e){let a={q1:e.q1.trim(),q2:e.q2.trim(),q3:$(e.q3),q4:$(e.q4),q5:e.q5.trim(),q6:$(e.q6)};return $(e.q3).includes("Outra \xE1rea")&&e.q3_other?.trim()&&(a.q3_other=e.q3_other.trim()),$(e.q4).includes("Outro p\xFAblico")&&e.q4_other?.trim()&&(a.q4_other=e.q4_other.trim()),a}var x='<p class="support">Suporte: <a href="https://wa.me/5585999107083" target="_blank" rel="noopener">WhatsApp (85) 9 9910-7083</a> \xB7 <a href="mailto:contato@carolbergantini.com">contato@carolbergantini.com</a></p>';function V(e){return`${e.name}
${e.subtitle}

Para quem: ${e.audience}
Problema que resolve: ${e.problem}
Promessa: ${e.promise}
Formato: ${e.format}
Pre\xE7o: ${N(e).replace(/\u00a0/g," ")}
Por que esta ideia: ${e.rationale}`}async function U(e){try{return await navigator.clipboard.writeText(e),!0}catch{let a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="fixed",a.style.opacity="0",document.body.append(a),a.select();let t=document.execCommand("copy");return a.remove(),t}}var G=(e="logo",a="mzlg")=>`<svg class="${e}" viewBox="0 0 64 64" aria-hidden="true"><defs><mask id="${a}"><rect width="64" height="64" fill="#fff"/><path d="M26 38 A11 11 0 1 1 38 38 L37 42 H27 Z" fill="#000"/><path d="M28 47 H36" stroke="#000" stroke-width="3" stroke-linecap="round"/></mask></defs><circle cx="32" cy="32" r="28" fill="#9A6B12" mask="url(#${a})"/></svg>`;var S="mz-sessao",J="mz-aparelho",k={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,a)=>{try{localStorage.setItem(e,a)}catch{}},del:e=>{try{localStorage.removeItem(e)}catch{}}};function Q(){let e=new URLSearchParams(location.hash.replace(/^#/,""));return!e.has("access_token")&&!e.has("error_description")&&!e.has("error")?null:(history.replaceState(null,"",location.pathname+location.search),e.get("access_token")&&e.get("refresh_token")?(k.set(S,JSON.stringify({access:e.get("access_token"),refresh:e.get("refresh_token"),exp:Date.now()+Number(e.get("expires_in")??3600)*1e3})),null):/expired|invalid/i.test(e.get("error_description")??e.get("error_code")??"")?"Este link expirou ou j\xE1 foi usado. Pe\xE7a um novo abaixo.":"N\xE3o conseguimos entrar com este link. Pe\xE7a um novo abaixo.")}var L=()=>!!k.get(S);function q(){k.del(S)}function ce(){let e=k.get(J);return e||(e=crypto.randomUUID(),k.set(J,e)),e}function F(){let e=navigator.userAgent,a=/iPhone|iPad/.test(e)?"iPhone/iPad":/Android/.test(e)?"Android":/Mac/.test(e)?"Mac":/Windows/.test(e)?"Windows":"Outro",t=/Instagram/.test(e)?"Instagram":/Edg\//.test(e)?"Edge":/Chrome\//.test(e)?"Chrome":/Safari\//.test(e)?"Safari":/Firefox\//.test(e)?"Firefox":"Navegador";return`${a} \xB7 ${t}`}async function de(){let e=k.get(S);if(!e)return null;let a;try{a=JSON.parse(e)}catch{return q(),null}if(a.exp-Date.now()>6e4)return a.access;try{let t=await fetch("https://dyepykxuygmmilchyybr.supabase.co/functions/v1/monetiza-app",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({acao:"renovar",refresh_token:a.refresh})});if(!t.ok)return(t.status===400||t.status===401)&&q(),null;let i=await t.json();return k.set(S,JSON.stringify({access:i.access_token,refresh:i.refresh_token,exp:Date.now()+Number(i.expires_in??3600)*1e3})),i.access_token}catch{return a.access}}async function h(e,a,t={},i={auth:!0}){let o={"content-type":"application/json","x-request-id":crypto.randomUUID(),"x-device-id":ce()};if(i.auth){let m=await de();if(!m)return{ok:!1,status:401,body:{code:"login",message:"Entre com o link enviado ao seu e-mail."}};o.authorization=`Bearer ${m}`}try{let m=await fetch(e,{method:"POST",headers:o,body:JSON.stringify({acao:a,...t})}),d=await m.json().catch(()=>({code:"internal",message:"Algo deu errado. Tente de novo."}));return m.status===401&&q(),{ok:m.ok&&d?.status==="ok",status:m.status,body:d}}catch{return{ok:!1,status:0,body:{code:"network",message:"N\xE3o conseguimos falar com o servidor. Confira sua internet e tente de novo."}}}}var b="https://dyepykxuygmmilchyybr.supabase.co/functions/v1/monetiza-app";var Y="monetiza-app-v1",n=(()=>{try{let e=JSON.parse(sessionStorage.getItem(Y)??"");if(e?.view)return e}catch{}return{view:{name:"inicio"},answers:{}}})(),T=()=>{try{sessionStorage.setItem(Y,JSON.stringify(n))}catch{}},r=document.getElementById("app"),E=document.getElementById("user");function c(e){n.view=e,T(),se(),window.scrollTo(0,0),r.focus({preventScroll:!0})}var ue=e=>e?new Date(e).toLocaleDateString("pt-BR"):"";function _(e){return e.body.code==="login"?(q(),c({name:"login",msg:e.body.message}),!0):e.body.code==="outro_dispositivo"?(c({name:"fora"}),!0):e.body.code==="sem_acesso"?(c({name:"erro",code:"sem_acesso",message:e.body.message??""}),!0):!1}function X(e){E.innerHTML="",r.innerHTML=`
  <section class="hero narrow">
    <h1>Entrar no <em>Monetiza</em></h1>
    <p class="lead">Digite o e-mail que voc\xEA usou na compra. Enviamos um link de entrada, sem senha.</p>
    ${e?`<p class="err" role="alert">${s(e)}</p>`:""}
    <form id="f" class="login">
      <label for="email" class="count">Seu e-mail</label>
      <input type="email" id="email" autocomplete="email" inputmode="email" required value="${s(n.email??"")}">
      <button class="btn block" id="send">Receber link de entrada</button>
    </form>
    <p class="meta">Ainda n\xE3o tem acesso? <a href="/monetiza/">Conhe\xE7a o Monetiza</a>.</p>
  </section>${x}`,r.querySelector("#f").addEventListener("submit",async a=>{a.preventDefault();let t=r.querySelector("#email").value.trim(),i=r.querySelector("#send");i.disabled=!0,i.textContent="Enviando...";let o=await h(b,"link",{email:t},{auth:!1});n.email=t,o.ok?c({name:"enviado",email:t}):(i.disabled=!1,i.textContent="Receber link de entrada",X(o.body.message))})}function me(e){r.innerHTML=`<section class="hero narrow">
    <h1>Confira seu <em>e-mail</em></h1>
    <p class="lead">Se <b>${s(e)}</b> tem acesso ao Monetiza, o link de entrada chega em instantes. Abra o link neste mesmo aparelho.</p>
    <p class="meta">N\xE3o chegou? Confira o spam e a aba Promo\xE7\xF5es. O link vale por 1 hora.</p>
    <div class="actions"><button class="btn ghost" id="again">Usar outro e-mail</button></div>
  </section>${x}`,r.querySelector("#again").addEventListener("click",()=>c({name:"login"}))}function I(){let e=n.view.name;E.innerHTML=n.email?`<nav class="appnav" aria-label="Menu">
    <a href="#inicio" data-go="inicio" ${e==="inicio"?'aria-current="page"':""}>In\xEDcio</a>
    <a href="#salvas" data-go="salvas" ${e==="salvas"?'aria-current="page"':""}>Minhas ideias</a>
    <span class="who">${s(n.email)}</span>
    <button class="link small" id="out">Sair</button></nav>`:"",E.querySelectorAll("[data-go]").forEach(a=>a.addEventListener("click",t=>{t.preventDefault(),c({name:a.dataset.go})})),E.querySelector("#out")?.addEventListener("click",async()=>{await h(b,"sair"),q(),n={view:{name:"login"},answers:{}},c({name:"login"})})}var pe=e=>(e??"").trim().split(/\s+/)[0]??"";function ge(){let e=n.limite??3,a=Math.min(n.hoje??0,e),t=e-a,i=Array.from({length:e},(o,m)=>`<i class="${m<t?"on":""}"></i>`).join("");return`<p class="counter ${t?"":"zero"}"><span class="dots" aria-hidden="true">${i}</span>${t?`Voc\xEA ainda tem ${t} de ${e} gera\xE7\xF5es hoje`:"Voc\xEA usou as 3 gera\xE7\xF5es de hoje. Volte amanh\xE3!"}</p>`}function Z(e){let a=new Date(e.created_at),t=new Date,i=a.toDateString()===t.toDateString()?`hoje, ${a.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}`:a.toLocaleDateString("pt-BR");return`<li><button class="open" data-id="${s(e.id)}"><span class="ico">${G("logo","s"+s(e.id).slice(0,8))}</span><span class="txt"><b>${s(e.titulo)}</b>${e.primeira?`<small>1\xAA ideia: ${s(e.primeira)}</small>`:""}</span><small class="when">${s(i)}</small></button>`}async function ee(e){let a=await h(b,"abrir",{id:e});if(a.ok){let t=a.body.item;n.report=t.resultado,n.titulo=t.titulo,c({name:"result",salvoId:t.id})}else _(a)}function K(){I();let e=Object.keys(n.answers).length>0,a=pe(n.nome),t=n.limite??3,i=(n.hoje??0)>=t;r.innerHTML=`
  <div class="home">
    <section class="home-main">
      <h1>Ol\xE1${a?`, ${s(a)}`:""}! Vamos criar suas <em>ideias</em>?</h1>
      <p class="lead">Responda 6 perguntas e receba 10 ideias de produtos, sua esteira e o primeiro produto detalhado.</p>
      <p class="lp-meta"><span>6 perguntas</span><span>cerca de 3 minutos</span><span>salvo automaticamente</span></p>
      ${ge()}
      <button class="btn block" id="start" ${i?"disabled":""}>${e?"Continuar de onde parei":"Gerar novas ideias"}</button>
      <p class="meta">Acesso v\xE1lido at\xE9 ${s(ue(n.expira))}</p>
    </section>
    <section class="home-side">
      <div class="card stairs-card"><small>Sua esteira de produtos</small>
        <div class="stairs"><div class="step t1"><b>Abre Carteira</b><small>5 ideias</small></div><div class="step t2"><b>Base</b><small>3 ideias</small></div><div class="step t3"><b>Personaliza\xE7\xE3o</b><small>2 ideias</small></div></div>
      </div>
      <div class="recent"><div class="recent-h"><h2>Suas \xFAltimas ideias</h2><a href="#salvas" id="all">Ver todas</a></div><ul class="savelist" id="recent"><li class="meta">Carregando...</li></ul></div>
    </section>
  </div>`,r.querySelector("#start").addEventListener("click",()=>c({name:"q",i:j(n.answers)})),r.querySelector("#all").addEventListener("click",o=>{o.preventDefault(),c({name:"salvas"})}),h(b,"listar",{limite:3}).then(o=>{let m=r.querySelector("#recent");if(!m)return;if(!o.ok){_(o)||(m.innerHTML='<li class="meta">N\xE3o foi poss\xEDvel carregar agora.</li>');return}let d=o.body.itens;m.innerHTML=d.length?d.map(g=>Z(g)+"</li>").join(""):'<li class="meta empty">Suas ideias aparecem aqui assim que voc\xEA gerar a primeira.</li>',m.querySelectorAll(".open").forEach(g=>g.addEventListener("click",()=>{g.disabled=!0,ee(g.dataset.id)}))})}var P=!1;async function ae(){P=!0,c({name:"wait"});let e=await h(b,"gerar",{answers:B(n.answers)});if(P=!1,e.ok){n.report=e.body.report;let a=e.body.salvo;n.titulo=void 0,n.hoje=Number(e.body.geracoes_hoje??n.hoje??0),c({name:"result",salvoId:a?.id});return}_(e)||c({name:"erro",code:e.body.code??"internal",message:e.body.message??"Algo deu errado. Tente de novo."})}function ve(e){I();let a=n.report,t=new Map(a.ideas.map(l=>[l.id,l])),i=a.recommended_ladder,o=[t.get(i.entry_idea_id),t.get(i.base_idea_id),t.get(i.premium_idea_id)],m=new Map([[i.entry_idea_id,"Na sua esteira: entrada"],[i.base_idea_id,"Na sua esteira: base"],[i.premium_idea_id,"Na sua esteira: valor alto"]]),d=a.first_product,g=d?t.get(d.idea_id):void 0;r.innerHTML=`
  <article class="res">
    <h1>${n.titulo?s(n.titulo):"Suas 10 <em>ideias</em>"}</h1>
    <p class="summary">${s(a.profile.summary)}</p>
    <p class="area"><b>\xC1rea de oportunidade:</b> ${s(a.profile.opportunity_area)}</p>
    <div class="savebar">${e?'<span class="pick saved-pill">Salvo automaticamente em Minhas ideias</span>':'<button class="btn" id="save">Salvar estas ideias</button>'}
      <button class="btn ghost" id="saved">Minhas ideias</button></div>

    <section aria-labelledby="h-ladder">
      <h2 id="h-ladder">Sua esteira recomendada</h2>
      <p class="intro">Um produto de cada categoria, em ordem: quem compra o primeiro est\xE1 pronto para o seguinte.</p>
      <div class="ladder">
        <div class="stairs">${o.map((l,p)=>`<div class="step t${p+1}"><span class="tier">${M[p].name}</span><b>${s(l?.name)}</b><small>${l?s(H(l)):""}</small></div>`).join("")}</div>
        <div class="stairs-base"></div>
        <p class="prog">${s(i.progression)}</p>
      </div>
    </section>

    ${d&&g?`<section aria-labelledby="h-first" class="first">
      <h2 id="h-first">Seu primeiro produto: ${s(g.name)}</h2>
      ${d.specific_audience?`<p class="intro"><b>Para quem:</b> ${s(d.specific_audience)}</p>`:""}
      <h3>O que entregar</h3><ul>${d.deliverables.map(l=>`<li>${s(l)}</li>`).join("")}</ul>
      <h3>A vers\xE3o mais simples para come\xE7ar</h3><p>${s(d.minimum_viable_version)}</p>
      <h3>Como testar antes de produzir tudo</h3><p>${s(d.validation_method)}</p>
    </section>`:""}

    ${M.map(l=>{let p=a.ideas.filter(v=>v.tier===l.tier);return`<section aria-labelledby="h-${l.cls}">
        <div class="tier-h"><h2 id="h-${l.cls}">${l.name}</h2><span class="n">${p.length} ${p.length===1?"ideia":"ideias"}</span></div>
        <p class="intro">${l.role}</p>
        <div class="ideas ${p.length>2?"cols":""}">${p.map(v=>O(v,l.cls,m.get(v.id)??"",!0)).join("")}</div>
      </section>`}).join("")}

    <div class="again">
      <p>Os pre\xE7os e o potencial s\xE3o hip\xF3teses para voc\xEA testar com seu p\xFAblico, n\xE3o previs\xF5es de vendas.</p>
      <button class="btn ghost" id="new">Gerar novas ideias</button>
    </div>
  </article>`,r.querySelector("#save")?.addEventListener("click",async l=>{let p=l.currentTarget;p.disabled=!0,p.textContent="Salvando...";let v=a.ideas[0]?.name?`Ideias de ${new Date().toLocaleDateString("pt-BR")}`:"Minhas ideias",u=await h(b,"salvar",{titulo:v,resultado:a});if(u.ok){n.titulo=void 0,c({name:"result",salvoId:String(u.body.id)});return}_(u)||(p.disabled=!1,p.textContent="Salvar estas ideias",he(u.body.message??"N\xE3o foi poss\xEDvel salvar."))}),r.querySelector("#saved").addEventListener("click",()=>c({name:"salvas"})),r.querySelector("#new").addEventListener("click",()=>{n.answers={},c({name:"q",i:0})}),r.querySelectorAll(".copy").forEach(l=>l.addEventListener("click",async()=>{let p=t.get(l.dataset.id);if(!p)return;let v=await U(V(p));l.textContent=v?"Copiada!":"N\xE3o foi poss\xEDvel copiar",l.classList.toggle("done",v),setTimeout(()=>{l.textContent="Copiar ideia",l.classList.remove("done")},2e3)}))}function he(e){let a=r.querySelector(".savebar");a&&a.insertAdjacentHTML("afterend",`<p class="err" role="alert">${s(e)}</p>`)}async function te(){I(),r.innerHTML='<section class="saved"><h1>Minhas <em>ideias</em></h1><p class="meta">Carregando...</p></section>';let e=await h(b,"listar",{limite:200});if(!e.ok){if(_(e))return;r.querySelector(".meta").textContent=e.body.message??"N\xE3o foi poss\xEDvel carregar.";return}let a=e.body.itens;r.innerHTML=`<section class="saved">
    <h1>Minhas <em>ideias</em></h1>
    <p class="meta">Cada gera\xE7\xE3o fica salva aqui automaticamente.</p>
    ${a.length?`<ul class="savelist">${a.map(t=>Z(t)+`<button class="link small del" data-id="${s(t.id)}">Apagar</button></li>`).join("")}</ul>`:'<p class="meta">Voc\xEA ainda n\xE3o gerou nenhuma ideia. Toque em \u201CGerar novas ideias\u201D para come\xE7ar.</p>'}
    <div class="actions"><button class="btn" id="new">Gerar novas ideias</button><button class="btn ghost" id="back">Voltar ao in\xEDcio</button></div>
  </section>`,r.querySelectorAll(".open").forEach(t=>t.addEventListener("click",()=>{t.disabled=!0,ee(t.dataset.id)})),r.querySelectorAll(".del").forEach(t=>t.addEventListener("click",async()=>{if(t.dataset.confirm!=="1"){t.dataset.confirm="1",t.textContent="Toque de novo para apagar";return}let i=await h(b,"apagar",{id:t.dataset.id});i.ok?te():_(i)})),r.querySelector("#new").addEventListener("click",()=>{n.answers={},c({name:"q",i:0})}),r.querySelector("#back").addEventListener("click",()=>c({name:"inicio"}))}function be(e){let a={limite:"Limite de hoje atingido",sem_acesso:"Acesso n\xE3o encontrado",network:"Sem conex\xE3o"};r.innerHTML=`<section class="problem" role="alert"><h1>${s(a[e.code]??"Algo deu errado")}</h1><p>${s(e.message)}</p>
    <div class="actions">${e.code==="sem_acesso"?'<a class="btn" href="/monetiza/">Conhecer o Monetiza</a>':e.code==="limite"?'<button class="btn" id="saved">Ver ideias salvas</button>':'<button class="btn" id="retry">Tentar de novo</button>'}
    <button class="btn ghost" id="home">Voltar ao in\xEDcio</button></div></section>${x}`,r.querySelector("#retry")?.addEventListener("click",ae),r.querySelector("#saved")?.addEventListener("click",()=>c({name:"salvas"})),r.querySelector("#home").addEventListener("click",()=>e.code==="sem_acesso"?(q(),c({name:"login"})):c({name:"inicio"}))}function fe(){r.innerHTML=`<section class="problem" role="alert"><h1>Conta aberta em outro aparelho</h1>
    <p>Por seguran\xE7a, o Monetiza fica conectado em um aparelho por vez. Se foi voc\xEA, pode voltar a usar aqui: o outro aparelho ser\xE1 desconectado.</p>
    <div class="actions"><button class="btn" id="here">Usar neste aparelho</button><button class="btn ghost" id="out">Sair</button></div></section>${x}`,r.querySelector("#here").addEventListener("click",C),r.querySelector("#out").addEventListener("click",()=>{q(),c({name:"login"})})}async function C(){r.innerHTML='<section class="hero narrow"><p class="meta">Entrando...</p></section>';let e=await h(b,"entrar",{descricao:F()});if(!e.ok){_(e)||c({name:"erro",code:e.body.code??"internal",message:e.body.message??""});return}n.email=String(e.body.email),n.expira=String(e.body.expira_em),n.nome=e.body.nome??null,n.hoje=Number(e.body.geracoes_hoje??0),n.limite=Number(e.body.limite??3),c(n.view.name==="login"||n.view.name==="enviado"||n.view.name==="fora"||n.view.name==="erro"?{name:"inicio"}:n.view)}function se(){let e=n.view;if(!L()&&e.name!=="enviado")return e.name!=="login"&&(n.view={name:"login"}),X(n.view.msg);if(e.name==="login")return C();if(e.name==="enviado")return me(e.email);if(e.name==="inicio"){K(),h(b,"status").then(a=>{if(a.ok&&n.view.name==="inicio"){let t=Number(a.body.geracoes_hoje??0);t!==n.hoje&&(n.hoje=t,T(),K())}});return}if(e.name==="q")return z(r,e.i,n.answers,{save:T,lastLabel:"Gerar minhas ideias",back:()=>c(e.i===0?{name:"inicio"}:{name:"q",i:e.i-1}),next:()=>e.i<5?c({name:"q",i:e.i+1}):ae()});if(e.name==="wait")return P?D(r,()=>n.view.name==="wait"):c({name:"erro",code:"interrompido",message:"A p\xE1gina foi recarregada antes de o resultado chegar. Suas respostas continuam salvas."});if(e.name==="result"&&n.report)return ve(e.salvoId);if(e.name==="salvas")return void te();if(e.name==="erro")return be(e);if(e.name==="fora")return fe();c({name:"inicio"})}var ye=location.hash.includes("access_token"),W=Q();document.getElementById("brand").addEventListener("click",e=>{e.preventDefault(),L()&&c({name:"inicio"})});W?c({name:"login",msg:W}):L()&&(ye||!n.email)?C():se();
