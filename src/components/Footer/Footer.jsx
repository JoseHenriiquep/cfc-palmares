import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/logo-sem-fundo.png" alt="CFC Palmares Auto Escola" />
          <p>Você na direção certa.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Fale com a gente</span>
          <span>(81) 99279-9266</span>
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
  )
}

export default Footer
