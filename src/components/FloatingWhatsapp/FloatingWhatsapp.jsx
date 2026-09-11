import { whatsappLink } from '../../utils/whatsapp'
import './FloatingWhatsapp.css'

function FloatingWhatsapp() {
  return (
    <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Falar com a CFC Palmares pelo WhatsApp">
      <span className="floating-whatsapp-dot" />
      <span>WhatsApp</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export default FloatingWhatsapp
