import { ArrowUpRight, MapPin } from 'lucide-react'
import type { Project } from '../../types/project'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const location =
    project.cidade && project.estado
      ? `${project.cidade}/${project.estado}`
      : 'Local não informado'

  const mailSubject = `Orçamento parecido com: ${project.titulo}`

  const mailBody = `Olá, vi no site da Gibi Carpintaria o serviço "${project.titulo}" e gostaria de solicitar um orçamento parecido.`

  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={project.imagem} alt={project.titulo} />
      </div>

      <div className="project-card__content">
        <div className="project-card__location">
          <MapPin size={16} />
          <span>{location}</span>
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
          href={`mailto:vendas@gibicarpintaria.com?subject=${encodeURIComponent(
            mailSubject,
          )}&body=${encodeURIComponent(mailBody)}`}
        >
          Quero um orçamento parecido
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  )
}