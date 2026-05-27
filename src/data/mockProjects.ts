import type { Project } from '../types/project'

export const mockProjects: Project[] = [
  {
    id: '1',
    titulo: 'Fornecimento de porta de madeira',
    descricao:
      'Fornecimento de porta de madeira para acabamento residencial, com orientação sobre medidas, modelo e aplicação ideal para a obra.',
    endereco: 'Endereço não informado',
    cidade: 'Itu',
    estado: 'SP',
    servicos: ['Portas', 'Madeira', 'Acabamento'],
    imagem:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80',
    publicado: true,
    created_at: '2026-05-27',
  },
  {
    id: '2',
    titulo: 'Solução em forro de madeira',
    descricao:
      'Atendimento para fornecimento de materiais em madeira voltados para aplicação em forros, trazendo acabamento e conforto visual ao ambiente.',
    endereco: 'Endereço não informado',
    cidade: 'Itu',
    estado: 'SP',
    servicos: ['Forros', 'Madeira', 'Projeto sob medida'],
    imagem:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    publicado: true,
    created_at: '2026-05-27',
  },
  {
    id: '3',
    titulo: 'Materiais para acabamento interno',
    descricao:
      'Fornecimento de itens para acabamento interno, incluindo madeiras, batentes, guarnições e soluções para obras residenciais e comerciais.',
    endereco: 'Endereço não informado',
    cidade: 'Itu',
    estado: 'SP',
    servicos: ['Batentes', 'Guarnições', 'Acabamentos'],
    imagem:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    publicado: true,
    created_at: '2026-05-27',
  },
]