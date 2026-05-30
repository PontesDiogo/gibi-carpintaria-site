import { mockProjects } from '../../data/mockProjects'
import { ProjectCard } from '../projects/projectCard'

export function ProjectsSection() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="section-badge">Projetos realizados</span>

          <h2>Serviços e soluções que representam a qualidade da Gibi</h2>

          <p>
            Veja exemplos de fornecimentos, aplicações e soluções em madeira
            que demonstram como a Gibi pode apoiar diferentes tipos de obras,
            reformas e acabamentos.
          </p>
        </div>

        <div className="projects__grid">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}