import { ArrowUpRight, MapPin } from 'lucide-react'
import type { Project } from '../../types/project'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={project.imagem} alt={project.titulo} />
      </div>

      <div className="project-card__content">
        <div className="project-card__location">
          <MapPin size={16} />
          <span>
            {project.cidade}/{project.estado}
          </span>
        </div>

        <h3>{project.titulo}</h3>

        <p>{project.descricao}</p>

        <div className="project-card__tags">
          {project.servicos.map((servico) => (
            <span key={servico}>{servico}</span>
          ))}
        </div>

        <a
          className="project-card__link"
          href={`mailto:vendas@gibicarpintaria.com?subject=Orçamento parecido com: ${project.titulo}&body=Olá, vi no site o serviço "${project.titulo}" e gostaria de solicitar um orçamento parecido.`}
        >
          Quero um orçamento parecido
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  )
}