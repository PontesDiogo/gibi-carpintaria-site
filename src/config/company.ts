export const company = {
  name: 'Gibi Carpintaria',
  slogan: 'Madeira, obra e acabamento',
  email: 'vendas@gibicarpintaria.com',
  phone: '11 4024 - 7947',
  whatsapp: '11 9 7750-0319',
  city: 'Itu',
  state: 'SP',
  region: 'Itu/SP e região',
  instagram: 'https://www.instagram.com/gibicarpintaria',
  address: '',
}

export function createMailToLink(options?: {
  subject?: string
  body?: string
}) {
  const subject = options?.subject ?? 'Solicitação de orçamento pelo site'

  const body =
    options?.body ??
    'Olá, vim pelo site da Gibi Carpintaria e gostaria de solicitar um orçamento.'

  return `mailto:${company.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`
}

export function createWhatsappLink(message?: string) {
  const defaultMessage =
    message ??
    'Olá, vim pelo site da Gibi Carpintaria e gostaria de solicitar um orçamento.'

  if (!company.whatsapp) {
    return createMailToLink({
      subject: 'Solicitação de orçamento pelo site',
      body: defaultMessage,
    })
  }

  const onlyNumbers = company.whatsapp.replace(/\D/g, '')

  return `https://wa.me/${onlyNumbers}?text=${encodeURIComponent(
    defaultMessage,
  )}`
}