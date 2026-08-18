import { useRef, useState } from 'react'

const whatsappNumber = '5581992799266'

const whatsappLink = (topic = 'matrícula') =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Olá! Vim pelo site do CFC Palmares e gostaria de saber mais sobre ${topic}.`,
  )}`

const routeOptions = [
  {
    id: 'primeira',
    label: 'Primeira CNH',
    short: '01',
    eyebrow: 'Comece do jeito certo',
    title: 'Sua primeira habilitação com acompanhamento de verdade.',
    description:
      'Escolha a categoria que combina com o seu momento e conte com uma equipe preparada para conduzir cada etapa.',
    meta: 'Categorias A, B e AB',
    categories: ['A', 'B', 'AB'],
    steps: [
      ['01', 'Escolha seu caminho', 'Defina a categoria ideal para você.'],
      ['02', 'Aprenda com segurança', 'Teoria e prática com instrutores qualificados.'],
      ['03', 'Chegue preparado', 'Mais confiança para encarar a prova.'],
      ['04', 'Siga em frente', 'A sua CNH começa aqui.'],
    ],
  },
  {
    id: 'classificacao',
    label: 'Classificação',
    short: '02',
    eyebrow: 'Amplie suas possibilidades',
    title: 'Uma nova categoria para abrir novos caminhos.',
    description:
      'Para quem já dirige e quer evoluir: orientação clara, horários flexíveis e treinamento focado no seu objetivo.',
    meta: 'Categorias A, B e D',
    categories: ['A', 'B', 'D'],
    steps: [
      ['01', 'Entenda a mudança', 'Veja o que a nova categoria exige.'],
      ['02', 'Organize sua rotina', 'Encontre horários que cabem no seu dia.'],
      ['03', 'Pratique com foco', 'Treine os pontos mais importantes.'],
      ['04', 'Avance na direção certa', 'Mais autonomia para o próximo passo.'],
    ],
  },
  {
    id: 'renovacao',
    label: 'Renovação',
    short: '03',
    eyebrow: 'Mantenha tudo em dia',
    title: 'Renove sua CNH sem transformar isso em complicação.',
    description:
      'Receba as orientações necessárias para resolver sua renovação com clareza e tranquilidade.',
    meta: 'Atendimento orientado',
    categories: ['CNH', 'PRAZO'],
    steps: [
      ['01', 'Confira sua situação', 'Entenda os próximos prazos e documentos.'],
      ['02', 'Receba orientação', 'Tire suas dúvidas com quem entende.'],
      ['03', 'Resolva cada etapa', 'Siga o processo com mais segurança.'],
      ['04', 'Continue dirigindo', 'Sua rotina segue no caminho certo.'],
    ],
  },
  {
    id: 'reciclagem',
    label: 'Reciclagem',
    short: '04',
    eyebrow: 'Recomece com responsabilidade',
    title: 'Um novo começo para voltar à direção certa.',
    description:
      'Curso de reciclagem com atendimento acolhedor, conteúdo objetivo e suporte em cada etapa.',
    meta: 'Curso de reciclagem',
    categories: ['CURSO', 'SUPORTE'],
    steps: [
      ['01', 'Converse com a equipe', 'Explique sua situação e tire dúvidas.'],
      ['02', 'Organize o curso', 'Receba as orientações para começar.'],
      ['03', 'Retome o aprendizado', 'Conteúdo para uma direção mais consciente.'],
      ['04', 'Siga mais preparado', 'Volte a avançar com responsabilidade.'],
    ],
  },
]

const benefits = [
  {
    number: '01',
    title: 'Alto índice de aprovação',
    text: 'Uma preparação consistente para você chegar mais confiante às avaliações.',
    accent: 'yellow',
  },
  {
    number: '02',
    title: 'Instrutores qualificados',
    text: 'Profissionais que acompanham o seu ritmo e explicam cada etapa com clareza.',
    accent: 'red',
  },
  {
    number: '03',
    title: 'Horários flexíveis',
    text: 'Mais possibilidades para encaixar sua formação na rotina real.',
    accent: 'white',
  },
]

const services = [
  {
    code: 'A',
    title: 'Categoria A',
    text: 'Liberdade sobre duas rodas, com preparação segura e objetiva.',
  },
  {
    code: 'B',
    title: 'Categoria B',
    text: 'Mais autonomia para dirigir carro com responsabilidade.',
  },
  {
    code: 'AB',
    title: 'Categorias A + B',
    text: 'Uma formação completa para ampliar suas possibilidades.',
  },
  {
    code: 'D',
    title: 'Classificação D',
    text: 'O próximo passo para quem quer avançar profissionalmente.',
  },
]

const expectations = [
  {
    label: 'Clareza',
    text: 'Você entende cada etapa antes de começar.',
  },
  {
    label: 'Cuidado',
    text: 'Seu aprendizado é acompanhado de perto.',
  },
  {
    label: 'Confiança',
    text: 'Você se prepara para dirigir com mais tranquilidade.',
  },
]

function App() {
  const [selectedRoute, setSelectedRoute] = useState('primeira')
  const [heroPointer, setHeroPointer] = useState({ x: 50, y: 50 })
  const heroRef = useRef(null)
  const activeRoute = routeOptions.find((route) => route.id === selectedRoute) ?? routeOptions[0]

  const handleHeroPointerMove = (event) => {
    if (!heroRef.current || event.pointerType === 'touch') return

    const bounds = heroRef.current.getBoundingClientRect()
    setHeroPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    })
  }

  const scrollToRoute = () => {
    document.getElementById('rota')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span className="availability">
            <span className="availability-dot" /> Atendimento em Palmares-PE
          </span>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            (81) 99279-9266 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <header className="site-header container">
        <a className="brand" href="#inicio" aria-label="CFC Palmares - início">
          <img src="/logo-sem-nome-sem-fundo.png" alt="" />
          <span>
            CFC <strong>PALMARES</strong>
          </span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a>
          <a href="#servicos">Serviços</a>
          <a href="#rota">Sua rota</a>
        </nav>
        <a className="header-cta" href={whatsappLink()} target="_blank" rel="noreferrer">
          Falar com a equipe <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section
          ref={heroRef}
          className="hero"
          id="inicio"
          onPointerMove={handleHeroPointerMove}
          style={{ '--pointer-x': `${heroPointer.x}%`, '--pointer-y': `${heroPointer.y}%` }}
        >
          <div className="hero-glow" />
          <div className="hero-grid-lines" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow light-eyebrow">
                <span className="eyebrow-mark">✦</span> CFC PALMARES · AUTO ESCOLA
              </p>
              <h1>
                Você na <span>direção</span> certa.
              </h1>
              <p className="hero-description">
                Primeira CNH, novas categorias e orientação para cada etapa do caminho. Aprenda com segurança e avance com confiança.
              </p>
              <div className="hero-actions">
                <button className="button button-primary" type="button" onClick={scrollToRoute}>
                  Encontrar minha rota <span aria-hidden="true">→</span>
                </button>
                <a className="text-link light-link" href={whatsappLink()} target="_blank" rel="noreferrer">
                  Quero saber os valores <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="hero-footnote">
                <span aria-hidden="true">⌁</span> Atendimento próximo, rotina flexível e um caminho claro para começar.
              </p>
            </div>

            <div className="hero-visual" aria-label="Visual interativo da rota de habilitação">
              <div className="visual-badge visual-badge-top">
                <span className="badge-icon">✓</span>
                <span>
                  <strong>Rota acompanhada</strong>
                  <small>do primeiro passo à prova</small>
                </span>
              </div>
              <div className="road-orbit" style={{ transform: `translate(${(heroPointer.x - 50) * 0.04}px, ${(heroPointer.y - 50) * 0.04}px)` }}>
                <div className="orbit-sun" />
                <div className="orbit-road orbit-road-one" />
                <div className="orbit-road orbit-road-two" />
                <div className="orbit-sign orbit-sign-yellow">A</div>
                <div className="orbit-sign orbit-sign-red">↘</div>
                <div className="orbit-car">▰</div>
                <span className="orbit-label orbit-label-start">COMEÇO</span>
                <span className="orbit-label orbit-label-finish">SEU DESTINO</span>
              </div>
              <div className="visual-badge visual-badge-bottom">
                <span className="badge-route">A</span>
                <span className="badge-route">B</span>
                <span className="badge-route">AB</span>
                <span className="badge-route badge-route-muted">D</span>
                <span className="badge-copy">vários caminhos<br />para avançar</span>
              </div>
            </div>
          </div>
          <div className="hero-scroll-cue" aria-hidden="true">
            <span>desça para escolher</span>
            <span className="scroll-line" />
          </div>
        </section>

        <section className="proof-strip" aria-label="Destaques da CFC Palmares">
          <div className="container proof-grid">
            <div className="proof-item">
              <span className="proof-symbol">✦</span>
              <span><strong>Palmares-PE</strong> atendimento local</span>
            </div>
            <div className="proof-item">
              <span className="proof-symbol">◌</span>
              <span><strong>Horários flexíveis</strong> para sua rotina</span>
            </div>
            <div className="proof-item">
              <span className="proof-symbol">✓</span>
              <span><strong>Instrutores qualificados</strong> ao seu lado</span>
            </div>
          </div>
        </section>

        <section className="section route-section" id="rota">
          <div className="container">
            <div className="section-heading route-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-mark">01</span> SUA JORNADA COMEÇA AQUI</p>
                <h2>Qual caminho você<br /><em>quer seguir?</em></h2>
              </div>
              <p className="section-intro-copy">
                Escolha uma opção para visualizar o caminho. Depois, fale com a equipe e descubra as condições para o seu caso.
              </p>
            </div>

            <div className="route-panel">
              <div className="route-tabs" role="tablist" aria-label="Escolha o seu objetivo">
                {routeOptions.map((route) => (
                  <button
                    className={`route-tab ${selectedRoute === route.id ? 'is-active' : ''}`}
                    key={route.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedRoute === route.id}
                    onClick={() => setSelectedRoute(route.id)}
                  >
                    <span>{route.short}</span> {route.label}
                  </button>
                ))}
              </div>

              <div className="route-summary">
                <div>
                  <p className="eyebrow route-eyebrow">{activeRoute.eyebrow}</p>
                  <h3>{activeRoute.title}</h3>
                  <p>{activeRoute.description}</p>
                  <div className="category-row">
                    <span className="category-label">{activeRoute.meta}</span>
                    {activeRoute.categories.map((category) => <span className="category-chip" key={category}>{category}</span>)}
                  </div>
                </div>
                <a className="button button-dark" href={whatsappLink(activeRoute.label.toLowerCase())} target="_blank" rel="noreferrer">
                  Conversar sobre este caminho <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="route-track" key={activeRoute.id}>
                <div className="route-track-line" />
                {activeRoute.steps.map(([number, title, description], index) => (
                  <div className="route-step" key={number}>
                    <div className={`route-node ${index === activeRoute.steps.length - 1 ? 'route-node-last' : ''}`}>{index === activeRoute.steps.length - 1 ? '✓' : number}</div>
                    <div className="route-step-copy">
                      <span>{index === activeRoute.steps.length - 1 ? 'destino' : `etapa ${number}`}</span>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section benefits-section" id="beneficios">
          <div className="container">
            <div className="section-heading benefits-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-mark">02</span> POR QUE PALMARES?</p>
                <h2>Benefícios que fazem<br /><em>diferença na rota.</em></h2>
              </div>
              <p className="section-intro-copy">
                Mais do que ensinar a dirigir, a gente prepara você para tomar decisões com segurança e seguir em frente.
              </p>
            </div>
            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <article className={`benefit-card benefit-${benefit.accent}`} key={benefit.number}>
                  <div className="card-topline"><span>{benefit.number}</span><span className="card-arrow">↗</span></div>
                  <div className="benefit-icon" aria-hidden="true">{benefit.number === '01' ? '✓' : benefit.number === '02' ? '◉' : '↝'}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-section" id="servicos">
          <div className="container">
            <div className="section-heading service-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-mark">03</span> SERVIÇOS</p>
                <h2>Qual é o seu<br /><em>próximo passo?</em></h2>
              </div>
              <p className="section-intro-copy">
                Da primeira habilitação à reciclagem, encontre orientação para o momento em que você está.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <a className="service-card" href={whatsappLink(service.title.toLowerCase())} target="_blank" rel="noreferrer" key={service.code}>
                  <div className="service-card-head">
                    <span className={`service-code service-code-${index}`}>{service.code}</span>
                    <span className="service-arrow" aria-hidden="true">↗</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-card-link">Quero saber mais <span aria-hidden="true">→</span></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section">
          <div className="container story-layout">
            <div className="story-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85"
                alt="Carro percorrendo uma estrada ao pôr do sol"
              />
              <span className="image-note">Imagem ilustrativa</span>
              <div className="story-stamp"><span>+</span><strong>direção</strong><small>com mais<br />confiança</small></div>
            </div>
            <div className="story-copy">
              <p className="eyebrow"><span className="eyebrow-mark">04</span> A EXPERIÊNCIA PALMARES</p>
              <h2>Seu objetivo merece<br /><em>um caminho claro.</em></h2>
              <p>
                Escolher uma autoescola é escolher quem vai acompanhar um momento importante da sua vida. Por isso, cada conversa começa com escuta, cada aula tem um propósito e cada etapa é explicada sem complicação.
              </p>
              <div className="story-list">
                <div><span>01</span><strong>Atendimento próximo</strong><small>Você fala com pessoas que entendem o seu momento.</small></div>
                <div><span>02</span><strong>Preparação responsável</strong><small>Aprendizado para a prova e para a vida no trânsito.</small></div>
                <div><span>03</span><strong>Flexibilidade real</strong><small>Mais espaço para encaixar a formação na sua rotina.</small></div>
              </div>
              <a className="text-link dark-link" href={whatsappLink()} target="_blank" rel="noreferrer">Conversar com a CFC Palmares <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section expectations-section">
          <div className="container">
            <div className="expectations-intro">
              <p className="eyebrow"><span className="eyebrow-mark">05</span> DE PESSOA PARA PESSOA</p>
              <h2>O que você pode<br /><em>esperar da gente.</em></h2>
              <p>Conteúdos provisórios para representar a sensação que queremos entregar em cada atendimento. Em breve, eles podem ser substituídos por depoimentos reais de alunos.</p>
            </div>
            <div className="expectation-grid">
              {expectations.map((expectation, index) => (
                <article className="expectation-card" key={expectation.label}>
                  <span className="quote-mark">“</span>
                  <p>{expectation.text}</p>
                  <div><span>0{index + 1}</span><strong>{expectation.label}</strong></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-shape final-cta-shape-one" />
          <div className="final-cta-shape final-cta-shape-two" />
          <div className="container final-cta-inner">
            <p className="eyebrow light-eyebrow"><span className="eyebrow-mark">✦</span> PRONTO PARA COMEÇAR?</p>
            <h2>O próximo passo<br />pode ser <em>agora.</em></h2>
            <p>Fale com a equipe da CFC Palmares, conte o que você precisa e descubra o melhor caminho para o seu objetivo.</p>
            <a className="button button-light" href={whatsappLink()} target="_blank" rel="noreferrer">Quero saber os valores <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo-sem-fundo.png" alt="CFC Palmares Auto Escola" />
            <p>Você na direção certa.</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Fale com a gente</span>
            <a href={whatsappLink()} target="_blank" rel="noreferrer">(81) 99279-9266</a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer">Enviar uma mensagem ↗</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Onde estamos</span>
            <address>Avenida Professor Miguel Jaceli, nº 17<br />São José, Palmares-PE<br />Brasil</address>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} CFC Palmares</span>
          <span>Primeira CNH · Classificação · Renovação · Reciclagem</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Falar com a CFC Palmares pelo WhatsApp">
        <span className="floating-whatsapp-dot" />
        <span>WhatsApp</span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}

export default App
