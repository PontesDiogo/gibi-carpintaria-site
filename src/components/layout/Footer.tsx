import logoGibiIcon from '../../assets/logos/logo-gibi-icon.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <span className="footer__logo">
            <img src={logoGibiIcon} alt="Logo Gibi Carpintaria" />
          </span>

          <div>
            <strong>Gibi Carpintaria</strong>
            <p>
              Soluções em madeira, portas, pisos, forros, batentes, guarnições
              e acabamentos para obras em Itu e região.
            </p>
          </div>
        </div>

        <div className="footer__links">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos realizados</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer__contact">
          <span>vendas@gibicarpintaria.com</span>
          <span>Itu/SP e região</span>
          <span>Atendimento para obras, reformas e acabamentos</span>
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © {currentYear} Gibi Carpintaria. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}