import { mockProjects } from '../../data/mockProjects'
import { ProjectCard } from '../projects/projectCard'

export function ProjectsSection() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="section-badge">Projetos realizados</span>
          <h2>Serviços e soluções entregues pela Gibi</h2>
          <p>
            Confira alguns exemplos de serviços e fornecimentos que representam
            as soluções oferecidas pela Gibi Carpintaria.
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