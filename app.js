var E="https://dyepykxuygmmilchyybr.supabase.co/functions/v1/generate-report",k="web-1.0",x=["Neg\xF3cios, vendas e marketing","Finan\xE7as e organiza\xE7\xE3o","Educa\xE7\xE3o e desenvolvimento","Beleza, moda e estilo","Culin\xE1ria e alimenta\xE7\xE3o","Casa, fam\xEDlia e rotina","Tecnologia e ferramentas digitais","Artes, criatividade e hobbies","Outra \xE1rea"],S=["Ainda n\xE3o sei","Mulheres","M\xE3es e fam\xEDlias","Empreendedores e aut\xF4nomos","Profissionais de uma \xE1rea","Estudantes e iniciantes","Pessoas com um hobby ou interesse espec\xEDfico","Outro p\xFAblico"],L=["Materiais prontos (PDFs, planilhas, templates)","Aulas gravadas ou minicursos","Aulas ao vivo e encontros em grupo","Atendimento individual e personalizado","N\xE3o sei, quero que a IA recomende"],h=[{key:"q1",title:"O que voc\xEA sabe fazer bem?",help:"Pode ser do trabalho, de um hobby ou da vida pessoal. Respostas curtas valem.",ex:"Exemplo: organizo as finan\xE7as da casa, fa\xE7o bolos decorados, ensino ingl\xEAs para crian\xE7as."},{key:"q2",title:"Sobre o que as pessoas costumam pedir sua ajuda?",help:"Pense nas perguntas que amigas, clientes ou familiares fazem para voc\xEA.",ex:"Exemplo: me pedem dicas para montar a rotina dos filhos e organizar a casa."},{key:"q3",title:"Qual dessas \xE1reas mais combina com voc\xEA?",help:"Escolha uma.",options:x,other:{when:"Outra \xE1rea",key:"q3_other",label:"Qual \xE1rea? (opcional)"}},{key:"q4",title:"Quem voc\xEA gostaria de ajudar?",help:"Escolha uma.",options:S,other:{when:"Outro p\xFAblico",key:"q4_other",label:"Qual p\xFAblico? (opcional)"}},{key:"q5",title:"Voc\xEA j\xE1 ensinou ou ajudou algu\xE9m a conseguir um resultado?",help:"Conte em poucas palavras. Se ainda n\xE3o, tudo bem: escreva \u201Cainda n\xE3o\u201D.",ex:"Exemplo: ajudei uma vizinha a organizar as contas e sair do cheque especial."},{key:"q6",title:"Como voc\xEA prefere entregar seu conhecimento?",help:"Escolha uma.",options:L}],q="monetiza-beta-v1",A=()=>{try{let e=JSON.parse(sessionStorage.getItem(q)??"");if(e?.view)return e}catch{}return{view:{name:"home"},answers:{}}},l=A(),p=()=>{try{sessionStorage.setItem(q,JSON.stringify(l))}catch{}},o=document.getElementById("app"),s=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),v=e=>"R$\xA0"+e.toLocaleString("pt-BR"),I=e=>e.price_min===e.price_max?v(e.price_min):`${v(e.price_min)} a ${v(e.price_max)}`,T=e=>e.price_min===e.price_max?v(e.price_min):`${v(e.price_min)}\u2013${e.price_max.toLocaleString("pt-BR")}`,b=[{tier:"abre_carteira",cls:"t1",name:"Abre Carteira",role:"Produtos de entrada: uma pequena vit\xF3ria r\xE1pida, pre\xE7o acess\xEDvel."},{tier:"base",cls:"t2",name:"Base",role:"O n\xFAcleo da sua oferta: resolve um problema maior, com mais profundidade."},{tier:"personalizacao",cls:"t3",name:"Personaliza\xE7\xE3o",role:"Acompanhamento pr\xF3ximo e sob medida, com valor mais alto."}];function u(e){l.view=e,p(),w(),window.scrollTo(0,0),o.focus({preventScroll:!0})}function y(e,a=""){return`<div class="stairs ${a}" aria-hidden="true">${e.map(([t,c],n)=>`<div class="step t${n+1}"><b>${s(t)}</b><small>${s(c)}</small></div>`).join("")}</div><div class="stairs-base"></div>`}function P(){let e=Object.keys(l.answers).length>0;o.innerHTML=`
  <section class="hero">
    <h1>Descubra o que voc\xEA pode vender com o que j\xE1 sabe</h1>
    <p class="lead">Responda 6 perguntas e receba 10 ideias de produtos digitais, organizadas em uma esteira de vendas.</p>
    ${y([["Abre Carteira","5 ideias de entrada"],["Base","3 ideias de meio de funil"],["Personaliza\xE7\xE3o","2 ideias de valor alto"]])}
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
  </section>`,o.querySelector("#start").addEventListener("click",()=>u({name:"q",i:C()}))}var C=()=>{let e=h.findIndex(a=>!l.answers[a.key]?.trim());return e<0?5:e};function N(e){let a=h[e],t=l.answers,c=a.options?`<fieldset class="opts" style="border:0;padding:0;margin:20px 0 0"><legend class="sr" style="position:absolute;left:-9999px">${s(a.title)}</legend>
        ${a.options.map(r=>`<label class="opt"><input type="radio" name="opt" value="${s(r)}" ${t[a.key]===r?"checked":""}><span>${s(r)}</span></label>`).join("")}
      </fieldset>
      ${a.other?`<div class="other" id="other" ${t[a.key]===a.other.when?"":"hidden"}><label class="count" for="otherIn">${s(a.other.label)}</label>
        <input type="text" id="otherIn" maxlength="100" value="${s(t[a.other.key])}"></div>`:""}`:`<div class="field"><textarea id="txt" maxlength="600" aria-label="${s(a.title)}" aria-describedby="help ex">${s(t[a.key])}</textarea>
        <div class="counter"><span id="cnt">${(t[a.key]??"").length}</span>/600</div>
        <button class="link quick" id="dunno" type="button">N\xE3o sei responder</button></div>`;o.innerHTML=`
  <section class="q">
    <div class="progress" aria-hidden="true">${h.map((r,m)=>`<i class="${m<=e?"on":""}"></i>`).join("")}</div>
    <p class="count">Pergunta ${e+1} de 6</p>
    <h1>${s(a.title)}</h1>
    <p class="help" id="help">${s(a.help)}</p>
    ${a.ex?`<p class="ex" id="ex">${s(a.ex)}</p>`:""}
    ${c}
    <p class="err" id="err" role="alert" hidden></p>
    <div class="nav">
      <button class="btn ghost" id="back" type="button">Voltar</button>
      <button class="btn" id="next" type="button">${e===5?"Gerar minhas ideias":"Continuar"}</button>
    </div>
  </section>`;let n=o.querySelector("#txt");n?.addEventListener("input",()=>{t[a.key]=n.value,o.querySelector("#cnt").textContent=String(n.value.length),p()}),o.querySelector("#dunno")?.addEventListener("click",()=>{n.value="N\xE3o sei",t[a.key]="N\xE3o sei",p(),d()}),o.querySelectorAll('input[name="opt"]').forEach(r=>r.addEventListener("change",()=>{t[a.key]=r.value,p();let m=o.querySelector("#other");m&&a.other&&(m.hidden=r.value!==a.other.when)}));let i=o.querySelector("#otherIn");i?.addEventListener("input",()=>{t[a.other.key]=i.value,p()}),o.querySelector("#back").addEventListener("click",()=>u(e===0?{name:"home"}:{name:"q",i:e-1}));let d=()=>{if(!(t[a.key]??"").trim()){let m=o.querySelector("#err");m.textContent=a.options?"Escolha uma op\xE7\xE3o para continuar.":"Escreva uma resposta, mesmo curta, ou toque em \u201CN\xE3o sei responder\u201D.",m.hidden=!1;return}e<5?u({name:"q",i:e+1}):_()};o.querySelector("#next").addEventListener("click",d),n?.focus({preventScroll:!0})}function j(){o.innerHTML=`
  <section class="wait" aria-live="polite">
    <h1>Criando suas ideias</h1>
    <p class="sub" id="sub">Isso leva de 15 segundos a 1 minuto. N\xE3o feche esta p\xE1gina.</p>
    ${y([["Abre Carteira",""],["Base",""],["Personaliza\xE7\xE3o",""]])}
    <ul>
      <li data-at="0">Lendo suas respostas</li>
      <li data-at="5">Criando as 10 ideias</li>
      <li data-at="14">Montando sua esteira</li>
      <li data-at="24">Conferindo a qualidade</li>
    </ul>
  </section>`;let e=Date.now(),a=[...o.querySelectorAll(".stairs .step")],t=()=>{if(l.view.name!=="wait")return;let c=(Date.now()-e)/1e3;o.querySelectorAll(".wait li").forEach(n=>n.classList.toggle("done",c>=Number(n.dataset.at)+4)),a.forEach((n,i)=>n.classList.toggle("lit",c>=[5,14,24][i])),c>50&&(o.querySelector("#sub").textContent="Est\xE1 levando um pouco mais que o normal. Continue nesta p\xE1gina."),setTimeout(t,1e3)};t()}function z(e){let a=!["ip_limit","disabled"].includes(e.code);o.innerHTML=`
  <section class="problem" role="alert">
    <h1>${s(e.title)}</h1>
    <p>${s(e.message)}</p>
    <p>Suas respostas continuam salvas nesta aba.</p>
    <div class="actions">
      ${a?'<button class="btn" id="retry">Tentar de novo</button>':""}
      <button class="btn ghost" id="review">Revisar respostas</button>
    </div>
  </section>`,o.querySelector("#retry")?.addEventListener("click",_),o.querySelector("#review").addEventListener("click",()=>u({name:"q",i:0}))}function M(e,a,t){return`<article class="idea ${a}">
    <div class="head"><h3>${s(e.name)}</h3><span class="price">${s(I(e))}</span></div>
    <p class="sub">${s(e.subtitle)}</p>
    ${t?`<span class="pick">${s(t)}</span>`:""}
    <dl>
      <div><dt>Para quem</dt><dd>${s(e.audience)}</dd></div>
      <div><dt>Problema que resolve</dt><dd>${s(e.problem)}</dd></div>
      <div><dt>Promessa</dt><dd>${s(e.promise)}</dd></div>
      <div><dt>Formato</dt><dd>${s(e.format)}</dd></div>
      <div><dt>Por que esta ideia</dt><dd>${s(e.rationale)}</dd></div>
    </dl>
  </article>`}function R(){let e=l.report,a=new Map(e.ideas.map(i=>[i.id,i])),t=e.recommended_ladder,c=[a.get(t.entry_idea_id),a.get(t.base_idea_id),a.get(t.premium_idea_id)],n=new Map([[t.entry_idea_id,"Na sua esteira: entrada"],[t.base_idea_id,"Na sua esteira: base"],[t.premium_idea_id,"Na sua esteira: valor alto"]]);o.innerHTML=`
  <article class="res">
    <h1>Suas 10 ideias</h1>
    <p class="summary">${s(e.profile.summary)}</p>
    <p class="area"><b>\xC1rea de oportunidade:</b> ${s(e.profile.opportunity_area)}</p>
    ${e.profile.assumptions?.length?`<details class="assump"><summary>O que a IA considerou</summary><ul>${e.profile.assumptions.map(i=>`<li>${s(i)}</li>`).join("")}</ul></details>`:""}

    <section aria-labelledby="h-ladder">
      <h2 id="h-ladder">Sua esteira recomendada</h2>
      <p class="intro">Um produto de cada categoria, em ordem: quem compra o primeiro est\xE1 pronto para o seguinte.</p>
      <div class="ladder">
        <div class="stairs">${c.map((i,d)=>`<div class="step t${d+1}"><span class="tier">${b[d].name}</span><b>${s(i?.name)}</b><small>${i?s(T(i)):""}</small></div>`).join("")}</div>
        <div class="stairs-base"></div>
        <p class="prog">${s(t.progression)}</p>
      </div>
    </section>

    ${b.map(i=>{let d=e.ideas.filter(r=>r.tier===i.tier);return`<section aria-labelledby="h-${i.cls}">
        <div class="tier-h"><h2 id="h-${i.cls}">${i.name}</h2><span class="n">${d.length} ${d.length===1?"ideia":"ideias"}</span></div>
        <p class="intro">${i.role}</p>
        <div class="ideas ${d.length>2?"cols":""}">${d.map(r=>M(r,i.cls,n.get(r.id)??"")).join("")}</div>
      </section>`}).join("")}

    <div class="again">
      <p>Os pre\xE7os e o potencial s\xE3o hip\xF3teses para voc\xEA testar com seu p\xFAblico, n\xE3o previs\xF5es de vendas.</p>
      <button class="btn ghost" id="new">Fazer um novo diagn\xF3stico</button>
    </div>
  </article>`,o.querySelector("#new").addEventListener("click",()=>{l={view:{name:"home"},answers:{}},u({name:"home"})})}var f={ip_limit:"Limite de hoje atingido",disabled:"Gera\xE7\xE3o pausada",busy:"Muita gente usando agora",server:"A IA est\xE1 inst\xE1vel",invalid:"N\xE3o deu certo desta vez",input:"Revise suas respostas",duplicate:"Pedido j\xE1 enviado",network:"Sem conex\xE3o",internal:"Algo deu errado"},g=!1,$=!1;addEventListener("pagehide",()=>{$=!0});async function _(){g=!0,u({name:"wait"});let e=l.answers,a={q1:e.q1.trim(),q2:e.q2.trim(),q3:e.q3,q4:e.q4,q5:e.q5.trim(),q6:e.q6};e.q3==="Outra \xE1rea"&&e.q3_other?.trim()&&(a.q3_other=e.q3_other.trim()),e.q4==="Outro p\xFAblico"&&e.q4_other?.trim()&&(a.q4_other=e.q4_other.trim());let t=new AbortController,c=setTimeout(()=>t.abort(),15e4),n="internal",i="Algo deu errado do nosso lado. Tente novamente em alguns minutos.";try{let d=await fetch(E,{method:"POST",signal:t.signal,body:JSON.stringify({answers:a}),headers:{"content-type":"application/json","x-client-version":k,"x-request-id":crypto.randomUUID()}}),r=await d.json().catch(()=>null);if(d.ok&&r?.status==="ok"){l.report=r.report,g=!1,u({name:"result"});return}r?.code&&(n=r.code,i=r.message??i)}catch(d){if($)return;n="network",i=d.name==="AbortError"?"A resposta demorou demais. Tente de novo em alguns minutos.":"N\xE3o conseguimos falar com o servidor. Confira sua internet e tente de novo."}finally{clearTimeout(c),g=!1}u({name:"error",code:n,title:f[n]??f.internal,message:i})}function w(){let e=l.view;if(e.name==="home")P();else if(e.name==="q")N(e.i);else if(e.name==="wait"){if(g){j();return}u({name:"error",code:"interrupted",title:"A gera\xE7\xE3o foi interrompida",message:"A p\xE1gina foi recarregada antes de o resultado chegar."})}else e.name==="error"?z(e):e.name==="result"&&l.report?R():u({name:"home"})}document.getElementById("brand").addEventListener("click",e=>{e.preventDefault(),u({name:"home"})});w();
