This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

src/
├── app/ # Next.js App Router (Páginas e API)
│ ├── (admin)/ # Route Group para o Dashboard (Autenticado)
│ │ ├── dashboard/
│ │ │ ├── products/ # Gestão de produtos (/dashboard/products)
│ │ │ ├── offers/ # Gestão de ofertas (/dashboard/offers)
│ │ │ └── layout.tsx # Layout lateral/superior do admin
│ ├── (shop)/ # Route Group para a Landing Page pública
│ │ ├── page.tsx # Home com o Encarte Digital
│ │ └── layout.tsx # Layout com o carrinho flutuante
│ ├── api/ # Endpoints de API (Auth, Webhooks)
│ │ └── auth/[...all]/ # Handler do Better Auth
│ ├── login/ # Página de login (Google Auth)
│ ├── globals.css # Estilos globais e variáveis do Tailwind
│ └── layout.tsx # Root layout (Providers: Auth, Toast, Theme)
├── components/ # Componentes React reutilizáveis
│ ├── dashboard/ # Componentes específicos do Admin (DataTables, UserNav)
│ ├── shop/ # Componentes da Landing Page (ProductCard, ShoppingList)
│ ├── ui/ # Componentes básicos do Shadcn/ui (Button, Input, etc)
│ └── shared/ # Componentes comuns (Logo, Footer, Icons)
├── db/ # Configuração do Banco de Dados (Neon + Drizzle)
│ ├── index.ts # Instância do cliente do DB
│ ├── schema.ts # Definição das tabelas e relações
│ └── seed.ts # Script para popular dados iniciais
├── hooks/ # Custom Hooks (ex: use-local-storage)
├── lib/ # Configurações de bibliotecas (Singletons)
│ ├── auth.ts # Configuração do Better Auth (Server)
│ ├── auth-client.ts # Cliente do Better Auth (Client)
│ └── utils.ts # Funções utilitárias (cn para Shadcn)
├── server/ # Lógica de servidor dedicada
│ └── actions/ # Next.js Server Actions (Mutations no DB)
│ ├── product-actions.ts
│ └── offer-actions.ts
├── store/ # Gerenciamento de estado global (Zustand)
│ └── use-cart.ts # Store do carrinho de compras
└── types/ # Definições de tipos TypeScript globais
