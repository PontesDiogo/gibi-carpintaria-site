import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoGibiIcon from '../../assets/logos/logo-gibi-icon.png'
import { company, createMailToLink } from '../../config/company'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <button
          className="navbar__brand"
          onClick={() => scrollToSection('inicio')}
          aria-label="Ir para o início"
        >
          <span className="navbar__logo">
            <img src={logoGibiIcon} alt={`Logo ${company.name}`} />
          </span>

          <div>
            <strong>{company.name}</strong>
            <small>{company.slogan}</small>
          </div>
        </button>

        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <button onClick={() => scrollToSection('inicio')}>Início</button>
          <button onClick={() => scrollToSection('servicos')}>Serviços</button>
          <button onClick={() => scrollToSection('sobre')}>Sobre</button>
          <button onClick={() => scrollToSection('projetos')}>Projetos</button>
          <button onClick={() => scrollToSection('contato')}>Contato</button>
        </nav>

        <a className="navbar__cta" href={createMailToLink()}>
          Solicitar orçamento
        </a>

        <button
          className="navbar__menu"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}