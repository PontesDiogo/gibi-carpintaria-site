import {
  DoorOpen,
  Grid2X2,
  Hammer,
  Layers,
  PackageCheck,
  Ruler,
} from 'lucide-react'

const services = [
  {
    icon: DoorOpen,
    title: 'Portas',
    description:
      'Fornecimento de portas de madeira para diferentes estilos de obras e acabamentos.',
  },
  {
    icon: Layers,
    title: 'Forros',
    description:
      'Soluções em madeira para forros, trazendo acabamento, conforto e beleza ao ambiente.',
  },
  {
    icon: Grid2X2,
    title: 'Pisos',
    description:
      'Materiais e soluções para pisos de madeira e acabamentos internos.',
  },
  {
    icon: PackageCheck,
    title: 'Madeiras',
    description:
      'Fornecimento de madeiras e materiais para obras residenciais, comerciais e reformas.',
  },
  {
    icon: Ruler,
    title: 'Batentes e guarnições',
    description:
      'Itens essenciais para acabamento de portas e ambientes com melhor padrão visual.',
  },
  {
    icon: Hammer,
    title: 'Projetos sob medida',
    description:
      'Apoio na escolha de soluções em madeira conforme a necessidade da sua obra.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="section-heading">
          <span className="section-badge">Serviços</span>
          <h2>O que a Gibi oferece para sua obra</h2>
          <p>
            Produtos e soluções em madeira para quem busca qualidade,
            acabamento e orientação na escolha dos materiais.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article className="service-card" key={service.title}>
                <div className="service-card__icon">
                  <Icon size={26} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}