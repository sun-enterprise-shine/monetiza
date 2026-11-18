var Y=["Neg\xF3cios, vendas e marketing","Finan\xE7as e organiza\xE7\xE3o","Educa\xE7\xE3o e desenvolvimento","Beleza, moda e estilo","Culin\xE1ria e alimenta\xE7\xE3o","Casa, fam\xEDlia e rotina","Tecnologia e ferramentas digitais","Artes, criatividade e hobbies","Outra \xE1rea"],X=["Ainda n\xE3o sei","Mulheres","M\xE3es e fam\xEDlias","Empreendedores e aut\xF4nomos","Profissionais de uma \xE1rea","Estudantes e iniciantes","Pessoas com um hobby ou interesse espec\xEDfico","Outro p\xFAblico"],Z=["Materiais prontos (PDFs, planilhas, templates)","Aulas gravadas ou minicursos","Aulas ao vivo e encontros em grupo","Atendimento individual e personalizado","N\xE3o sei, quero que a IA recomende"],L=[{key:"q1",title:"O que voc\xEA sabe fazer bem?",help:"Pode ser do trabalho, de um hobby ou da vida pessoal. Respostas curtas valem.",ex:"Exemplo: organizo as finan\xE7as da casa, fa\xE7o bolos decorados, ensino ingl\xEAs para crian\xE7as."},{key:"q2",title:"Sobre o que as pessoas costumam pedir sua ajuda?",help:"Pense nas perguntas que amigas, clientes ou familiares fazem para voc\xEA.",ex:"Exemplo: me pedem dicas para montar a rotina dos filhos e organizar a casa."},{key:"q3",title:"Qual dessas \xE1reas mais combina com voc\xEA?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:Y,other:{when:"Outra \xE1rea",key:"q3_other",label:"Qual \xE1rea? (opcional)"}},{key:"q4",title:"Quem voc\xEA gostaria de ajudar?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:X,exclusive:"Ainda n\xE3o sei",other:{when:"Outro p\xFAblico",key:"q4_other",label:"Qual p\xFAblico? (opcional)"}},{key:"q5",title:"Voc\xEA j\xE1 ensinou ou ajudou algu\xE9m a conseguir um resultado?",help:"Conte em poucas palavras. Se ainda n\xE3o, tudo bem: escreva \u201Cainda n\xE3o\u201D.",ex:"Exemplo: ajudei uma vizinha a organizar as contas e sair do cheque especial."},{key:"q6",title:"Como voc\xEA prefere entregar seu conhecimento?",help:"Escolha at\xE9 3 op\xE7\xF5es.",options:Z,exclusive:"N\xE3o sei, quero que a IA recomende"}],ee=3,q=e=>Array.isArray(e)?e:typeof e=="string"&&e?[e]:[],R=(e,t)=>t==="q3"||t==="q4"||t==="q6"?q(e[t]).length>0:!!e[t]?.trim(),C=e=>{let t=L.findIndex(a=>!R(e,a.key));return t<0?5:t},s=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),x=e=>"R$\xA0"+e.toLocaleString("pt-BR");function te(e){let t=e.price_min===e.price_max?x(e.price_min):`${x(e.price_min)} a ${x(e.price_max)}`;return e.price_period==="mes"?e.price_annual?`${t} por m\xEAs (plano anual)`:`${t} por m\xEAs`:e.tier==="abre_carteira"?t:`${t} ou em at\xE9 12x`}var N=e=>(e.price_min===e.price_max?x(e.price_min):`${x(e.price_min)}\u2013${e.price_max.toLocaleString("pt-BR")}`)+(e.price_period==="mes"?"/m\xEAs":""),A=[{tier:"abre_carteira",cls:"t1",name:"Abre Carteira",role:"Produtos de entrada: uma pequena vit\xF3ria r\xE1pida, pre\xE7o acess\xEDvel."},{tier:"base",cls:"t2",name:"Base",role:"O n\xFAcleo da sua oferta: resolve um problema maior, com mais profundidade."},{tier:"personalizacao",cls:"t3",name:"Personaliza\xE7\xE3o",role:"Acompanhamento pr\xF3ximo e sob medida, com valor mais alto."}];function ae(e,t=""){return`<div class="stairs ${t}" aria-hidden="true">${e.map(([a,o],n)=>`<div class="step t${n+1}"><b>${s(a)}</b><small>${s(o)}</small></div>`).join("")}</div><div class="stairs-base"></div>`}function H(e,t,a=""){return`<article class="idea ${t}">
    <div class="head"><h3>${s(e.name)}</h3><span class="price">${s(te(e))}</span></div>
    <p class="sub">${s(e.subtitle)}</p>
    ${a?`<span class="pick">${s(a)}</span>`:""}
    <dl>
      <div><dt>Para quem</dt><dd>${s(e.audience)}</dd></div>
      <div><dt>Problema que resolve</dt><dd>${s(e.problem)}</dd></div>
      <div><dt>Promessa</dt><dd>${s(e.promise)}</dd></div>
      <div><dt>Formato</dt><dd>${s(e.format)}</dd></div>
      <div><dt>Por que esta ideia</dt><dd>${s(e.rationale)}</dd></div>
    </dl>
  </article>`}function O(e,t,a,o){let n=L[t],p=n.options?`<fieldset class="opts"><legend class="sr">${s(n.title)}</legend>
        ${n.options.map(d=>`<label class="opt"><input type="checkbox" name="opt" value="${s(d)}" ${q(a[n.key]).includes(d)?"checked":""}><span>${s(d)}</span></label>`).join("")}
      </fieldset>
      ${n.other?`<div class="other" id="other" ${q(a[n.key]).includes(n.other.when)?"":"hidden"}><label class="count" for="otherIn">${s(n.other.label)}</label>
        <input type="text" id="otherIn" maxlength="100" value="${s(a[n.other.key])}"></div>`:""}`:`<div class="field"><textarea id="txt" maxlength="600" aria-label="${s(n.title)}" aria-describedby="help ex">${s(a[n.key])}</textarea>
        <div class="counter"><span id="cnt">${(a[n.key]??"").length}</span>/600</div>
        <button class="link quick" id="dunno" type="button">N\xE3o sei responder</button></div>`;e.innerHTML=`
  <section class="q">
    <div class="progress" aria-hidden="true">${L.map((d,v)=>`<i class="${v<=t?"on":""}"></i>`).join("")}</div>
    <p class="count">Pergunta ${t+1} de 6</p>
    <h1>${s(n.title)}</h1>
    <p class="help" id="help">${s(n.help)}</p>
    ${n.ex?`<p class="ex" id="ex">${s(n.ex)}</p>`:""}
    ${p}
    <p class="err" id="err" role="alert" hidden></p>
    <div class="nav">
      <button class="btn ghost" id="back" type="button">Voltar</button>
      <button class="btn" id="next" type="button">${t===5?s(o.lastLabel):"Continuar"}</button>
    </div>
  </section>`;let u=e.querySelector("#txt");u?.addEventListener("input",()=>{a[n.key]=u.value,e.querySelector("#cnt").textContent=String(u.value.length),o.save()});let g=[...e.querySelectorAll('input[name="opt"]')],c=()=>{let d=g.filter(y=>y.checked).map(y=>y.value);a[n.key]=d,o.save(),g.forEach(y=>{y.disabled=!y.checked&&d.length>=ee,y.closest(".opt").classList.toggle("off",y.disabled)});let v=e.querySelector("#other");v&&n.other&&(v.hidden=!d.includes(n.other.when))};g.forEach(d=>d.addEventListener("change",()=>{d.checked&&n.exclusive&&(d.value===n.exclusive?g.forEach(v=>{v!==d&&(v.checked=!1)}):g.forEach(v=>{v.value===n.exclusive&&(v.checked=!1)})),c()})),g.length&&c();let m=e.querySelector("#otherIn");m?.addEventListener("input",()=>{a[n.other.key]=m.value,o.save()}),e.querySelector("#back").addEventListener("click",o.back);let h=()=>{if(!R(a,n.key)){let d=e.querySelector("#err");d.textContent=n.options?"Escolha pelo menos uma op\xE7\xE3o para continuar.":"Escreva uma resposta, mesmo curta, ou toque em \u201CN\xE3o sei responder\u201D.",d.hidden=!1;return}o.next()};e.querySelector("#dunno")?.addEventListener("click",()=>{u.value="N\xE3o sei",a[n.key]="N\xE3o sei",o.save(),h()}),e.querySelector("#next").addEventListener("click",h),u?.focus({preventScroll:!0})}function z(e,t,a=!1){let o=a?[0,1,2,3]:[0,4,9,15];e.innerHTML=`
  <section class="wait" aria-live="polite">
    <h1>Criando suas <em>ideias</em></h1>
    <p class="sub" id="sub">${a?"S\xF3 um instante.":"Isso leva de 10 a 40 segundos. N\xE3o feche esta p\xE1gina."}</p>
    ${ae([["Abre Carteira",""],["Base",""],["Personaliza\xE7\xE3o",""]])}
    <ul>
      <li data-at="${o[0]}">Lendo suas respostas</li>
      <li data-at="${o[1]}">Criando as ideias</li>
      <li data-at="${o[2]}">Montando sua esteira</li>
      <li data-at="${o[3]}">Conferindo a qualidade</li>
    </ul>
  </section>`;let n=Date.now(),p=[...e.querySelectorAll(".stairs .step")],u=()=>{if(!t())return;let g=(Date.now()-n)/1e3;e.querySelectorAll(".wait li").forEach(c=>c.classList.toggle("done",g>=Number(c.dataset.at)+(a?.5:3))),p.forEach((c,m)=>c.classList.toggle("lit",g>=o[m+1])),g>45&&(e.querySelector("#sub").textContent="Est\xE1 levando um pouco mais que o normal. Continue nesta p\xE1gina."),setTimeout(u,a?300:1e3)};u()}function j(e){let t={q1:e.q1.trim(),q2:e.q2.trim(),q3:q(e.q3),q4:q(e.q4),q5:e.q5.trim(),q6:q(e.q6)};return q(e.q3).includes("Outra \xE1rea")&&e.q3_other?.trim()&&(t.q3_other=e.q3_other.trim()),q(e.q4).includes("Outro p\xFAblico")&&e.q4_other?.trim()&&(t.q4_other=e.q4_other.trim()),t}var k='<p class="support">Suporte: <a href="https://wa.me/5585999107083" target="_blank" rel="noopener">WhatsApp (85) 9 9910-7083</a> \xB7 <a href="mailto:contato@carolbergantini.com">contato@carolbergantini.com</a></p>';var S="mz-sessao",D="mz-aparelho",$={get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}},del:e=>{try{localStorage.removeItem(e)}catch{}}};function U(){let e=new URLSearchParams(location.hash.replace(/^#/,""));return!e.has("access_token")&&!e.has("error_description")&&!e.has("error")?null:(history.replaceState(null,"",location.pathname+location.search),e.get("access_token")&&e.get("refresh_token")?($.set(S,JSON.stringify({access:e.get("access_token"),refresh:e.get("refresh_token"),exp:Date.now()+Number(e.get("expires_in")??3600)*1e3})),null):/expired|invalid/i.test(e.get("error_description")??e.get("error_code")??"")?"Este link expirou ou j\xE1 foi usado. Pe\xE7a um novo abaixo.":"N\xE3o conseguimos entrar com este link. Pe\xE7a um novo abaixo.")}var E=()=>!!$.get(S);function _(){$.del(S)}function se(){let e=$.get(D);return e||(e=crypto.randomUUID(),$.set(D,e)),e}function B(){let e=navigator.userAgent,t=/iPhone|iPad/.test(e)?"iPhone/iPad":/Android/.test(e)?"Android":/Mac/.test(e)?"Mac":/Windows/.test(e)?"Windows":"Outro",a=/Instagram/.test(e)?"Instagram":/Edg\//.test(e)?"Edge":/Chrome\//.test(e)?"Chrome":/Safari\//.test(e)?"Safari":/Firefox\//.test(e)?"Firefox":"Navegador";return`${t} \xB7 ${a}`}async function ne(){let e=$.get(S);if(!e)return null;let t;try{t=JSON.parse(e)}catch{return _(),null}if(t.exp-Date.now()>6e4)return t.access;try{let a=await fetch("https://dyepykxuygmmilchyybr.supabase.co/functions/v1/monetiza-app",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({acao:"renovar",refresh_token:t.refresh})});if(!a.ok)return(a.status===400||a.status===401)&&_(),null;let o=await a.json();return $.set(S,JSON.stringify({access:o.access_token,refresh:o.refresh_token,exp:Date.now()+Number(o.expires_in??3600)*1e3})),o.access_token}catch{return t.access}}async function b(e,t,a={},o={auth:!0}){let n={"content-type":"application/json","x-request-id":crypto.randomUUID(),"x-device-id":se()};if(o.auth){let p=await ne();if(!p)return{ok:!1,status:401,body:{code:"login",message:"Entre com o link enviado ao seu e-mail."}};n.authorization=`Bearer ${p}`}try{let p=await fetch(e,{method:"POST",headers:n,body:JSON.stringify({acao:t,...a})}),u=await p.json().catch(()=>({code:"internal",message:"Algo deu errado. Tente de novo."}));return p.status===401&&_(),{ok:p.ok&&u?.status==="ok",status:p.status,body:u}}catch{return{ok:!1,status:0,body:{code:"network",message:"N\xE3o conseguimos falar com o servidor. Confira sua internet e tente de novo."}}}}var f="https://dyepykxuygmmilchyybr.supabase.co/functions/v1/monetiza-app";var J="monetiza-app-v1",r=(()=>{try{let e=JSON.parse(sessionStorage.getItem(J)??"");if(e?.view)return e}catch{}return{view:{name:"inicio"},answers:{}}})(),Q=()=>{try{sessionStorage.setItem(J,JSON.stringify(r))}catch{}},i=document.getElementById("app"),M=document.getElementById("user");function l(e){r.view=e,Q(),W(),window.scrollTo(0,0),i.focus({preventScroll:!0})}var oe=e=>e?new Date(e).toLocaleDateString("pt-BR"):"";function w(e){return e.body.code==="login"?(_(),l({name:"login",msg:e.body.message}),!0):e.body.code==="outro_dispositivo"?(l({name:"fora"}),!0):e.body.code==="sem_acesso"?(l({name:"erro",code:"sem_acesso",message:e.body.message??""}),!0):!1}function K(e){M.innerHTML="",i.innerHTML=`
  <section class="hero narrow">
    <h1>Entrar no <em>Monetiza</em></h1>
    <p class="lead">Digite o e-mail que voc\xEA usou na compra. Enviamos um link de entrada, sem senha.</p>
    ${e?`<p class="err" role="alert">${s(e)}</p>`:""}
    <form id="f" class="login">
      <label for="email" class="count">Seu e-mail</label>
      <input type="email" id="email" autocomplete="email" inputmode="email" required value="${s(r.email??"")}">
      <button class="btn block" id="send">Receber link de entrada</button>
    </form>
    <p class="meta">Ainda n\xE3o tem acesso? <a href="/monetiza/">Conhe\xE7a o Monetiza</a>.</p>
  </section>${k}`,i.querySelector("#f").addEventListener("submit",async t=>{t.preventDefault();let a=i.querySelector("#email").value.trim(),o=i.querySelector("#send");o.disabled=!0,o.textContent="Enviando...";let n=await b(f,"link",{email:a},{auth:!1});r.email=a,n.ok?l({name:"enviado",email:a}):(o.disabled=!1,o.textContent="Receber link de entrada",K(n.body.message))})}function re(e){i.innerHTML=`<section class="hero narrow">
    <h1>Confira seu <em>e-mail</em></h1>
    <p class="lead">Se <b>${s(e)}</b> tem acesso ao Monetiza, o link de entrada chega em instantes. Abra o link neste mesmo aparelho.</p>
    <p class="meta">N\xE3o chegou? Confira o spam e a aba Promo\xE7\xF5es. O link vale por 1 hora.</p>
    <div class="actions"><button class="btn ghost" id="again">Usar outro e-mail</button></div>
  </section>${k}`,i.querySelector("#again").addEventListener("click",()=>l({name:"login"}))}function I(){M.innerHTML=r.email?'<button class="link small" id="out">Sair</button>':"",M.querySelector("#out")?.addEventListener("click",async()=>{await b(f,"sair"),_(),r={view:{name:"login"},answers:{}},l({name:"login"})})}function ie(){I();let e=Object.keys(r.answers).length>0;i.innerHTML=`
  <section class="hero narrow">
    <h1>Ol\xE1! Vamos criar suas <em>ideias</em>?</h1>
    <p class="lead">Responda 6 perguntas e receba 10 ideias de produtos, sua esteira e o primeiro produto detalhado.</p>
    <div class="cta">
      <button class="btn block" id="start">${e?"Continuar de onde parei":"Gerar novas ideias"}</button>
      <button class="btn ghost block" id="saved">Minhas ideias salvas</button>
    </div>
    <p class="meta">At\xE9 3 gera\xE7\xF5es por dia. Acesso v\xE1lido at\xE9 ${s(oe(r.expira))}.</p>
  </section>${k}`,i.querySelector("#start").addEventListener("click",()=>l({name:"q",i:C(r.answers)})),i.querySelector("#saved").addEventListener("click",()=>l({name:"salvas"}))}var T=!1;async function F(){T=!0,l({name:"wait"});let e=await b(f,"gerar",{answers:j(r.answers)});if(T=!1,e.ok){r.report=e.body.report,r.titulo=void 0,l({name:"result"});return}w(e)||l({name:"erro",code:e.body.code??"internal",message:e.body.message??"Algo deu errado. Tente de novo."})}function le(e){I();let t=r.report,a=new Map(t.ideas.map(c=>[c.id,c])),o=t.recommended_ladder,n=[a.get(o.entry_idea_id),a.get(o.base_idea_id),a.get(o.premium_idea_id)],p=new Map([[o.entry_idea_id,"Na sua esteira: entrada"],[o.base_idea_id,"Na sua esteira: base"],[o.premium_idea_id,"Na sua esteira: valor alto"]]),u=t.first_product,g=u?a.get(u.idea_id):void 0;i.innerHTML=`
  <article class="res">
    <h1>${r.titulo?s(r.titulo):"Suas 10 <em>ideias</em>"}</h1>
    <p class="summary">${s(t.profile.summary)}</p>
    <p class="area"><b>\xC1rea de oportunidade:</b> ${s(t.profile.opportunity_area)}</p>
    <div class="savebar">${e?'<span class="pick">Salvo em Minhas ideias</span>':'<button class="btn" id="save">Salvar estas ideias</button>'}
      <button class="btn ghost" id="saved">Minhas ideias salvas</button></div>

    <section aria-labelledby="h-ladder">
      <h2 id="h-ladder">Sua esteira recomendada</h2>
      <p class="intro">Um produto de cada categoria, em ordem: quem compra o primeiro est\xE1 pronto para o seguinte.</p>
      <div class="ladder">
        <div class="stairs">${n.map((c,m)=>`<div class="step t${m+1}"><span class="tier">${A[m].name}</span><b>${s(c?.name)}</b><small>${c?s(N(c)):""}</small></div>`).join("")}</div>
        <div class="stairs-base"></div>
        <p class="prog">${s(o.progression)}</p>
      </div>
    </section>

    ${u&&g?`<section aria-labelledby="h-first" class="first">
      <h2 id="h-first">Seu primeiro produto: ${s(g.name)}</h2>
      ${u.specific_audience?`<p class="intro"><b>Para quem:</b> ${s(u.specific_audience)}</p>`:""}
      <h3>O que entregar</h3><ul>${u.deliverables.map(c=>`<li>${s(c)}</li>`).join("")}</ul>
      <h3>A vers\xE3o mais simples para come\xE7ar</h3><p>${s(u.minimum_viable_version)}</p>
      <h3>Como testar antes de produzir tudo</h3><p>${s(u.validation_method)}</p>
    </section>`:""}

    ${A.map(c=>{let m=t.ideas.filter(h=>h.tier===c.tier);return`<section aria-labelledby="h-${c.cls}">
        <div class="tier-h"><h2 id="h-${c.cls}">${c.name}</h2><span class="n">${m.length} ${m.length===1?"ideia":"ideias"}</span></div>
        <p class="intro">${c.role}</p>
        <div class="ideas ${m.length>2?"cols":""}">${m.map(h=>H(h,c.cls,p.get(h.id)??"")).join("")}</div>
      </section>`}).join("")}

    <div class="again">
      <p>Os pre\xE7os e o potencial s\xE3o hip\xF3teses para voc\xEA testar com seu p\xFAblico, n\xE3o previs\xF5es de vendas.</p>
      <button class="btn ghost" id="new">Gerar novas ideias</button>
    </div>
  </article>`,i.querySelector("#save")?.addEventListener("click",async c=>{let m=c.currentTarget;m.disabled=!0,m.textContent="Salvando...";let h=t.ideas[0]?.name?`Ideias de ${new Date().toLocaleDateString("pt-BR")}`:"Minhas ideias",d=await b(f,"salvar",{titulo:h,resultado:t});if(d.ok){r.titulo=void 0,l({name:"result",salvoId:String(d.body.id)});return}w(d)||(m.disabled=!1,m.textContent="Salvar estas ideias",ce(d.body.message??"N\xE3o foi poss\xEDvel salvar."))}),i.querySelector("#saved").addEventListener("click",()=>l({name:"salvas"})),i.querySelector("#new").addEventListener("click",()=>{r.answers={},l({name:"q",i:0})})}function ce(e){let t=i.querySelector(".savebar");t&&t.insertAdjacentHTML("afterend",`<p class="err" role="alert">${s(e)}</p>`)}async function G(){I(),i.innerHTML='<section class="saved"><h1>Minhas ideias salvas</h1><p class="meta">Carregando...</p></section>';let e=await b(f,"listar");if(!e.ok){if(w(e))return;i.querySelector(".meta").textContent=e.body.message??"N\xE3o foi poss\xEDvel carregar.";return}let t=e.body.itens;i.innerHTML=`<section class="saved">
    <h1>Minhas ideias salvas</h1>
    ${t.length?`<ul class="savelist">${t.map(a=>`<li><button class="open" data-id="${s(a.id)}"><b>${s(a.titulo)}</b><small>${s(new Date(a.created_at).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"}))}</small></button>
      <button class="link small del" data-id="${s(a.id)}">Apagar</button></li>`).join("")}</ul>`:'<p class="meta">Voc\xEA ainda n\xE3o salvou nenhum resultado. Gere suas ideias e toque em \u201CSalvar estas ideias\u201D.</p>'}
    <div class="actions"><button class="btn" id="new">Gerar novas ideias</button><button class="btn ghost" id="back">Voltar</button></div>
  </section>${k}`,i.querySelectorAll(".open").forEach(a=>a.addEventListener("click",async()=>{a.disabled=!0;let o=await b(f,"abrir",{id:a.dataset.id});if(o.ok){let n=o.body.item;r.report=n.resultado,r.titulo=n.titulo,l({name:"result",salvoId:n.id})}else w(o)||(a.disabled=!1)})),i.querySelectorAll(".del").forEach(a=>a.addEventListener("click",async()=>{if(a.dataset.confirm!=="1"){a.dataset.confirm="1",a.textContent="Toque de novo para apagar";return}let o=await b(f,"apagar",{id:a.dataset.id});o.ok?G():w(o)})),i.querySelector("#new").addEventListener("click",()=>{r.answers={},l({name:"q",i:0})}),i.querySelector("#back").addEventListener("click",()=>l({name:"inicio"}))}function de(e){let t={limite:"Limite de hoje atingido",sem_acesso:"Acesso n\xE3o encontrado",network:"Sem conex\xE3o"};i.innerHTML=`<section class="problem" role="alert"><h1>${s(t[e.code]??"Algo deu errado")}</h1><p>${s(e.message)}</p>
    <div class="actions">${e.code==="sem_acesso"?'<a class="btn" href="/monetiza/">Conhecer o Monetiza</a>':e.code==="limite"?'<button class="btn" id="saved">Ver ideias salvas</button>':'<button class="btn" id="retry">Tentar de novo</button>'}
    <button class="btn ghost" id="home">Voltar ao in\xEDcio</button></div></section>${k}`,i.querySelector("#retry")?.addEventListener("click",F),i.querySelector("#saved")?.addEventListener("click",()=>l({name:"salvas"})),i.querySelector("#home").addEventListener("click",()=>e.code==="sem_acesso"?(_(),l({name:"login"})):l({name:"inicio"}))}function ue(){i.innerHTML=`<section class="problem" role="alert"><h1>Conta aberta em outro aparelho</h1>
    <p>Por seguran\xE7a, o Monetiza fica conectado em um aparelho por vez. Se foi voc\xEA, pode voltar a usar aqui: o outro aparelho ser\xE1 desconectado.</p>
    <div class="actions"><button class="btn" id="here">Usar neste aparelho</button><button class="btn ghost" id="out">Sair</button></div></section>${k}`,i.querySelector("#here").addEventListener("click",P),i.querySelector("#out").addEventListener("click",()=>{_(),l({name:"login"})})}async function P(){i.innerHTML='<section class="hero narrow"><p class="meta">Entrando...</p></section>';let e=await b(f,"entrar",{descricao:B()});if(!e.ok){w(e)||l({name:"erro",code:e.body.code??"internal",message:e.body.message??""});return}r.email=String(e.body.email),r.expira=String(e.body.expira_em),l(r.view.name==="login"||r.view.name==="enviado"||r.view.name==="fora"||r.view.name==="erro"?{name:"inicio"}:r.view)}function W(){let e=r.view;if(!E()&&e.name!=="enviado")return e.name!=="login"&&(r.view={name:"login"}),K(r.view.msg);if(e.name==="login")return P();if(e.name==="enviado")return re(e.email);if(e.name==="inicio")return ie();if(e.name==="q")return O(i,e.i,r.answers,{save:Q,lastLabel:"Gerar minhas ideias",back:()=>l(e.i===0?{name:"inicio"}:{name:"q",i:e.i-1}),next:()=>e.i<5?l({name:"q",i:e.i+1}):F()});if(e.name==="wait")return T?z(i,()=>r.view.name==="wait"):l({name:"erro",code:"interrompido",message:"A p\xE1gina foi recarregada antes de o resultado chegar. Suas respostas continuam salvas."});if(e.name==="result"&&r.report)return le(e.salvoId);if(e.name==="salvas")return void G();if(e.name==="erro")return de(e);if(e.name==="fora")return ue();l({name:"inicio"})}var me=location.hash.includes("access_token"),V=U();document.getElementById("brand").addEventListener("click",e=>{e.preventDefault(),E()&&l({name:"inicio"})});V?l({name:"login",msg:V}):E()&&(me||!r.email)?P():W();
