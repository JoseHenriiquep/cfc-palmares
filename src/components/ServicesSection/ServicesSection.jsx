import SectionHeading from '../SectionHeading/SectionHeading'
import { services } from '../../data/siteContent'
import './ServicesSection.css'

function ServicesSection({ onSelectRoute }) {
  return (
    <section className="section service-section" id="servicos">
      <div className="container">
        <SectionHeading
          className="service-heading"
          number="03"
          eyebrow="SERVIÇOS"
          title={<>Qual é o seu<br /><em>próximo passo?</em></>}
          intro="Da primeira habilitação à reciclagem, encontre orientação para o momento em que você está."
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <a className="service-card" href="#rota" onClick={() => onSelectRoute(service.routeId)} key={service.code}>
              <div className="service-card-head">
                <span className={`service-code service-code-${index}`}>{service.code}</span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-card-link">Ver esta rota <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
