# Gibi Carpintaria - Site Institucional

Este projeto consiste no desenvolvimento do site institucional da **Gibi Carpintaria**, com o objetivo de fortalecer a presença digital da empresa, apresentar seus serviços, divulgar projetos realizados e facilitar o contato de clientes para solicitação de orçamentos.

O sistema faz parte de um projeto piloto para avaliar, durante um período inicial de aproximadamente 6 meses, o impacto da presença online na geração de acessos, contatos comerciais e possíveis vendas.

---

## Objetivo do projeto

Criar uma landing page moderna, responsiva e profissional para a Gibi Carpintaria, permitindo que visitantes conheçam melhor a empresa, visualizem serviços realizados e entrem em contato diretamente com a área de vendas.

Além da página pública, o projeto contará com uma área administrativa para cadastro e gerenciamento de publicações de serviços realizados.

---

## Funcionalidades previstas

### Área pública

- Página inicial institucional;
- Apresentação da identidade visual da empresa;
- Seção de serviços e produtos oferecidos;
- Seção de projetos/serviços realizados;
- Visualização de publicações com fotos, título, descrição e serviços prestados;
- Botão de contato por e-mail;
- Botão de contato por WhatsApp;
- Informações de localização e atendimento;
- Layout responsivo para desktop, tablet e celular.

### Área administrativa

- Login de administrador;
- Cadastro de publicações de serviços realizados;
- Edição de publicações;
- Exclusão ou arquivamento de publicações;
- Upload de imagens dos serviços;
- Definição de serviços prestados em cada publicação;
- Controle de publicações ativas/inativas.

### Monitoramento

- Integração com Google Analytics;
- Acompanhamento de acessos;
- Monitoramento de cliques em botões de contato;
- Apoio na análise de geração de leads e orçamentos.

---

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Supabase
- Supabase Auth
- Supabase Database
- Supabase Storage
- Netlify
- GoDaddy DNS
- Google Analytics

---

## Estrutura inicial do projeto

```txt
src/
├── assets/
├── components/
│   ├── layout/
│   ├── home/
│   ├── projects/
│   └── admin/
├── pages/
├── services/
├── styles/
├── types/
├── App.tsx
└── main.tsx
