import './StorySection.css'

function StorySection() {
  return (
    <section className="story-section">
      <div className="container story-layout">
        <div className="story-image-wrap">
          <img
            src="/cfc_palmares.png"
            alt="Carro percorrendo uma estrada ao pôr do sol"
          />
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
        </div>
      </div>
    </section>
  )
}

export default StorySection
