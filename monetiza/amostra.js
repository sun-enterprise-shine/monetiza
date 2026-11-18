var N=["Neg\xF3cios, vendas e marketing","Finan\xE7as e organiza\xE7\xE3o","Educa\xE7\xE3o e desenvolvimento","Beleza, moda e estilo","Culin\xE1ria e alimenta\xE7\xE3o","Casa, fam\xEDlia e rotina","Tecnologia e ferramentas digitais","Artes, criatividade e hobbies","Outra \xE1rea"],U=["Ainda n\xE3o sei","Mulheres","M\xE3es e fam\xEDlias","Empreendedores e aut\xF4nomos","Profissionais de uma \xE1rea","Estudantes e iniciantes","Pessoas com um hobby ou interesse espec\xEDfico","Outro p\xFAblico"],B=["Materiais prontos (PDFs, planilhas, templates)","Aulas gravadas ou minicursos","Aulas ao vivo e encontros em grupo","Atendimento individual e personalizado","N\xE3o sei, quero que a IA recomende"],x=[{key:"q1",title:"O que voc\xEA sabe fazer bem?",help:"Pode ser do trabalho, de um hobby ou da vida pessoal. Respostas curtas valem.",ex:"Exemplo: organizo as finan\xE7as da casa, fa\xE7o bolos decorados, ensino ingl\xEAs para crian\xE7as."},{key:"q2",title:"Sobre o que as pessoas costumam pedir sua ajuda?",help:"Pense nas perguntas que amigas, clientes ou familiares fazem para voc\xEA.",ex:"Exemplo: me pedem dicas para montar a rotina dos filhos e organizar a casa."},{key:"q3",title:"Qual dessas \xE1reas mais combina com voc\xEA?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:N,other:{when:"Outra \xE1rea",key:"q3_other",label:"Qual \xE1rea? (opcional)"}},{key:"q4",title:"Quem voc\xEA gostaria de ajudar?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:U,exclusive:"Ainda n\xE3o sei",other:{when:"Outro p\xFAblico",key:"q4_other",label:"Qual p\xFAblico? (opcional)"}},{key:"q5",title:"Voc\xEA j\xE1 ensinou ou ajudou algu\xE9m a conseguir um resultado?",help:"Conte em poucas palavras. Se ainda n\xE3o, tudo bem: escreva \u201Cainda n\xE3o\u201D.",ex:"Exemplo: ajudei uma vizinha a organizar as contas e sair do cheque especial."},{key:"q6",title:"Como voc\xEA prefere entregar seu conhecimento?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:B,exclusive:"N\xE3o sei, quero que a IA recomende"}],Q=3,v=e=>Array.isArray(e)?e:typeof e=="string"&&e?[e]:[],E=(e,a)=>a==="q3"||a==="q4"||a==="q6"?v(e[a]).length>0:!!e[a]?.trim(),z=e=>{let a=x.findIndex(s=>!E(e,s.key));return a<0?5:a},r=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),y=e=>"R$\xA0"+e.toLocaleString("pt-BR");function D(e){let a=e.price_min===e.price_max?y(e.price_min):`${y(e.price_min)} a ${y(e.price_max)}`;return e.price_period==="mes"?e.price_annual?`${a} por m\xEAs (plano anual)`:`${a} por m\xEAs`:e.tier==="abre_carteira"?a:`${a} ou em at\xE9 12x`}var S=[{tier:"abre_carteira",cls:"t1",name:"Abre Carteira",role:"Produtos de entrada: uma pequena vit\xF3ria r\xE1pida, pre\xE7o acess\xEDvel."},{tier:"base",cls:"t2",name:"Base",role:"O n\xFAcleo da sua oferta: resolve um problema maior, com mais profundidade."},{tier:"personalizacao",cls:"t3",name:"Personaliza\xE7\xE3o",role:"Acompanhamento pr\xF3ximo e sob medida, com valor mais alto."}];function k(e,a=""){return`<div class="stairs ${a}" aria-hidden="true">${e.map(([s,t],o)=>`<div class="step t${o+1}"><b>${r(s)}</b><small>${r(t)}</small></div>`).join("")}</div><div class="stairs-base"></div>`}function L(e,a,s="",t=!1){return`<article class="idea ${a}">
    <div class="head"><h3>${r(e.name)}</h3><span class="price">${r(D(e))}</span></div>
    <p class="sub">${r(e.subtitle)}</p>
    ${s?`<span class="pick">${r(s)}</span>`:""}
    <dl>
      <div><dt>Para quem</dt><dd>${r(e.audience)}</dd></div>
      <div><dt>Problema que resolve</dt><dd>${r(e.problem)}</dd></div>
      <div><dt>Promessa</dt><dd>${r(e.promise)}</dd></div>
      <div><dt>Formato</dt><dd>${r(e.format)}</dd></div>
      <div><dt>Por que esta ideia</dt><dd>${r(e.rationale)}</dd></div>
    </dl>
    ${t?`<button class="copy" type="button" data-id="${r(e.id)}">Copiar ideia</button>`:""}
  </article>`}function P(e,a,s,t){let o=x[a],b=o.options?`<fieldset class="opts"><legend class="sr">${r(o.title)}</legend>
        ${o.options.map(i=>`<label class="opt"><input type="checkbox" name="opt" value="${r(i)}" ${v(s[o.key]).includes(i)?"checked":""}><span>${r(i)}</span></label>`).join("")}
      </fieldset>
      ${o.other?`<div class="other" id="other" ${v(s[o.key]).includes(o.other.when)?"":"hidden"}><label class="count" for="otherIn">${r(o.other.label)}</label>
        <input type="text" id="otherIn" maxlength="100" value="${r(s[o.other.key])}"></div>`:""}`:`<div class="field"><textarea id="txt" maxlength="600" aria-label="${r(o.title)}" aria-describedby="help ex">${r(s[o.key])}</textarea>
        <div class="counter"><span id="cnt">${(s[o.key]??"").length}</span>/600</div>
        <button class="link quick" id="dunno" type="button">N\xE3o sei responder</button></div>`;e.innerHTML=`
  <section class="q">
    <div class="progress" aria-hidden="true">${x.map((i,p)=>`<i class="${p<=a?"on":""}"></i>`).join("")}</div>
    <p class="count">Pergunta ${a+1} de 6</p>
    <h1>${r(o.title)}</h1>
    <p class="help" id="help">${r(o.help)}</p>
    ${o.ex?`<p class="ex" id="ex">${r(o.ex)}</p>`:""}
    ${b}
    <p class="err" id="err" role="alert" hidden></p>
    <div class="nav">
      <button class="btn ghost" id="back" type="button">Voltar</button>
      <button class="btn" id="next" type="button">${a===5?r(t.lastLabel):"Continuar"}</button>
    </div>
  </section>`;let m=e.querySelector("#txt");m?.addEventListener("input",()=>{s[o.key]=m.value,e.querySelector("#cnt").textContent=String(m.value.length),t.save()});let d=[...e.querySelectorAll('input[name="opt"]')],h=()=>{let i=d.filter(u=>u.checked).map(u=>u.value);s[o.key]=i,t.save(),d.forEach(u=>{u.disabled=!u.checked&&i.length>=Q,u.closest(".opt").classList.toggle("off",u.disabled)});let p=e.querySelector("#other");p&&o.other&&(p.hidden=!i.includes(o.other.when))};d.forEach(i=>i.addEventListener("change",()=>{i.checked&&o.exclusive&&(i.value===o.exclusive?d.forEach(p=>{p!==i&&(p.checked=!1)}):d.forEach(p=>{p.value===o.exclusive&&(p.checked=!1)})),h()})),d.length&&h();let g=e.querySelector("#otherIn");g?.addEventListener("input",()=>{s[o.other.key]=g.value,t.save()}),e.querySelector("#back").addEventListener("click",t.back);let _=()=>{if(!E(s,o.key)){let i=e.querySelector("#err");i.textContent=o.options?"Escolha pelo menos uma op\xE7\xE3o para continuar.":"Escreva uma resposta, mesmo curta, ou toque em \u201CN\xE3o sei responder\u201D.",i.hidden=!1;return}t.next()};e.querySelector("#dunno")?.addEventListener("click",()=>{m.value="N\xE3o sei",s[o.key]="N\xE3o sei",t.save(),_()}),e.querySelector("#next").addEventListener("click",_),m?.focus({preventScroll:!0})}function A(e,a,s=!1){let t=s?[0,1,2,3]:[0,4,9,15];e.innerHTML=`
  <section class="wait" aria-live="polite">
    <h1>Criando suas <em>ideias</em></h1>
    <p class="sub" id="sub">${s?"S\xF3 um instante.":"Isso leva de 10 a 40 segundos. N\xE3o feche esta p\xE1gina."}</p>
    ${k([["Abre Carteira",""],["Base",""],["Personaliza\xE7\xE3o",""]])}
    <ul>
      <li data-at="${t[0]}">Lendo suas respostas</li>
      <li data-at="${t[1]}">Criando as ideias</li>
      <li data-at="${t[2]}">Montando sua esteira</li>
      <li data-at="${t[3]}">Conferindo a qualidade</li>
    </ul>
  </section>`;let o=Date.now(),b=[...e.querySelectorAll(".stairs .step")],m=()=>{if(!a())return;let d=(Date.now()-o)/1e3;e.querySelectorAll(".wait li").forEach(h=>h.classList.toggle("done",d>=Number(h.dataset.at)+(s?.5:3))),b.forEach((h,g)=>h.classList.toggle("lit",d>=t[g+1])),d>45&&(e.querySelector("#sub").textContent="Est\xE1 levando um pouco mais que o normal. Continue nesta p\xE1gina."),setTimeout(m,s?300:1e3)};m()}function T(e){let a={q1:e.q1.trim(),q2:e.q2.trim(),q3:v(e.q3),q4:v(e.q4),q5:e.q5.trim(),q6:v(e.q6)};return v(e.q3).includes("Outra \xE1rea")&&e.q3_other?.trim()&&(a.q3_other=e.q3_other.trim()),v(e.q4).includes("Outro p\xFAblico")&&e.q4_other?.trim()&&(a.q4_other=e.q4_other.trim()),a}var M='<p class="support">Suporte: <a href="https://wa.me/5585999107083" target="_blank" rel="noopener">WhatsApp (85) 9 9910-7083</a> \xB7 <a href="mailto:contato@carolbergantini.com">contato@carolbergantini.com</a></p>';var K=(e="logo",a="mzlg")=>`<svg class="${e}" viewBox="0 0 64 64" aria-hidden="true"><defs><mask id="${a}"><rect width="64" height="64" fill="#fff"/><path d="M26 38 A11 11 0 1 1 38 38 L37 42 H27 Z" fill="#000"/><path d="M28 47 H36" stroke="#000" stroke-width="3" stroke-linecap="round"/></mask></defs><circle cx="32" cy="32" r="28" fill="#9A6B12" mask="url(#${a})"/></svg>`,F=0,w=(e="logo")=>K(e,`mzl${++F}`),$=(e,a,s,t,o,b)=>`<div class="mini ${e}"><div class="h"><b>${a} <em>${s}</em></b><span class="p">${t}</span></div><small>${o}</small><span class="t">${b}</span></div>`;function C(){return`<div class="mz-video" role="img" aria-label="Anima\xE7\xE3o: a pessoa responde o que sabe fazer, o Monetiza cria as ideias e mostra 3 produtos da esteira com pre\xE7os">
      <div class="mz-top"><span>Veja como funciona</span><span class="dots"><i></i><i></i><i></i></span></div>
      <div class="mz-scene mz-s1 mz-q" aria-hidden="true">
        <small class="count">Pergunta 1 de 6</small>
        <b>O que voc\xEA sabe fazer <em>bem</em>?</b>
        <div class="mz-field"><span class="mz-type">Organizo finan\xE7as de pequenos neg\xF3cios</span></div>
        <span class="mz-fake">Continuar</span>
      </div>
      <div class="mz-scene mz-s2" aria-hidden="true">${w()}<b>Criando suas <em>ideias</em></b><div class="mz-bars"><i></i><i></i><i></i></div></div>
      <div class="mz-scene mz-s3" aria-hidden="true">
        <small class="count">Suas 10 ideias \xB7 esteira recomendada</small>
        ${$("t1","Contas Separadas","na Pr\xE1tica","R$ 27 a 47","Planilha para empreendedoras que querem separar as contas sem entender de finan\xE7as.","Abre Carteira")}
        ${$("t2","Caixa no Azul","em 4 Semanas","R$ 397 a 997","Programa em grupo para organizar o caixa em 15 minutos por semana.","Base")}
        ${$("t3","Mentoria","Caixa Leve","R$ 1.500 a 3.000","Acompanhamento individual por 3 meses, com encontros quinzenais.","Personaliza\xE7\xE3o")}
      </div>
    </div>`}function O(e){!e||matchMedia("(prefers-reduced-motion: reduce)").matches||!matchMedia("(hover: hover)").matches||(e.style.transition="transform .25s ease",e.addEventListener("pointermove",a=>{let s=e.getBoundingClientRect(),t=(a.clientX-s.left)/s.width-.5,o=(a.clientY-s.top)/s.height-.5;e.style.transform=`perspective(900px) rotateY(${t*8}deg) rotateX(${-o*8}deg) translateY(-4px)`}),e.addEventListener("pointerleave",()=>{e.style.transform=""}))}var G="https://dyepykxuygmmilchyybr.supabase.co/functions/v1/monetiza-app",f="https://pay.kiwify.com.br/ccpkhAK",R="monetiza-amostra-v1",l=(()=>{try{let e=JSON.parse(sessionStorage.getItem(R)??"");if(e?.view)return e}catch{}return{view:{name:"home"},answers:{}}})(),I=()=>{try{sessionStorage.setItem(R,JSON.stringify(l))}catch{}},n=document.getElementById("app");function c(e){l.view=e,I(),H(),window.scrollTo(0,0),n.focus({preventScroll:!0})}var j=(e="Quero o Monetiza completo por R$ 37")=>`<a class="btn block buy" href="${r(f)}">${r(e)}</a>`;function Y(){n.innerHTML=`
  <div class="lp">
  <section class="lp-hero"><div class="lp-in">
    <div>
      <span class="pill-tag">Para mentoras, terapeutas e prestadoras de servi\xE7o</span>
      <h1>Transforme o que voc\xEA sabe em <em>produtos</em> que vendem</h1>
      <p class="lead">Responda 6 perguntas e receba, em minutos, 10 ideias de infoprodutos com pre\xE7o, promessa e p\xFAblico, organizadas em uma esteira: do produto de entrada \xE0 mentoria.</p>
      <div class="lp-ctas"><a class="btn buy" href="${r(f)}">Quero o Monetiza por R$ 37</a><button class="btn soft" id="try">Testar gr\xE1tis</button></div>
      <p class="lp-meta"><span>Pagamento \xFAnico</span><span>Acesso por 1 ano</span><span>Garantia de 7 dias</span></p>
    </div>
    ${C()}
  </div></section>

  <section class="lp-sec alt"><div class="lp-in">
    <div class="lp-center reveal"><span class="kick">Voc\xEA se reconhece?</span><h2>Voc\xEA sabe muito. S\xF3 n\xE3o sabe <em>o que vender</em>.</h2></div>
    <div class="grid3">
      <div class="card reveal"><span class="num">01</span><b>Muitas ideias, nenhum produto</b><p>Voc\xEA j\xE1 pensou em curso, e-book, mentoria\u2026 e n\xE3o sai do lugar.</p></div>
      <div class="card reveal"><span class="num">02</span><b>N\xE3o sabe quanto cobrar</b><p>Medo de cobrar caro demais ou de desvalorizar o seu trabalho.</p></div>
      <div class="card reveal"><span class="num">03</span><b>S\xF3 vende o seu tempo</b><p>Atende uma pessoa por vez e a renda para quando voc\xEA para.</p></div>
    </div>
  </div></section>

  <section class="lp-sec"><div class="lp-in split">
    <div class="reveal"><span class="kick">Como funciona</span><h2>Do conhecimento \xE0 <em>esteira de produtos</em> em 3 passos</h2></div>
    <ol class="steps">
      <li class="reveal"><span class="n" style="background:var(--jade)">1</span><div><b>Responda 6 perguntas</b><p>O que voc\xEA sabe fazer, quem voc\xEA quer ajudar e como prefere ensinar. Leva uns 3 minutos.</p></div></li>
      <li class="reveal"><span class="n" style="background:var(--plum)">2</span><div><b>Receba 10 ideias</b><p>5 de entrada, 3 de base e 2 de valor alto, cada uma com p\xFAblico, promessa, formato e faixa de pre\xE7o.</p></div></li>
      <li class="reveal"><span class="n" style="background:var(--gold)">3</span><div><b>Comece pelo primeiro produto</b><p>A esteira recomendada e o passo a passo do primeiro produto, com a vers\xE3o mais simples e como validar.</p></div></li>
    </ol>
  </div></section>

  <section class="lp-sec alt"><div class="lp-in">
    <div class="lp-center reveal"><span class="kick">O que voc\xEA recebe</span><h2>Tudo o que voc\xEA precisa para <em>come\xE7ar</em></h2></div>
    <div class="grid3">
      <div class="card reveal"><b>10 ideias de infoprodutos</b><p>Nome, p\xFAblico, problema, promessa, formato e faixa de pre\xE7o de cada uma.</p></div>
      <div class="card reveal"><b>Sua esteira de vendas</b><p>Tr\xEAs produtos conectados: quem compra o primeiro est\xE1 pronta para o pr\xF3ximo.</p></div>
      <div class="card reveal"><b>O primeiro produto detalhado</b><p>O que entregar, a vers\xE3o mais simples para come\xE7ar e como testar antes de produzir.</p></div>
      <div class="card reveal"><b>Textos com as suas palavras</b><p>A intelig\xEAncia artificial ajusta as ideias ao jeito como voc\xEA fala do seu trabalho.</p></div>
      <div class="card reveal"><b>Ideias salvas na sua conta</b><p>Cada resultado fica guardado. Volte quando quiser, no celular ou no computador.</p></div>
      <div class="card reveal"><b>3 gera\xE7\xF5es por dia, por 1 ano</b><p>Teste \xE1reas, p\xFAblicos e formatos diferentes sempre que precisar.</p></div>
    </div>
  </div></section>

  <section class="lp-sec" style="padding-block:40px"><div class="lp-in">
    <div class="band reveal"><div><b>Quer ver antes de comprar? <em>Teste gr\xE1tis.</em></b><p>Responda as 6 perguntas e veja 3 das suas ideias, uma de cada degrau da esteira. Sem cadastro.</p></div>
    <button class="btn" id="try2">Fazer o teste gr\xE1tis</button></div>
  </div></section>

  <section class="lp-sec alt"><div class="lp-in">
    <div class="lp-center reveal"><span class="kick">Para quem \xE9</span><h2>Feito para quem tem um conhecimento <em>valioso</em></h2><p class="lp-sub">Se voc\xEA j\xE1 ajuda pessoas com o que sabe, o Monetiza mostra como transformar isso em produtos.</p></div>
    <div class="grid3">
      <div class="persona t1 reveal"><b>Mentoras e coaches</b><p>que querem transformar o m\xE9todo em um programa que vende al\xE9m das sess\xF5es.</p></div>
      <div class="persona t2 reveal"><b>Terapeutas</b><p>que querem levar o cuidado a mais pessoas com cursos, materiais e grupos.</p></div>
      <div class="persona t3 reveal"><b>Prestadoras de servi\xE7o</b><p>que querem um produto digital ao lado do servi\xE7o, para vender sem depender da agenda.</p></div>
      <div class="persona t1 reveal"><b>Profissionais de sa\xFAde e bem-estar</b><p>que querem compartilhar o que sabem de forma respons\xE1vel e organizada.</p></div>
      <div class="persona t2 reveal"><b>Quem ensina o que ama</b><p>como culin\xE1ria, artes, moda ou organiza\xE7\xE3o, e quer transformar o hobby em renda.</p></div>
      <div class="persona t3 reveal"><b>Quem est\xE1 come\xE7ando</b><p>e quer um caminho claro para o primeiro produto, com pre\xE7o e pr\xF3ximo passo.</p></div>
    </div>
  </div></section>

  <section class="lp-sec" id="comprar"><div class="lp-in">
    <div class="offer reveal">
      <p class="tag">Monetiza AI completo</p>
      <p class="value">R$ 37</p>
      <p class="cond">pagamento \xFAnico \xB7 acesso por 1 ano</p>
      <ul class="checks">
        <li>10 ideias de infoprodutos por gera\xE7\xE3o</li>
        <li>Esteira de vendas e primeiro produto detalhado</li>
        <li>Textos ajustados \xE0s suas palavras</li>
        <li>At\xE9 3 gera\xE7\xF5es por dia e ideias salvas</li>
      </ul>
      <a class="btn buy" href="${r(f)}">Quero o Monetiza agora</a>
      <p class="guarantee"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Garantia de 7 dias: n\xE3o gostou, devolvemos seu dinheiro.</p>
      <p class="pay">Pagamento seguro pela Kiwify \xB7 Pix ou cart\xE3o</p>
    </div>
  </div></section>

  <section class="lp-sec alt"><div class="lp-in faq">
    <div class="reveal"><span class="kick">Perguntas frequentes</span><h2>Ficou alguma <em>d\xFAvida</em>?</h2></div>
    <details open><summary>Como eu acesso depois de comprar?</summary><p>Entre em carolbergantini.com/appmonetiza com o e-mail que voc\xEA usou na compra. Voc\xEA recebe um link de entrada no e-mail, sem senha.</p></details>
    <details><summary>Posso usar no celular e no computador?</summary><p>Sim, um aparelho por vez. Ao entrar em um aparelho novo, o anterior \xE9 desconectado.</p></details>
    <details><summary>As ideias garantem vendas?</summary><p>N\xE3o. Pre\xE7os e potencial s\xE3o hip\xF3teses para voc\xEA testar com o seu p\xFAblico. O Monetiza mostra o caminho e o jeito mais simples de validar.</p></details>
    <details><summary>Preciso entender de tecnologia?</summary><p>N\xE3o. Voc\xEA s\xF3 responde 6 perguntas com as suas palavras.</p></details>
    <details><summary>E se eu n\xE3o gostar?</summary><p>Voc\xEA tem 7 dias de garantia. Pe\xE7a o reembolso pela Kiwify ou fale com o suporte.</p></details>
  </div></section>

  <section class="lp-sec"><div class="lp-in lp-final reveal">
    ${w()}
    <h2>O seu pr\xF3ximo produto j\xE1 est\xE1 no que voc\xEA <em>sabe</em></h2>
    <a class="btn buy" href="${r(f)}">Quero o Monetiza por R$ 37</a>
    ${M}
  </div></section>
  </div>`;for(let e of["#try","#try2"])n.querySelector(e).addEventListener("click",()=>c({name:"q",i:z(l.answers)}));J(),O(n.querySelector(".mz-video"))}function J(){let e=[...n.querySelectorAll(".reveal")];if(!("IntersectionObserver"in window)||matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach(s=>s.classList.add("on"));return}let a=new IntersectionObserver(s=>s.forEach(t=>{t.isIntersecting&&(t.target.classList.add("on"),a.unobserve(t.target))}),{rootMargin:"0px 0px -8% 0px"});e.forEach((s,t)=>{s.style.transitionDelay=`${t%3*80}ms`,a.observe(s)})}function X(){let e=l.report,a=S.map((s,t)=>e.ideas[t]?`<section><div class="tier-h"><h2>${s.name}</h2><span class="n">1 de ${[5,3,2][t]}</span></div>
    <p class="intro">${s.role}</p><div class="ideas">${L(e.ideas[t],s.cls)}</div></section>`:"").join("");n.innerHTML=`
  <article class="res">
    <h1>Sua amostra: 3 <em>ideias</em></h1>
    <p class="summary">${r(e.profile.summary)}</p>
    ${a}
    <section class="locked" aria-label="Conte\xFAdo da vers\xE3o completa">
      <div class="blur" aria-hidden="true">${k([["Abre Carteira","\u2022\u2022\u2022\u2022\u2022"],["Base","\u2022\u2022\u2022\u2022\u2022"],["Personaliza\xE7\xE3o","\u2022\u2022\u2022\u2022\u2022"]])}</div>
      <h2>Desbloqueie a vers\xE3o <em>completa</em></h2>
      <ul class="checks">
        <li>Mais 7 ideias (10 no total)</li>
        <li>Sua esteira recomendada, com as 3 ideias conectadas</li>
        <li>O primeiro produto detalhado e como validar</li>
        <li>Textos ajustados \xE0s suas palavras e ideias salvas na sua conta</li>
      </ul>
      ${j("Desbloquear as 10 ideias e a sua esteira por R$ 37")}
      <p class="meta">Pagamento \xFAnico, acesso por 1 ano, garantia de 7 dias.</p>
    </section>
    <div class="again"><p>Os pre\xE7os e o potencial s\xE3o hip\xF3teses para voc\xEA testar com seu p\xFAblico, n\xE3o previs\xF5es de vendas.</p>
      <button class="btn ghost" id="new">Fazer outra amostra</button></div>
  </article>`,n.querySelector("#new").addEventListener("click",()=>{l={view:{name:"home"},answers:{}},c({name:"q",i:0})})}function W(e){n.innerHTML=`<section class="problem" role="alert"><h1>${e.code==="limite_amostra"?"Limite de hoje atingido":"N\xE3o deu certo"}</h1>
    <p>${r(e.message)}</p>
    <div class="actions">${e.code==="limite_amostra"?j():'<button class="btn" id="retry">Tentar de novo</button>'}
    <button class="btn ghost" id="home">Voltar ao in\xEDcio</button></div></section>`,n.querySelector("#retry")?.addEventListener("click",V),n.querySelector("#home").addEventListener("click",()=>c({name:"home"}))}var q=!1;async function V(){q=!0,c({name:"wait"});let e=Date.now(),a="internal",s="Algo deu errado. Tente novamente em alguns minutos.";try{let t=await fetch(G,{method:"POST",body:JSON.stringify({acao:"amostra",answers:T(l.answers)}),headers:{"content-type":"application/json","x-request-id":crypto.randomUUID()}}),o=await t.json().catch(()=>null);if(await new Promise(b=>setTimeout(b,Math.max(0,2500-(Date.now()-e)))),t.ok&&o?.status==="ok"){l.report=o.report,q=!1,c({name:"result"});return}o?.code&&(a=o.code,s=o.message??s)}catch{a="network",s="N\xE3o conseguimos falar com o servidor. Confira sua internet e tente de novo."}q=!1,c({name:"error",code:a,message:s})}function H(){let e=l.view;e.name==="home"?Y():e.name==="q"?P(n,e.i,l.answers,{save:I,lastLabel:"Ver minha amostra",back:()=>c(e.i===0?{name:"home"}:{name:"q",i:e.i-1}),next:()=>e.i<5?c({name:"q",i:e.i+1}):V()}):e.name==="wait"?q?A(n,()=>l.view.name==="wait",!0):c({name:"q",i:5}):e.name==="error"?W(e):e.name==="result"&&l.report?X():c({name:"home"})}document.getElementById("brand").addEventListener("click",e=>{e.preventDefault(),c({name:"home"})});H();
