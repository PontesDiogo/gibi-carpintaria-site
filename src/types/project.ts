export type Project = {
  id: string
  titulo: string
  descricao: string
  endereco?: string
  cidade?: string
  estado?: string
  servicos: string[]
  imagem: string
  publicado: boolean
  created_at: string
}