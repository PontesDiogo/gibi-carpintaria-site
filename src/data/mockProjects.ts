import type { Project } from '../types/project'

export const mockProjects: Project[] = [
  {
    id: '1',
    titulo: 'Fornecimento de portas para obra residencial',
    descricao:
      'Fornecimento de portas de madeira, batentes e itens de acabamento para aplicação em obra residencial, com orientação sobre medidas e escolha dos materiais.',
    endereco: 'Endereço não informado',
    cidade: 'Itu',
    estado: 'SP',
    servicos: ['Portas', 'Batentes', 'Acabamento'],
    imagem:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    publicado: true,
    created_at: '2026-05-27',
  },
  {
    id: '2',
    titulo: 'Solução em forro de madeira',
    descricao:
      'Fornecimento de materiais em madeira voltados para aplicação em forros, trazendo acabamento, aconchego e valorização visual ao ambiente.',
    endereco: 'Endereço não informado',
    cidade: 'Itu',
    estado: 'SP',
    servicos: ['Forros', 'Madeira', 'Acabamento interno'],
    imagem:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
    publicado: true,
    created_at: '2026-05-27',
  },
  {
    id: '3',
    titulo: 'Materiais para acabamento interno',
    descricao:
      'Fornecimento de madeiras, guarnições, rodapés e detalhes para acabamento interno, auxiliando na composição final da obra.',
    endereco: 'Endereço não informado',
    cidade: 'Itu',
    estado: 'SP',
    servicos: ['Guarnições', 'Rodapés', 'Acabamentos'],
    imagem:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    publicado: true,
    created_at: '2026-05-27',
  },

]