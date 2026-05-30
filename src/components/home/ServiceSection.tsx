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
    title: 'Portas e batentes',
    description:
      'Fornecimento de portas, batentes e componentes para acabamento de obras residenciais, comerciais e reformas.',
    tag: 'Acabamento',
  },
  {
    icon: Layers,
    title: 'Forros de madeira',
    description:
      'Soluções em madeira para forros, trazendo conforto visual, acabamento e valorização para o ambiente.',
    tag: 'Forros',
  },
  {
    icon: Grid2X2,
    title: 'Pisos e assoalhos',
    description:
      'Materiais e soluções para pisos de madeira, acabamento interno e composições que valorizam o espaço.',
    tag: 'Pisos',
  },
  {
    icon: PackageCheck,
    title: 'Madeiras para obra',
    description:
      'Fornecimento de madeiras e materiais para diferentes etapas da obra, com atendimento próximo e orientação.',
    tag: 'Madeiras',
  },
  {
    icon: Ruler,
    title: 'Guarnições e acabamentos',
    description:
      'Itens de acabamento como guarnições, rodapés, vistas e detalhes que completam o padrão visual da obra.',
    tag: 'Detalhes',
  },
  {
    icon: Hammer,
    title: 'Soluções sob medida',
    description:
      'Apoio na escolha de materiais e soluções em madeira conforme a necessidade de cada cliente ou projeto.',
    tag: 'Sob medida',
  },
]

export function ServiceSection() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="section-heading">
          <span className="section-badge">Serviços e produtos</span>

          <h2>Soluções em madeira para diferentes etapas da sua obra</h2>

          <p>
            A Gibi Carpintaria oferece produtos e soluções para quem busca
            qualidade, acabamento e praticidade na escolha de materiais para
            construção, reforma ou projetos sob medida.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article className="service-card" key={service.title}>
                <div className="service-card__top">
                  <div className="service-card__icon">
                    <Icon size={26} />
                  </div>

                  <span className="service-card__tag">{service.tag}</span>
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