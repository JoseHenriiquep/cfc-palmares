import './ProofStrip.css'

function ProofStrip() {
  return (
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
  )
}

export default ProofStrip
