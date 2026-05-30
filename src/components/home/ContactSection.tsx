import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import {
  company,
  createMailToLink,
  createWhatsappLink,
} from '../../config/company'

export function ContactSection() {
  return (
    <section id="contato" className="section contact">
      <div className="container contact__content">
        <div className="contact__text">
          <span className="section-badge">Contato</span>

          <h2>Solicite um orçamento para sua obra</h2>

          <p>
            Entre em contato com a equipe de vendas da Gibi Carpintaria para
            tirar dúvidas, consultar produtos ou solicitar um orçamento para sua
            obra, reforma ou acabamento.
          </p>

          <div className="contact__info">
            <div>
              <Mail size={20} />
              <span>{company.email}</span>
            </div>

            <div>
              <Phone size={20} />
              <span>{company.phone || 'Telefone/WhatsApp a definir'}</span>
            </div>

            <div>
              <MapPin size={20} />
              <span>Atendimento em {company.region}</span>
            </div>
          </div>
        </div>

        <div className="contact__card">
          <h3>Fale com vendas</h3>

          <p>
            Escolha uma opção abaixo para iniciar o contato com a equipe da
            Gibi. A mensagem já será aberta com uma solicitação de orçamento.
          </p>

          <a className="btn btn--primary btn--full" href={createMailToLink()}>
            Enviar e-mail
            <Mail size={18} />
          </a>

          <a
            className="btn btn--secondary btn--full"
            href={createWhatsappLink()}
            target={company.whatsapp ? '_blank' : undefined}
            rel={company.whatsapp ? 'noreferrer' : undefined}
          >
            Chamar no WhatsApp
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}