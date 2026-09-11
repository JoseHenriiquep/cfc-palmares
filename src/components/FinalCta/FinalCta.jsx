import { whatsappLink } from '../../utils/whatsapp'
import './FinalCta.css'

function FinalCta() {
  return (
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
  )
}

export default FinalCta
