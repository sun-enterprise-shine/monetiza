var M=["Neg\xF3cios, vendas e marketing","Finan\xE7as e organiza\xE7\xE3o","Educa\xE7\xE3o e desenvolvimento","Beleza, moda e estilo","Culin\xE1ria e alimenta\xE7\xE3o","Casa, fam\xEDlia e rotina","Tecnologia e ferramentas digitais","Artes, criatividade e hobbies","Outra \xE1rea"],O=["Ainda n\xE3o sei","Mulheres","M\xE3es e fam\xEDlias","Empreendedores e aut\xF4nomos","Profissionais de uma \xE1rea","Estudantes e iniciantes","Pessoas com um hobby ou interesse espec\xEDfico","Outro p\xFAblico"],H=["Materiais prontos (PDFs, planilhas, templates)","Aulas gravadas ou minicursos","Aulas ao vivo e encontros em grupo","Atendimento individual e personalizado","N\xE3o sei, quero que a IA recomende"],_=[{key:"q1",title:"O que voc\xEA sabe fazer bem?",help:"Pode ser do trabalho, de um hobby ou da vida pessoal. Respostas curtas valem.",ex:"Exemplo: organizo as finan\xE7as da casa, fa\xE7o bolos decorados, ensino ingl\xEAs para crian\xE7as."},{key:"q2",title:"Sobre o que as pessoas costumam pedir sua ajuda?",help:"Pense nas perguntas que amigas, clientes ou familiares fazem para voc\xEA.",ex:"Exemplo: me pedem dicas para montar a rotina dos filhos e organizar a casa."},{key:"q3",title:"Qual dessas \xE1reas mais combina com voc\xEA?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:M,other:{when:"Outra \xE1rea",key:"q3_other",label:"Qual \xE1rea? (opcional)"}},{key:"q4",title:"Quem voc\xEA gostaria de ajudar?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:O,exclusive:"Ainda n\xE3o sei",other:{when:"Outro p\xFAblico",key:"q4_other",label:"Qual p\xFAblico? (opcional)"}},{key:"q5",title:"Voc\xEA j\xE1 ensinou ou ajudou algu\xE9m a conseguir um resultado?",help:"Conte em poucas palavras. Se ainda n\xE3o, tudo bem: escreva \u201Cainda n\xE3o\u201D.",ex:"Exemplo: ajudei uma vizinha a organizar as contas e sair do cheque especial."},{key:"q6",title:"Como voc\xEA prefere entregar seu conhecimento?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:H,exclusive:"N\xE3o sei, quero que a IA recomende"}],N=3,h=e=>Array.isArray(e)?e:typeof e=="string"&&e?[e]:[],w=(e,s)=>s==="q3"||s==="q4"||s==="q6"?h(e[s]).length>0:!!e[s]?.trim(),k=e=>{let s=_.findIndex(t=>!w(e,t.key));return s<0?5:s},o=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),x=e=>"R$\xA0"+e.toLocaleString("pt-BR");function j(e){let s=e.price_min===e.price_max?x(e.price_min):`${x(e.price_min)} a ${x(e.price_max)}`;return e.price_period==="mes"?e.price_annual?`${s} por m\xEAs (plano anual)`:`${s} por m\xEAs`:e.tier==="abre_carteira"?s:`${s} ou em at\xE9 12x`}var E=[{tier:"abre_carteira",cls:"t1",name:"Abre Carteira",role:"Produtos de entrada: uma pequena vit\xF3ria r\xE1pida, pre\xE7o acess\xEDvel."},{tier:"base",cls:"t2",name:"Base",role:"O n\xFAcleo da sua oferta: resolve um problema maior, com mais profundidade."},{tier:"personalizacao",cls:"t3",name:"Personaliza\xE7\xE3o",role:"Acompanhamento pr\xF3ximo e sob medida, com valor mais alto."}];function q(e,s=""){return`<div class="stairs ${s}" aria-hidden="true">${e.map(([t,r],a)=>`<div class="step t${a+1}"><b>${o(t)}</b><small>${o(r)}</small></div>`).join("")}</div><div class="stairs-base"></div>`}function S(e,s,t=""){return`<article class="idea ${s}">
    <div class="head"><h3>${o(e.name)}</h3><span class="price">${o(j(e))}</span></div>
    <p class="sub">${o(e.subtitle)}</p>
    ${t?`<span class="pick">${o(t)}</span>`:""}
    <dl>
      <div><dt>Para quem</dt><dd>${o(e.audience)}</dd></div>
      <div><dt>Problema que resolve</dt><dd>${o(e.problem)}</dd></div>
      <div><dt>Promessa</dt><dd>${o(e.promise)}</dd></div>
      <div><dt>Formato</dt><dd>${o(e.format)}</dd></div>
      <div><dt>Por que esta ideia</dt><dd>${o(e.rationale)}</dd></div>
    </dl>
  </article>`}function L(e,s,t,r){let a=_[s],b=a.options?`<fieldset class="opts"><legend class="sr">${o(a.title)}</legend>
        ${a.options.map(i=>`<label class="opt"><input type="checkbox" name="opt" value="${o(i)}" ${h(t[a.key]).includes(i)?"checked":""}><span>${o(i)}</span></label>`).join("")}
      </fieldset>
      ${a.other?`<div class="other" id="other" ${h(t[a.key]).includes(a.other.when)?"":"hidden"}><label class="count" for="otherIn">${o(a.other.label)}</label>
        <input type="text" id="otherIn" maxlength="100" value="${o(t[a.other.key])}"></div>`:""}`:`<div class="field"><textarea id="txt" maxlength="600" aria-label="${o(a.title)}" aria-describedby="help ex">${o(t[a.key])}</textarea>
        <div class="counter"><span id="cnt">${(t[a.key]??"").length}</span>/600</div>
        <button class="link quick" id="dunno" type="button">N\xE3o sei responder</button></div>`;e.innerHTML=`
  <section class="q">
    <div class="progress" aria-hidden="true">${_.map((i,d)=>`<i class="${d<=s?"on":""}"></i>`).join("")}</div>
    <p class="count">Pergunta ${s+1} de 6</p>
    <h1>${o(a.title)}</h1>
    <p class="help" id="help">${o(a.help)}</p>
    ${a.ex?`<p class="ex" id="ex">${o(a.ex)}</p>`:""}
    ${b}
    <p class="err" id="err" role="alert" hidden></p>
    <div class="nav">
      <button class="btn ghost" id="back" type="button">Voltar</button>
      <button class="btn" id="next" type="button">${s===5?o(r.lastLabel):"Continuar"}</button>
    </div>
  </section>`;let u=e.querySelector("#txt");u?.addEventListener("input",()=>{t[a.key]=u.value,e.querySelector("#cnt").textContent=String(u.value.length),r.save()});let c=[...e.querySelectorAll('input[name="opt"]')],v=()=>{let i=c.filter(p=>p.checked).map(p=>p.value);t[a.key]=i,r.save(),c.forEach(p=>{p.disabled=!p.checked&&i.length>=N,p.closest(".opt").classList.toggle("off",p.disabled)});let d=e.querySelector("#other");d&&a.other&&(d.hidden=!i.includes(a.other.when))};c.forEach(i=>i.addEventListener("change",()=>{i.checked&&a.exclusive&&(i.value===a.exclusive?c.forEach(d=>{d!==i&&(d.checked=!1)}):c.forEach(d=>{d.value===a.exclusive&&(d.checked=!1)})),v()})),c.length&&v();let g=e.querySelector("#otherIn");g?.addEventListener("input",()=>{t[a.other.key]=g.value,r.save()}),e.querySelector("#back").addEventListener("click",r.back);let $=()=>{if(!w(t,a.key)){let i=e.querySelector("#err");i.textContent=a.options?"Escolha pelo menos uma op\xE7\xE3o para continuar.":"Escreva uma resposta, mesmo curta, ou toque em \u201CN\xE3o sei responder\u201D.",i.hidden=!1;return}r.next()};e.querySelector("#dunno")?.addEventListener("click",()=>{u.value="N\xE3o sei",t[a.key]="N\xE3o sei",r.save(),$()}),e.querySelector("#next").addEventListener("click",$),u?.focus({preventScroll:!0})}function P(e,s,t=!1){let r=t?[0,1,2,3]:[0,4,9,15];e.innerHTML=`
  <section class="wait" aria-live="polite">
    <h1>Criando suas ideias</h1>
    <p class="sub" id="sub">${t?"S\xF3 um instante.":"Isso leva de 10 a 40 segundos. N\xE3o feche esta p\xE1gina."}</p>
    ${q([["Abre Carteira",""],["Base",""],["Personaliza\xE7\xE3o",""]])}
    <ul>
      <li data-at="${r[0]}">Lendo suas respostas</li>
      <li data-at="${r[1]}">Criando as ideias</li>
      <li data-at="${r[2]}">Montando sua esteira</li>
      <li data-at="${r[3]}">Conferindo a qualidade</li>
    </ul>
  </section>`;let a=Date.now(),b=[...e.querySelectorAll(".stairs .step")],u=()=>{if(!s())return;let c=(Date.now()-a)/1e3;e.querySelectorAll(".wait li").forEach(v=>v.classList.toggle("done",c>=Number(v.dataset.at)+(t?.5:3))),b.forEach((v,g)=>v.classList.toggle("lit",c>=r[g+1])),c>45&&(e.querySelector("#sub").textContent="Est\xE1 levando um pouco mais que o normal. Continue nesta p\xE1gina."),setTimeout(u,t?300:1e3)};u()}function A(e){let s={q1:e.q1.trim(),q2:e.q2.trim(),q3:h(e.q3),q4:h(e.q4),q5:e.q5.trim(),q6:h(e.q6)};return h(e.q3).includes("Outra \xE1rea")&&e.q3_other?.trim()&&(s.q3_other=e.q3_other.trim()),h(e.q4).includes("Outro p\xFAblico")&&e.q4_other?.trim()&&(s.q4_other=e.q4_other.trim()),s}var T='<p class="support">Suporte: <a href="https://wa.me/5585999107083" target="_blank" rel="noopener">WhatsApp (85) 9 9910-7083</a> \xB7 <a href="mailto:contato@carolbergantini.com">contato@carolbergantini.com</a></p>';var V="https://dyepykxuygmmilchyybr.supabase.co/functions/v1/monetiza-app",U="/monetiza/#comprar",C="monetiza-amostra-v1",n=(()=>{try{let e=JSON.parse(sessionStorage.getItem(C)??"");if(e?.view)return e}catch{}return{view:{name:"home"},answers:{}}})(),I=()=>{try{sessionStorage.setItem(C,JSON.stringify(n))}catch{}},m=document.getElementById("app");function l(e){n.view=e,I(),z(),window.scrollTo(0,0),m.focus({preventScroll:!0})}var y=(e="Quero o Monetiza completo por R$ 37")=>`<a class="btn block buy" href="${o(U)}">${o(e)}</a>`;function B(){m.innerHTML=`
  <section class="hero">
    <h1>Descubra o que voc\xEA pode vender com o que j\xE1 sabe</h1>
    <p class="lead">Responda 6 perguntas e receba 10 ideias de produtos digitais, organizadas em uma esteira: do produto de entrada ao acompanhamento de valor alto.</p>
    ${q([["Abre Carteira","5 ideias de entrada"],["Base","3 ideias de meio de funil"],["Personaliza\xE7\xE3o","2 ideias de valor alto"]])}
    <div class="cta">${y()}<button class="btn ghost block" id="try">Testar gr\xE1tis com 3 ideias</button></div>
    <p class="meta">Pagamento \xFAnico. Acesso por 1 ano. Garantia de 7 dias.</p>
  </section>

  <section class="sales">
    <h2>O que voc\xEA recebe</h2>
    <ul class="checks">
      <li><b>10 ideias de produtos</b> com nome, p\xFAblico, problema, promessa, formato e faixa de pre\xE7o.</li>
      <li><b>Sua esteira recomendada:</b> um produto de entrada, um de base e um de valor alto, conectados entre si.</li>
      <li><b>O primeiro produto detalhado:</b> o que entregar, a vers\xE3o mais simples para come\xE7ar e como testar antes de produzir tudo.</li>
      <li><b>Ideias salvas na sua conta</b> para consultar quando quiser.</li>
      <li><b>At\xE9 3 gera\xE7\xF5es por dia durante 1 ano</b> para testar \xE1reas, p\xFAblicos e formatos diferentes.</li>
    </ul>
  </section>

  <section class="sales">
    <h2>Para quem \xE9</h2>
    <p>Para mentoras, terapeutas, prestadoras de servi\xE7o e qualquer pessoa que tem um conhecimento e ainda n\xE3o sabe que produto digital criar, nem quanto cobrar por ele.</p>
  </section>

  <section class="how">
    <h2>Como funciona</h2>
    <ol>
      <li><p>Voc\xEA compra e recebe o acesso no e-mail da compra.</p></li>
      <li><p>Responde 6 perguntas sobre o que sabe fazer e quem quer ajudar.</p></li>
      <li><p>Recebe as 10 ideias, a esteira e o primeiro produto, e salva o que gostar.</p></li>
    </ol>
  </section>

  <section class="price" id="comprar">
    <p class="tag">Monetiza AI completo</p>
    <p class="value">R$ 37</p>
    <p class="cond">pagamento \xFAnico \xB7 acesso por 1 ano</p>
    ${y("Comprar agora")}
    <p class="meta">Garantia de 7 dias: se n\xE3o gostar, pe\xE7a o reembolso pela Kiwify.</p>
  </section>

  <section class="faq">
    <h2>Perguntas frequentes</h2>
    <details><summary>Como eu acesso depois de comprar?</summary><p>Entre em carolbergantini.com/appmonetiza com o e-mail que voc\xEA usou na compra. Voc\xEA recebe um link de entrada no e-mail, sem senha.</p></details>
    <details><summary>Posso usar no celular e no computador?</summary><p>Sim, mas um aparelho por vez. Ao entrar em um aparelho novo, o anterior \xE9 desconectado.</p></details>
    <details><summary>As ideias garantem vendas?</summary><p>N\xE3o. Pre\xE7os e potencial s\xE3o hip\xF3teses para voc\xEA testar com o seu p\xFAblico. O Monetiza mostra caminhos e o jeito mais simples de validar cada um.</p></details>
    <details><summary>Preciso entender de tecnologia?</summary><p>N\xE3o. Voc\xEA s\xF3 responde 6 perguntas com suas palavras.</p></details>
    <details><summary>E se eu n\xE3o gostar?</summary><p>Voc\xEA tem 7 dias de garantia. Pe\xE7a o reembolso pela Kiwify ou fale com o suporte.</p></details>
  </section>
  ${T}`,m.querySelector("#try").addEventListener("click",()=>l({name:"q",i:k(n.answers)}))}function D(){let e=n.report,s=E.map((t,r)=>e.ideas[r]?`<section><div class="tier-h"><h2>${t.name}</h2><span class="n">1 de ${[5,3,2][r]}</span></div>
    <p class="intro">${t.role}</p><div class="ideas">${S(e.ideas[r],t.cls)}</div></section>`:"").join("");m.innerHTML=`
  <article class="res">
    <h1>Sua amostra: 3 ideias</h1>
    <p class="summary">${o(e.profile.summary)}</p>
    ${s}
    <section class="locked" aria-label="Conte\xFAdo da vers\xE3o completa">
      <div class="blur" aria-hidden="true">${q([["Abre Carteira","\u2022\u2022\u2022\u2022\u2022"],["Base","\u2022\u2022\u2022\u2022\u2022"],["Personaliza\xE7\xE3o","\u2022\u2022\u2022\u2022\u2022"]])}</div>
      <h2>Desbloqueie a vers\xE3o completa</h2>
      <ul class="checks">
        <li>Mais 7 ideias (10 no total)</li>
        <li>Sua esteira recomendada, com as 3 ideias conectadas</li>
        <li>O primeiro produto detalhado e como validar</li>
        <li>Textos ajustados \xE0s suas palavras e ideias salvas na sua conta</li>
      </ul>
      ${y("Desbloquear as 10 ideias e a sua esteira por R$ 37")}
      <p class="meta">Pagamento \xFAnico, acesso por 1 ano, garantia de 7 dias.</p>
    </section>
    <div class="again"><p>Os pre\xE7os e o potencial s\xE3o hip\xF3teses para voc\xEA testar com seu p\xFAblico, n\xE3o previs\xF5es de vendas.</p>
      <button class="btn ghost" id="new">Fazer outra amostra</button></div>
  </article>`,m.querySelector("#new").addEventListener("click",()=>{n={view:{name:"home"},answers:{}},l({name:"q",i:0})})}function K(e){m.innerHTML=`<section class="problem" role="alert"><h1>${e.code==="limite_amostra"?"Limite de hoje atingido":"N\xE3o deu certo"}</h1>
    <p>${o(e.message)}</p>
    <div class="actions">${e.code==="limite_amostra"?y():'<button class="btn" id="retry">Tentar de novo</button>'}
    <button class="btn ghost" id="home">Voltar ao in\xEDcio</button></div></section>`,m.querySelector("#retry")?.addEventListener("click",R),m.querySelector("#home").addEventListener("click",()=>l({name:"home"}))}var f=!1;async function R(){f=!0,l({name:"wait"});let e=Date.now(),s="internal",t="Algo deu errado. Tente novamente em alguns minutos.";try{let r=await fetch(V,{method:"POST",body:JSON.stringify({acao:"amostra",answers:A(n.answers)}),headers:{"content-type":"application/json","x-request-id":crypto.randomUUID()}}),a=await r.json().catch(()=>null);if(await new Promise(b=>setTimeout(b,Math.max(0,2500-(Date.now()-e)))),r.ok&&a?.status==="ok"){n.report=a.report,f=!1,l({name:"result"});return}a?.code&&(s=a.code,t=a.message??t)}catch{s="network",t="N\xE3o conseguimos falar com o servidor. Confira sua internet e tente de novo."}f=!1,l({name:"error",code:s,message:t})}function z(){let e=n.view;e.name==="home"?B():e.name==="q"?L(m,e.i,n.answers,{save:I,lastLabel:"Ver minha amostra",back:()=>l(e.i===0?{name:"home"}:{name:"q",i:e.i-1}),next:()=>e.i<5?l({name:"q",i:e.i+1}):R()}):e.name==="wait"?f?P(m,()=>n.view.name==="wait",!0):l({name:"q",i:5}):e.name==="error"?K(e):e.name==="result"&&n.report?D():l({name:"home"})}document.getElementById("brand").addEventListener("click",e=>{e.preventDefault(),l({name:"home"})});z();
