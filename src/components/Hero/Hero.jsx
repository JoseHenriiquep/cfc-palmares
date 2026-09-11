import Header from '../Header/Header'
import { whatsappLink } from '../../utils/whatsapp'
import './Hero.css'

function Hero({ onFindRoute }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-lines" />
      <Header />
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1>
            Você na <span>direção</span> certa.
          </h1>
          <p className="hero-description">
            Primeira CNH, novas categorias e orientação para cada etapa do caminho. Aprenda com segurança e avance com confiança.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={onFindRoute}>
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

        <div className="hero-visual" aria-label="Ilustração da rota de habilitação">
          <div className="visual-badge visual-badge-top">
            <span className="badge-icon">✓</span>
            <span>
              <strong>Rota acompanhada</strong>
              <small>do primeiro passo à prova</small>
            </span>
          </div>
          <div className="road-orbit">
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
  )
}

export default Hero
