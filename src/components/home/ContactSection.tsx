import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contato" className="section contact">
      <div className="container contact__content">
        <div className="contact__text">
          <span className="section-badge">Contato</span>

          <h2>Solicite um orçamento para sua obra</h2>

          <p>
            Entre em contato com a equipe de vendas da Gibi Carpintaria para
            tirar dúvidas, consultar produtos ou solicitar um orçamento.
          </p>

          <div className="contact__info">
            <div>
              <Mail size={20} />
              <span>vendas@gibicarpintaria.com</span>
            </div>

            <div>
              <Phone size={20} />
              <span>(11) 9 7750-0319  </span>
            </div>

            <div>
              <MapPin size={20} />
              <span>Atendimento em Itu/SP e região</span>
            </div>
          </div>
        </div>

        <div className="contact__card">
          <h3>Fale com vendas</h3>

          <p>
            Clique abaixo para abrir um e-mail com uma mensagem inicial de
            solicitação de orçamento.
          </p>

          <a
            className="btn btn--primary btn--full"
            href="mailto:vendas@gibicarpintaria.com?subject=Solicitação de orçamento pelo site&body=Olá, vim pelo site da Gibi Carpintaria e gostaria de solicitar um orçamento."
          >
            Enviar e-mail
            <Mail size={18} />
          </a>

          <a
            className="btn btn--secondary btn--full"
            href="#inicio"
          >
            Voltar ao início
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}