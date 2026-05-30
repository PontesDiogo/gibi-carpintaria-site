import logoGibiIcon from '../../assets/logos/logo-gibi-icon.png'
import { company } from '../../config/company'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <span className="footer__logo">
            <img src={logoGibiIcon} alt={`Logo ${company.name}`} />
          </span>

          <div>
            <strong>{company.name}</strong>
            <p>
              Soluções em madeira, portas, pisos, forros, batentes, guarnições
              e acabamentos para obras em {company.region}.
            </p>
          </div>
        </div>

        <div className="footer__links">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos realizados</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer__contact">
          <span>{company.email}</span>
          <span>{company.region}</span>
          <span>Atendimento para obras, reformas e acabamentos</span>
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © {currentYear} {company.name}. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}