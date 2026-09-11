import './Header.css'

function Header() {
  return (
    <div className="navigation-bar">
      <header className="site-header container">
        <a className="brand" href="#inicio" aria-label="CFC Palmares - início">
          <img src="/logo-sem-nome-sem-fundo.png" alt="" />
          <span>
            CFC <strong>PALMARES</strong>
          </span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a>
          <a href="#servicos">Serviços</a>
          <a href="#rota">Sua rota</a>
        </nav>
      </header>
    </div>
  )
}

export default Header
