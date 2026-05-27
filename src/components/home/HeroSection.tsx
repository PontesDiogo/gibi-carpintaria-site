import type { CSSProperties } from 'react'
import { ArrowRight, Hammer, Mail } from 'lucide-react'
import heroImage from '../../assets/images/hero-gibi-carpintaria.png'

export function HeroSection() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero__content">
        <div className="hero__text">
          <span className="section-badge">Gibi Carpintaria</span>

          <h1>Madeira, acabamento e soluções para transformar sua obra</h1>

          <p>
            Fornecimento de portas, pisos, forros, madeiras, batentes,
            guarnições e soluções sob medida para clientes, profissionais e
            empresas em Itu e região.
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
              Ver serviços realizados
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero__highlights">
            <div>
              <strong>Itu e região</strong>
              <span>Atendimento local</span>
            </div>

            <div>
              <strong>Produtos em madeira</strong>
              <span>Portas, pisos e acabamentos</span>
            </div>

            <div>
              <strong>Orçamento facilitado</strong>
              <span>Contato direto com vendas</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div
            className="hero__image"
            style={{ '--hero-image': `url(${heroImage})` } as CSSProperties}
          >
            <div className="hero__floating-card">
              <Hammer size={24} />

              <div>
                <strong>Soluções para cada etapa da obra</strong>
                <span>
                  Madeira, acabamento e orientação para escolher os materiais
                  certos.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}