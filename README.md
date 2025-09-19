# Aula.Digital

Uma plataforma educacional moderna desenvolvida com Next.js e TailwindCSS que oferece tutoriais interativos para ferramentas digitais.

## 🚀 Funcionalidades

- **Cards de Tutoriais Dinâmicos**: Exibição de tutoriais carregados diretamente do banco de dados SQLite
- **Player de Vídeo Personalizado**: Reprodução de vídeos do YouTube com interface customizada
- **Tutoriais em Texto**: Páginas estruturadas com passo a passo e dicas para ferramentas específicas
- **Design Responsivo**: Interface adaptável seguindo os protótipos fornecidos
- **Navegação Intuitiva**: Acesso direto às ferramentas através de botões "Acessar ferramenta"

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.5.3**: Framework React para desenvolvimento web
- **TailwindCSS 4**: Framework CSS para estilização
- **SQLite**: Banco de dados para armazenamento dos tutoriais
- **TypeScript**: Tipagem estática para JavaScript
- **Node.js**: Ambiente de execução

## 📊 Estrutura do Banco de Dados

```sql
CREATE TABLE Tutoriais(
    id integer primary key autoincrement,
    titulo text not null,
    descricao text,
    link_conteudo not null,
    tipo text check( tipo in ('texto', 'video')) not null,
    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🎯 Funcionalidades Implementadas

### 1. Página Principal
- Exibição de cards de tutoriais em grid responsivo
- Carregamento dinâmico dos dados do banco SQLite
- Design seguindo os protótipos com cores verde e azul escuro

### 2. Player de Vídeo Personalizado
- Extração automática do ID do YouTube
- Botão de play customizado com design da plataforma
- Fallback para vídeos indisponíveis
- Botão "Acessar ferramenta" que redireciona para a plataforma

### 3. Tutoriais em Texto
- Conteúdo estruturado com passo a passo numerado
- Dicas importantes destacadas
- Reconhecimento automático da ferramenta baseado na URL
- Conteúdo específico para Canva, Google Docs, ChatGPT e outras ferramentas

### 4. Navegação e UX
- Header com logo e navegação
- Transições suaves nos elementos interativos
- Estados de hover nos cards e botões
- Design consistente em toda a aplicação

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em modo de desenvolvimento:**
```bash
npm run dev
```

3. **Acessar a aplicação:**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e configuração do TailwindCSS
│   ├── layout.tsx           # Layout principal da aplicação
│   ├── page.tsx             # Página inicial com cards de tutoriais
│   ├── tutorial/[id]/       # Páginas dinâmicas dos tutoriais
│   └── ui/                  # Componentes reutilizáveis
│       ├── card.tsx         # Componente de card de tutorial
│       ├── header.tsx       # Cabeçalho da aplicação
│       ├── video-player.tsx # Player de vídeo personalizado
│       └── text-tutorial.tsx# Componente para tutoriais em texto
└── lib/
    └── database.ts          # Configuração e funções do banco SQLite
```

## 🎨 Design System

- **Cores Principais:**
  - Verde: `#10b981` (botões e acentos)
  - Azul Escuro: `#1e293b` (cards)
  - Branco: `#ffffff` (fundo)
  - Cinza: `#6b7280` (textos secundários)

- **Tipografia:**
  - Font Family: Geist Sans
  - Títulos: Bold, tamanhos variados
  - Textos: Regular, boa legibilidade

## 📱 Responsividade

- **Mobile**: 1 coluna de cards
- **Tablet**: 2 colunas de cards
- **Desktop**: 3 colunas de cards

## 🔧 Configurações Técnicas

- **PostCSS**: Configurado com `@tailwindcss/postcss`
- **TypeScript**: Tipagem completa em todos os componentes
- **SQLite**: Banco local para desenvolvimento e produção
- **Next.js**: Configuração otimizada para SSR e SSG

## 📈 Próximos Passos

- Implementar sistema de busca nos tutoriais
- Adicionar categorias e filtros
- Criar sistema de favoritos
- Implementar comentários e avaliações
- Adicionar mais tipos de conteúdo (PDFs, apresentações)

## 🤝 Contribuição

Este projeto foi desenvolvido seguindo os protótipos fornecidos e implementa todas as funcionalidades solicitadas:

✅ Cards de tutoriais conectados ao banco de dados  
✅ Player de vídeo personalizado para YouTube  
✅ Páginas de tutorial em texto estruturado  
✅ Botões "Acessar ferramenta" funcionais  
✅ Design fiel aos protótipos  
✅ Responsividade completa  

A aplicação está pronta para uso e pode ser facilmente expandida com novas funcionalidades.

---

## Getting Started (Next.js)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
