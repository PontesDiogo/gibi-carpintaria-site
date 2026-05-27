import { CheckCircle2 } from 'lucide-react'

const items = [
  'Atendimento para Itu e região',
  'Soluções para obras residenciais e comerciais',
  'Produtos em madeira, acabamento e construção',
  'Contato direto para solicitação de orçamento',
]

export function AboutSection() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__content">
        <div className="about__visual">
          <div className="about__image" />
        </div>

        <div className="about__text">
          <span className="section-badge">Sobre a Gibi</span>

          <h2>Experiência e soluções em madeira para cada etapa da obra</h2>

          <p>
            A Gibi Carpintaria atua com fornecimento de produtos e soluções em
            madeira, auxiliando clientes, profissionais e empresas na escolha
            dos materiais ideais para portas, pisos, forros, acabamentos e
            projetos sob medida.
          </p>

          <p>
            Nosso objetivo é unir qualidade, atendimento próximo e praticidade
            para que cada cliente encontre a solução certa para sua necessidade.
          </p>

          <div className="about__list">
            {items.map((item) => (
              <div className="about__item" key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}