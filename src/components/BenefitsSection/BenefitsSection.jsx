import SectionHeading from '../SectionHeading/SectionHeading'
import { benefits } from '../../data/siteContent'
import './BenefitsSection.css'

function BenefitsSection() {
  return (
    <section className="section benefits-section" id="beneficios">
      <div className="container">
        <SectionHeading
          className="benefits-heading"
          number="02"
          eyebrow="POR QUE ESCOLHER A CFC PALMARES?"
          title={<>Benefícios que fazem<br /><em>a diferença para você.</em></>}
          intro="Mais do que ensinar a dirigir, a gente prepara você para tomar decisões com segurança e seguir em frente."
        />
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
  )
}

export default BenefitsSection
