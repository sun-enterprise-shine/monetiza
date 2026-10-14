var A="https://dyepykxuygmmilchyybr.supabase.co/functions/v1/generate-report",I="web-1.0",T=["Neg\xF3cios, vendas e marketing","Finan\xE7as e organiza\xE7\xE3o","Educa\xE7\xE3o e desenvolvimento","Beleza, moda e estilo","Culin\xE1ria e alimenta\xE7\xE3o","Casa, fam\xEDlia e rotina","Tecnologia e ferramentas digitais","Artes, criatividade e hobbies","Outra \xE1rea"],P=["Ainda n\xE3o sei","Mulheres","M\xE3es e fam\xEDlias","Empreendedores e aut\xF4nomos","Profissionais de uma \xE1rea","Estudantes e iniciantes","Pessoas com um hobby ou interesse espec\xEDfico","Outro p\xFAblico"],R=["Materiais prontos (PDFs, planilhas, templates)","Aulas gravadas ou minicursos","Aulas ao vivo e encontros em grupo","Atendimento individual e personalizado","N\xE3o sei, quero que a IA recomende"],q=[{key:"q1",title:"O que voc\xEA sabe fazer bem?",help:"Pode ser do trabalho, de um hobby ou da vida pessoal. Respostas curtas valem.",ex:"Exemplo: organizo as finan\xE7as da casa, fa\xE7o bolos decorados, ensino ingl\xEAs para crian\xE7as."},{key:"q2",title:"Sobre o que as pessoas costumam pedir sua ajuda?",help:"Pense nas perguntas que amigas, clientes ou familiares fazem para voc\xEA.",ex:"Exemplo: me pedem dicas para montar a rotina dos filhos e organizar a casa."},{key:"q3",title:"Qual dessas \xE1reas mais combina com voc\xEA?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:T,other:{when:"Outra \xE1rea",key:"q3_other",label:"Qual \xE1rea? (opcional)"}},{key:"q4",title:"Quem voc\xEA gostaria de ajudar?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:P,exclusive:"Ainda n\xE3o sei",other:{when:"Outro p\xFAblico",key:"q4_other",label:"Qual p\xFAblico? (opcional)"}},{key:"q5",title:"Voc\xEA j\xE1 ensinou ou ajudou algu\xE9m a conseguir um resultado?",help:"Conte em poucas palavras. Se ainda n\xE3o, tudo bem: escreva \u201Cainda n\xE3o\u201D.",ex:"Exemplo: ajudei uma vizinha a organizar as contas e sair do cheque especial."},{key:"q6",title:"Como voc\xEA prefere entregar seu conhecimento?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:R,exclusive:"N\xE3o sei, quero que a IA recomende"}],C=3,g=e=>Array.isArray(e)?e:typeof e=="string"&&e?[e]:[],w=(e,a)=>a==="q3"||a==="q4"||a==="q6"?g(e[a]).length>0:!!e[a]?.trim(),E="monetiza-beta-v1",N=()=>{try{let e=JSON.parse(sessionStorage.getItem(E)??"");if(e?.view){for(let a of["q3","q4","q6"])e.answers?.[a]&&(e.answers[a]=g(e.answers[a]));return e}}catch{}return{view:{name:"home"},answers:{}}},c=N(),v=()=>{try{sessionStorage.setItem(E,JSON.stringify(c))}catch{}},o=document.getElementById("app"),i=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),b=e=>"R$\xA0"+e.toLocaleString("pt-BR"),M=e=>e.price_min===e.price_max?b(e.price_min):`${b(e.price_min)} a ${b(e.price_max)}`,j=e=>e.price_min===e.price_max?b(e.price_min):`${b(e.price_min)}\u2013${e.price_max.toLocaleString("pt-BR")}`,$=[{tier:"abre_carteira",cls:"t1",name:"Abre Carteira",role:"Produtos de entrada: uma pequena vit\xF3ria r\xE1pida, pre\xE7o acess\xEDvel."},{tier:"base",cls:"t2",name:"Base",role:"O n\xFAcleo da sua oferta: resolve um problema maior, com mais profundidade."},{tier:"personalizacao",cls:"t3",name:"Personaliza\xE7\xE3o",role:"Acompanhamento pr\xF3ximo e sob medida, com valor mais alto."}];function p(e){c.view=e,v(),L(),window.scrollTo(0,0),o.focus({preventScroll:!0})}function k(e,a=""){return`<div class="stairs ${a}" aria-hidden="true">${e.map(([s,u],r)=>`<div class="step t${r+1}"><b>${i(s)}</b><small>${i(u)}</small></div>`).join("")}</div><div class="stairs-base"></div>`}function z(){let e=Object.keys(c.answers).length>0;o.innerHTML=`
  <section class="hero">
    <h1>Descubra o que voc\xEA pode vender com o que j\xE1 sabe</h1>
    <p class="lead">Responda 6 perguntas e receba 10 ideias de produtos digitais, organizadas em uma esteira de vendas.</p>
    ${k([["Abre Carteira","5 ideias de entrada"],["Base","3 ideias de meio de funil"],["Personaliza\xE7\xE3o","2 ideias de valor alto"]])}
    <div class="cta"><button class="btn block" id="start">${e?"Continuar o diagn\xF3stico":"Come\xE7ar o diagn\xF3stico"}</button></div>
    <p class="meta">Gratuito e sem cadastro. Leva cerca de 3 minutos.</p>
  </section>
  <section class="how">
    <h2>Como funciona</h2>
    <ol>
      <li><p>Voc\xEA responde 6 perguntas sobre o que sabe fazer e quem quer ajudar.</p></li>
      <li><p>A intelig\xEAncia artificial cria 10 ideias de produtos com p\xFAblico, promessa, formato e faixa de pre\xE7o.</p></li>
      <li><p>Voc\xEA v\xEA a esteira recomendada: um produto de entrada, um de base e um de valor alto, conectados entre si.</p></li>
    </ol>
    <p class="note">N\xE3o escreva nome, e-mail, telefone ou dados de outras pessoas nas respostas. Elas s\xE3o usadas s\xF3 para gerar suas ideias e n\xE3o ficam guardadas.</p>
  </section>`,o.querySelector("#start").addEventListener("click",()=>p({name:"q",i:O()}))}var O=()=>{let e=q.findIndex(a=>!w(c.answers,a.key));return e<0?5:e};function H(e){let a=q[e],s=c.answers,u=a.options?`<fieldset class="opts" style="border:0;padding:0;margin:20px 0 0"><legend class="sr" style="position:absolute;left:-9999px">${i(a.title)}</legend>
        ${a.options.map(n=>`<label class="opt"><input type="checkbox" name="opt" value="${i(n)}" ${g(s[a.key]).includes(n)?"checked":""}><span>${i(n)}</span></label>`).join("")}
      </fieldset>
      ${a.other?`<div class="other" id="other" ${g(s[a.key]).includes(a.other.when)?"":"hidden"}><label class="count" for="otherIn">${i(a.other.label)}</label>
        <input type="text" id="otherIn" maxlength="100" value="${i(s[a.other.key])}"></div>`:""}`:`<div class="field"><textarea id="txt" maxlength="600" aria-label="${i(a.title)}" aria-describedby="help ex">${i(s[a.key])}</textarea>
        <div class="counter"><span id="cnt">${(s[a.key]??"").length}</span>/600</div>
        <button class="link quick" id="dunno" type="button">N\xE3o sei responder</button></div>`;o.innerHTML=`
  <section class="q">
    <div class="progress" aria-hidden="true">${q.map((n,m)=>`<i class="${m<=e?"on":""}"></i>`).join("")}</div>
    <p class="count">Pergunta ${e+1} de 6</p>
    <h1>${i(a.title)}</h1>
    <p class="help" id="help">${i(a.help)}</p>
    ${a.ex?`<p class="ex" id="ex">${i(a.ex)}</p>`:""}
    ${u}
    <p class="err" id="err" role="alert" hidden></p>
    <div class="nav">
      <button class="btn ghost" id="back" type="button">Voltar</button>
      <button class="btn" id="next" type="button">${e===5?"Gerar minhas ideias":"Continuar"}</button>
    </div>
  </section>`;let r=o.querySelector("#txt");r?.addEventListener("input",()=>{s[a.key]=r.value,o.querySelector("#cnt").textContent=String(r.value.length),v()}),o.querySelector("#dunno")?.addEventListener("click",()=>{r.value="N\xE3o sei",s[a.key]="N\xE3o sei",v(),y()});let t=[...o.querySelectorAll('input[name="opt"]')],l=()=>{let n=t.filter(h=>h.checked).map(h=>h.value);s[a.key]=n,v(),t.forEach(h=>{h.disabled=!h.checked&&n.length>=C,h.closest(".opt").classList.toggle("off",h.disabled)});let m=o.querySelector("#other");m&&a.other&&(m.hidden=!n.includes(a.other.when))};t.forEach(n=>n.addEventListener("change",()=>{n.checked&&a.exclusive&&(n.value===a.exclusive?t.forEach(m=>{m!==n&&(m.checked=!1)}):t.forEach(m=>{m.value===a.exclusive&&(m.checked=!1)})),l()})),t.length&&l();let d=o.querySelector("#otherIn");d?.addEventListener("input",()=>{s[a.other.key]=d.value,v()}),o.querySelector("#back").addEventListener("click",()=>p(e===0?{name:"home"}:{name:"q",i:e-1}));let y=()=>{if(!w(s,a.key)){let n=o.querySelector("#err");n.textContent=a.options?"Escolha pelo menos uma op\xE7\xE3o para continuar.":"Escreva uma resposta, mesmo curta, ou toque em \u201CN\xE3o sei responder\u201D.",n.hidden=!1;return}e<5?p({name:"q",i:e+1}):S()};o.querySelector("#next").addEventListener("click",y),r?.focus({preventScroll:!0})}function V(){o.innerHTML=`
  <section class="wait" aria-live="polite">
    <h1>Criando suas ideias</h1>
    <p class="sub" id="sub">Isso leva de 15 segundos a 1 minuto. N\xE3o feche esta p\xE1gina.</p>
    ${k([["Abre Carteira",""],["Base",""],["Personaliza\xE7\xE3o",""]])}
    <ul>
      <li data-at="0">Lendo suas respostas</li>
      <li data-at="5">Criando as 10 ideias</li>
      <li data-at="14">Montando sua esteira</li>
      <li data-at="24">Conferindo a qualidade</li>
    </ul>
  </section>`;let e=Date.now(),a=[...o.querySelectorAll(".stairs .step")],s=()=>{if(c.view.name!=="wait")return;let u=(Date.now()-e)/1e3;o.querySelectorAll(".wait li").forEach(r=>r.classList.toggle("done",u>=Number(r.dataset.at)+4)),a.forEach((r,t)=>r.classList.toggle("lit",u>=[5,14,24][t])),u>50&&(o.querySelector("#sub").textContent="Est\xE1 levando um pouco mais que o normal. Continue nesta p\xE1gina."),setTimeout(s,1e3)};s()}function B(e){let a=!["ip_limit","disabled"].includes(e.code);o.innerHTML=`
  <section class="problem" role="alert">
    <h1>${i(e.title)}</h1>
    <p>${i(e.message)}</p>
    <p>Suas respostas continuam salvas nesta aba.</p>
    <div class="actions">
      ${a?'<button class="btn" id="retry">Tentar de novo</button>':""}
      <button class="btn ghost" id="review">Revisar respostas</button>
    </div>
  </section>`,o.querySelector("#retry")?.addEventListener("click",S),o.querySelector("#review").addEventListener("click",()=>p({name:"q",i:0}))}function Q(e,a,s){return`<article class="idea ${a}">
    <div class="head"><h3>${i(e.name)}</h3><span class="price">${i(M(e))}</span></div>
    <p class="sub">${i(e.subtitle)}</p>
    ${s?`<span class="pick">${i(s)}</span>`:""}
    <dl>
      <div><dt>Para quem</dt><dd>${i(e.audience)}</dd></div>
      <div><dt>Problema que resolve</dt><dd>${i(e.problem)}</dd></div>
      <div><dt>Promessa</dt><dd>${i(e.promise)}</dd></div>
      <div><dt>Formato</dt><dd>${i(e.format)}</dd></div>
      <div><dt>Por que esta ideia</dt><dd>${i(e.rationale)}</dd></div>
    </dl>
  </article>`}function U(){let e=c.report,a=new Map(e.ideas.map(t=>[t.id,t])),s=e.recommended_ladder,u=[a.get(s.entry_idea_id),a.get(s.base_idea_id),a.get(s.premium_idea_id)],r=new Map([[s.entry_idea_id,"Na sua esteira: entrada"],[s.base_idea_id,"Na sua esteira: base"],[s.premium_idea_id,"Na sua esteira: valor alto"]]);o.innerHTML=`
  <article class="res">
    <h1>Suas 10 ideias</h1>
    <p class="summary">${i(e.profile.summary)}</p>
    <p class="area"><b>\xC1rea de oportunidade:</b> ${i(e.profile.opportunity_area)}</p>
    ${e.profile.assumptions?.length?`<details class="assump"><summary>O que a IA considerou</summary><ul>${e.profile.assumptions.map(t=>`<li>${i(t)}</li>`).join("")}</ul></details>`:""}

    <section aria-labelledby="h-ladder">
      <h2 id="h-ladder">Sua esteira recomendada</h2>
      <p class="intro">Um produto de cada categoria, em ordem: quem compra o primeiro est\xE1 pronto para o seguinte.</p>
      <div class="ladder">
        <div class="stairs">${u.map((t,l)=>`<div class="step t${l+1}"><span class="tier">${$[l].name}</span><b>${i(t?.name)}</b><small>${t?i(j(t)):""}</small></div>`).join("")}</div>
        <div class="stairs-base"></div>
        <p class="prog">${i(s.progression)}</p>
      </div>
    </section>

    ${$.map(t=>{let l=e.ideas.filter(d=>d.tier===t.tier);return`<section aria-labelledby="h-${t.cls}">
        <div class="tier-h"><h2 id="h-${t.cls}">${t.name}</h2><span class="n">${l.length} ${l.length===1?"ideia":"ideias"}</span></div>
        <p class="intro">${t.role}</p>
        <div class="ideas ${l.length>2?"cols":""}">${l.map(d=>Q(d,t.cls,r.get(d.id)??"")).join("")}</div>
      </section>`}).join("")}

    <div class="again">
      <p>Os pre\xE7os e o potencial s\xE3o hip\xF3teses para voc\xEA testar com seu p\xFAblico, n\xE3o previs\xF5es de vendas.</p>
      <button class="btn ghost" id="new">Fazer um novo diagn\xF3stico</button>
    </div>
  </article>`,o.querySelector("#new").addEventListener("click",()=>{c={view:{name:"home"},answers:{}},p({name:"home"})})}var _={ip_limit:"Limite de hoje atingido",disabled:"Gera\xE7\xE3o pausada",busy:"Muita gente usando agora",server:"A IA est\xE1 inst\xE1vel",invalid:"N\xE3o deu certo desta vez",input:"Revise suas respostas",duplicate:"Pedido j\xE1 enviado",network:"Sem conex\xE3o",internal:"Algo deu errado"},f=!1,x=!1;addEventListener("pagehide",()=>{x=!0});async function S(){f=!0,p({name:"wait"});let e=c.answers,a={q1:e.q1.trim(),q2:e.q2.trim(),q3:g(e.q3),q4:g(e.q4),q5:e.q5.trim(),q6:g(e.q6)};g(e.q3).includes("Outra \xE1rea")&&e.q3_other?.trim()&&(a.q3_other=e.q3_other.trim()),g(e.q4).includes("Outro p\xFAblico")&&e.q4_other?.trim()&&(a.q4_other=e.q4_other.trim());let s=new AbortController,u=setTimeout(()=>s.abort(),15e4),r="internal",t="Algo deu errado do nosso lado. Tente novamente em alguns minutos.";try{let l=await fetch(A,{method:"POST",signal:s.signal,body:JSON.stringify({answers:a}),headers:{"content-type":"application/json","x-client-version":I,"x-request-id":crypto.randomUUID()}}),d=await l.json().catch(()=>null);if(l.ok&&d?.status==="ok"){c.report=d.report,f=!1,p({name:"result"});return}d?.code&&(r=d.code,t=d.message??t)}catch(l){if(x)return;r="network",t=l.name==="AbortError"?"A resposta demorou demais. Tente de novo em alguns minutos.":"N\xE3o conseguimos falar com o servidor. Confira sua internet e tente de novo."}finally{clearTimeout(u),f=!1}p({name:"error",code:r,title:_[r]??_.internal,message:t})}function L(){let e=c.view;if(e.name==="home")z();else if(e.name==="q")H(e.i);else if(e.name==="wait"){if(f){V();return}p({name:"error",code:"interrupted",title:"A gera\xE7\xE3o foi interrompida",message:"A p\xE1gina foi recarregada antes de o resultado chegar."})}else e.name==="error"?B(e):e.name==="result"&&c.report?U():p({name:"home"})}document.getElementById("brand").addEventListener("click",e=>{e.preventDefault(),p({name:"home"})});L();
