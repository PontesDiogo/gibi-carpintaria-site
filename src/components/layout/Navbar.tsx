import { Menu, X } from 'lucide-react'
import { useState } from 'react'

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
          <span className="navbar__logo">G</span>

          <div>
            <strong>Gibi Carpintaria</strong>
            <small>Madeira, obra e acabamento</small>
          </div>
        </button>

        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <button onClick={() => scrollToSection('inicio')}>Início</button>
          <button onClick={() => scrollToSection('servicos')}>Serviços</button>
          <button onClick={() => scrollToSection('sobre')}>Sobre</button>
          <button onClick={() => scrollToSection('projetos')}>Projetos</button>
          <button onClick={() => scrollToSection('contato')}>Contato</button>
        </nav>

        <a
          className="navbar__cta"
          href="mailto:vendas@gibicarpintaria.com?subject=Solicitação de orçamento pelo site&body=Olá, vim pelo site da Gibi Carpintaria e gostaria de solicitar um orçamento."
        >
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