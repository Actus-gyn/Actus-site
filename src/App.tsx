import { useEffect, useState } from 'react'

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
const Plus = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>

function useMotion() {
  useEffect(() => {
    const root = document.documentElement
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty('--mouse-x', `${event.clientX}px`)
      root.style.setProperty('--mouse-y', `${event.clientY}px`)
      root.style.setProperty('--mx', `${(event.clientX / innerWidth - .5).toFixed(3)}`)
      root.style.setProperty('--my', `${(event.clientY / innerHeight - .5).toFixed(3)}`)
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: .1 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    addEventListener('pointermove', onPointer, { passive: true })
    if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 100)
    return () => { observer.disconnect(); removeEventListener('pointermove', onPointer) }
  }, [])
}

function Brand() {
  return <span className="brand"><img src="/actus-logo-neon.svg" alt="" /><img src="/actus-text.svg" alt="Actus" /></span>
}

function Button({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <a href="#contato" className={`button ${dark ? 'dark' : ''}`}><span>{children}</span><Arrow /></a>
}

function Header() {
  return <header className="header"><a href="#top"><Brand /></a><nav><a href="#ecossistema">Para quem</a><a href="#produto">Produto</a><a href="#jornada">Como funciona</a><a href="#duvidas">Dúvidas</a></nav><div className="header-actions"><a href="https://app.actus.fit">Entrar</a><Button>Conhecer a Actus</Button></div></header>
}

function Dashboard() {
  return <div className="dashboard-ui"><div className="dash-side"><img src="/actus-logo-neon.svg" alt="" />{[0,1,2,3,4].map(i=><i key={i}/>)}</div><div className="dash-main"><div className="dash-head"><span><small>VISÃO GERAL</small><strong>Bom dia, Marina</strong></span><button>+ Convidar aluno</button></div><div className="dash-numbers"><div><small>ALUNOS ATIVOS</small><strong>24</strong><span className="bars">{[1,2,3,4,5,6].map(i=><i key={i}/>)}</span></div><div><small>TREINOS HOJE</small><strong>08</strong><em>6 concluídos</em></div><div><small>ADESÃO</small><strong>82%</strong><em>últimos 30 dias</em></div></div><div className="dash-list"><b>Movimento recente</b>{['Clara terminou o treino','João iniciou inferiores','Luiza bateu uma meta'].map(t=><span key={t}><i/>{t}<small>agora</small></span>)}</div></div></div>
}

function StudentPhone() {
  return <div className="phone-ui"><div className="phone-status">09:41 <i/></div><div className="phone-hello"><img src="/actus-logo-neon.svg" alt=""/><span>Olá, Clara</span></div><small>SEU DIA</small><h3>Treino de pernas hoje</h3><div className="phone-workout"><small>PRÓXIMO TREINO</small><b>Inferiores A</b><span>6 exercícios <button>Começar</button></span></div><div className="week">{['S','T','Q','Q','S'].map((d,i)=><i className={i<3?'active':''} key={`${d}${i}`}>{d}</i>)}</div><div className="phone-line"><span>Sequência atual</span><b>06 dias</b></div><div className="phone-line"><span>Desafio do mês</span><b>4º lugar</b></div></div>
}

function WorkoutBuilder() {
  return <div className="builder-ui"><div className="workspace-bar"><span><small>NOVO TREINO</small><b>Inferiores A</b></span><button>Salvar treino</button></div><div className="builder-body"><main><small>EXERCÍCIOS DO TREINO</small>{[['01','Agachamento livre','4 × 12'],['02','Leg press 45°','4 × 10'],['03','Cadeira extensora','3 × 12'],['04','Mesa flexora','3 × 12']].map(([n,x,s])=><div className="exercise-row" key={n}><b>{n}</b><span>{x}<small>Membros inferiores</small></span><strong>{s}</strong><i/></div>)}</main><aside><small>CATÁLOGO DE EXERCÍCIOS</small><input value="Buscar exercício" readOnly/>{['Elevação pélvica','Afundo','Stiff'].map(x=><span key={x}><i/>{x}<button><Plus/></button></span>)}</aside></div></div>
}

function Hero() {
  return <section className="hero" id="top"><Header/><div className="hero-grid"/><div className="hero-content reveal"><h1>PROFISSIONAIS<br/>E ALUNOS.<br/><span>NO MESMO RITMO.</span></h1><p>A plataforma que conecta personal trainers e alunos em torno de treinos claros, acompanhamento próximo e evolução contínua.</p><div className="hero-actions"><Button>Quero conhecer</Button><a href="#produto">Explorar o produto <Arrow/></a></div><div className="hero-proof"><span>PERSONAL TRAINER</span><i/><span>ALUNO</span><i/><span>EM MOVIMENTO</span></div></div><div className="hero-products"><div className="dash-float"><Dashboard/></div><div className="phone-float"><StudentPhone/></div><span className="orbit o1">TREINOS</span><span className="orbit o2">ACOMPANHAMENTO</span><span className="orbit o3">DESAFIOS</span></div><div className="scroll-cue">CONTINUE PARA CONHECER <i/></div></section>
}

const roles = [
  { n:'01', role:'PERSONAL TRAINER', title:'Orientação que ganha escala.', text:'Crie treinos, atribua planos, acompanhe sessões e veja quem precisa da sua atenção.', items:['Editor de treinos','Catálogo de exercícios','Adesão dos alunos'] },
  { n:'02', role:'ALUNO', title:'Clareza para continuar.', text:'Treino, desafios e progresso reunidos em uma experiência simples para o dia a dia.', items:['Plano do dia','Execução guiada','Desafios e progresso'] },
]

function Ecosystem() {
  return <section className="ecosystem" id="ecossistema"><div className="section-intro reveal"><span>DUAS EXPERIÊNCIAS. UMA CONEXÃO.</span><h2>UM ECOSSISTEMA<br/><em>FEITO PARA MOVER.</em></h2><p>Cada pessoa enxerga exatamente o que precisa. Toda ação permanece conectada ao mesmo objetivo.</p></div><div className="role-rail">{roles.map(r=><div key={r.role}><b>{r.n}</b><span>{r.role}</span><Arrow/></div>)}</div><div className="role-stories">{roles.map((role,index)=><article className="role-story reveal" key={role.role}><div className="role-copy"><small>{role.role}</small><h3>{role.title}</h3><p>{role.text}</p>{role.items.map(x=><span key={x}><i/>{x}</span>)}</div><div className="role-visual">{index===0?<Dashboard/>:<div className="student-duo"><StudentPhone/><StudentPhone/></div>}</div></article>)}</div></section>
}

const productTabs = ['Visão geral','Montar treino','Alunos e convites'] as const
function ProductShowcase() {
  const [tab,setTab]=useState<(typeof productTabs)[number]>('Visão geral')
  return <section className="product-showcase" id="produto"><div className="product-heading reveal"><span>WORKSPACE PROFISSIONAL</span><h2>TUDO PARA ORIENTAR.<br/><em>EM UM SÓ LUGAR.</em></h2><p>Da primeira conexão ao acompanhamento diário, a Actus organiza o trabalho sem afastar você das pessoas.</p></div><div className="product-tabs">{productTabs.map(t=><button className={t===tab?'active':''} onClick={()=>setTab(t)} key={t}>{t}</button>)}</div><div className="product-screen" key={tab}>{tab==='Visão geral'?<Dashboard/>:tab==='Montar treino'?<WorkoutBuilder/>:<StudentsPanel/>}</div><div className="product-note"><span>01 · CRIE</span><span>02 · ATRIBUA</span><span>03 · ACOMPANHE</span><span>04 · AJUSTE</span></div></section>
}

function StudentsPanel() {
  return <div className="students-ui"><div className="workspace-bar"><span><small>GESTÃO</small><b>Alunos conectados</b></span><button>+ Gerar convite</button></div><div className="student-table"><div className="table-head"><span>ALUNO</span><span>TREINO ATIVO</span><span>ÚLTIMA ATIVIDADE</span><span>STATUS</span></div>{[['Clara Mendes','Inferiores A','Hoje, 08:42','Em movimento'],['João Ribeiro','Hipertrofia A/B','Ontem, 19:20','Acompanhar'],['Luiza Ferreira','Corrida 5K','Hoje, 06:10','Em movimento'],['Marina Costa','Força inicial','3 dias atrás','Acompanhar']].map((r,i)=><div className="table-row" key={r[0]}><span><i>{r[0][0]}</i>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><b className={i%2?'warn':''}>{r[3]}</b></div>)}</div></div>
}

function StudentSection() {
  return <section className="student-section"><div className="student-copy reveal"><span>O PLANO CHEGA. O ALUNO SE MOVE.</span><h2>CLAREZA PARA<br/>TREINAR HOJE.<br/><em>MOTIVAÇÃO PARA VOLTAR.</em></h2><p>O aluno recebe o treino, executa cada sessão, acompanha sua sequência e participa dos desafios criados pelo personal.</p><ul><li><b>01</b> Veja o treino do dia</li><li><b>02</b> Execute exercícios e séries</li><li><b>03</b> Acompanhe progresso e desafios</li></ul><Button dark>Conhecer a experiência do aluno</Button></div><div className="student-composition"><div className="student-focus"><StudentPhone/></div><div className="session-card"><small>SESSÃO EM ANDAMENTO</small><h4>Agachamento livre</h4><strong>03 <span>/ 04 séries</span></strong><div><button>10 reps</button><button>40 kg</button></div><i/></div><span className="student-tag t1">SESSÕES</span><span className="student-tag t2">PROGRESSO</span><span className="student-tag t3">CONQUISTAS</span></div></section>
}

function HumanSection() {
  return <section className="human"><div className="human-copy reveal"><span>TECNOLOGIA COM PRESENÇA</span><h2>MENOS TEMPO<br/>ORGANIZANDO.<br/><em>MAIS TEMPO ORIENTANDO.</em></h2><p>A Actus cuida do fluxo para personal trainers estarem onde realmente fazem diferença: ao lado dos seus alunos.</p><Button>Quero conhecer</Button></div><div className="human-signal"><span>PLANEJAR</span><i/><span>ORIENTAR</span><i/><span>ACOMPANHAR</span></div></section>
}

function Journey() {
  const steps=[['01','CONVITE','O personal gera o vínculo.'],['02','TREINO','O plano chega ao aluno.'],['03','EXECUÇÃO','O aluno segue o treino no app.'],['04','ACOMPANHAMENTO','A atividade vira contexto.'],['05','EVOLUÇÃO','O plano evolui junto com a pessoa.']]
  return <section className="journey" id="jornada"><div className="section-intro reveal"><span>UMA JORNADA CONECTADA</span><h2>DO CONVITE<br/><em>À EVOLUÇÃO.</em></h2></div><div className="journey-path"><i className="moving-dot"/>{steps.map(([n,t,p])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{p}</p></article>)}</div></section>
}

function Engagement() {
  return <section className="engagement"><div className="engagement-visual"><div className="rank-card"><small>DESAFIO ATIVO</small><h3>30 dias em movimento</h3><div className="rank-progress"><i/><span>12 / 30 dias</span></div>{[['01','Luiza','18 dias'],['02','Clara','16 dias'],['03','João','14 dias']].map(r=><div className="rank-row" key={r[0]}><b>{r[0]}</b><i>{r[1][0]}</i><span>{r[1]}</span><strong>{r[2]}</strong></div>)}</div><div className="streak-card"><span>SEQUÊNCIA ATUAL</span><strong>07</strong><b>DIAS</b>{['S','T','Q','Q','S','S','D'].map((d,i)=><i className={i<6?'done':''} key={`${d}${i}`}>{d}</i>)}</div></div><div className="engagement-copy reveal"><span>ENGAJAMENTO QUE FAZ SENTIDO</span><h2>MOTIVAÇÃO<br/>QUE <em>CONTINUA.</em></h2><p>Desafios transformam consistência em uma experiência visível. O aluno acompanha seu ritmo, participa do ranking e reconhece cada conquista.</p><div className="inline-features"><span>Desafios criados pelo profissional</span><span>Ranking e progresso</span><span>Sequências e conquistas</span></div></div></section>
}

const faqs=[['Para quem a Actus foi criada?','Para personal trainers que querem organizar e acompanhar seu trabalho e para alunos que precisam de clareza para manter o movimento.'],['Como o aluno se conecta ao personal?','O personal gera um convite. Ao aceitar, o aluno cria o vínculo e passa a receber os treinos atribuídos.'],['O aluno consegue executar o treino pelo app?','Sim. Ele visualiza o treino do dia, abre exercícios e instruções, inicia a sessão e acompanha o próprio progresso.'],['É possível criar desafios?','Sim. Personal trainers podem criar desafios, acompanhar participação e usar ranking e progresso para manter o engajamento.'],['A Actus funciona no computador e no celular?','A gestão profissional acontece pela experiência web e mobile. O aluno acompanha sua rotina pelo aplicativo.']]
function FAQ() {
  const [open,setOpen]=useState(0)
  return <section className="faq" id="duvidas"><div className="faq-title reveal"><span>ANTES DE COMEÇAR</span><h2>DÚVIDAS,<br/><em>RESPONDIDAS.</em></h2><p>A Actus foi pensada para conectar o trabalho do profissional à rotina real do aluno.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><button className={open===i?'open':''} onClick={()=>setOpen(open===i?-1:i)} key={q}><span><b>0{i+1}</b>{q}<Plus/></span><p>{a}</p></button>)}</div></section>
}

function Footer() {
  return <><section className="cta" id="contato"><div className="cta-lines"/><div className="reveal"><span>PERSONAL TRAINER · ALUNO</span><h2>VAMOS COLOCAR<br/>MAIS GENTE<br/><em>EM MOVIMENTO?</em></h2><p>Conheça a Actus e descubra uma nova forma de orientar, acompanhar e evoluir.</p><Button dark>Quero conhecer a Actus</Button></div></section><footer><Brand/><div><a href="#ecossistema">Para quem</a><a href="#produto">Produto</a><a href="#jornada">Como funciona</a><a href="#duvidas">Dúvidas</a></div><span>© 2026 Actus</span></footer></>
}

export default function App(){useMotion();return <><Hero/><Ecosystem/><ProductShowcase/><StudentSection/><HumanSection/><Journey/><Engagement/><FAQ/><Footer/></>}
