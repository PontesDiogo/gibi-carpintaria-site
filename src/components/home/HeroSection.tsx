import { ArrowRight, Hammer, Mail } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero__content">
        <div className="hero__text">
          <span className="section-badge">Gibi Carpintaria</span>

          <h1>Soluções em madeira para transformar sua obra</h1>

          <p>
            Fornecimento de portas, pisos, forros, madeiras, batentes,
            guarnições e acabamentos para clientes, empresas e obras em Itu e
            região.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="mailto:vendas@gibicarpintaria.com?subject=Solicitação de orçamento pelo site&body=Olá, vim pelo site da Gibi Carpintaria e gostaria de solicitar um orçamento."
            >
              Solicitar orçamento
              <Mail size={18} />
            </a>

            <a className="btn btn--secondary" href="#projetos">
              Ver projetos
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero__highlights">
            <div>
              <strong>Itu e região</strong>
              <span>Atendimento local</span>
            </div>

            <div>
              <strong>Madeiras e acabamentos</strong>
              <span>Soluções para obra</span>
            </div>

            <div>
              <strong>Orçamento facilitado</strong>
              <span>Contato direto com vendas</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image">
            <div className="hero__floating-card">
              <Hammer size={24} />
              <div>
                <strong>Projetos sob medida</strong>
                <span>Madeira, acabamento e orientação para sua obra.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}