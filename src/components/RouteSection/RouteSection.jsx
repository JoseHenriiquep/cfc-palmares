import SectionHeading from '../SectionHeading/SectionHeading'
import { routeOptions } from '../../data/siteContent'
import { whatsappLink } from '../../utils/whatsapp'
import './RouteSection.css'

function RouteSection({ selectedRoute, onSelectRoute }) {
  const activeRoute = routeOptions.find((route) => route.id === selectedRoute) ?? routeOptions[0]

  return (
    <section className="section route-section" id="rota">
      <div className="container">
        <SectionHeading
          className="route-heading"
          number="01"
          eyebrow="SUA JORNADA COMEÇA AQUI"
          title={<>Qual caminho você<br /><em>quer seguir?</em></>}
          intro="Escolha uma opção para visualizar o caminho. Depois, fale com a equipe e descubra as condições para o seu caso."
        />

        <div className="route-panel">
          <div className="route-tabs" role="tablist" aria-label="Escolha o seu objetivo">
            {routeOptions.map((route) => (
              <button
                className={`route-tab ${selectedRoute === route.id ? 'is-active' : ''}`}
                key={route.id}
                type="button"
                role="tab"
                aria-selected={selectedRoute === route.id}
                onClick={() => onSelectRoute(route.id)}
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
  )
}

export default RouteSection
