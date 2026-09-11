import { expectations } from '../../data/siteContent'
import './ExpectationsSection.css'

function ExpectationsSection() {
  return (
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
  )
}

export default ExpectationsSection
