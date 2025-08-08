
# Order Management App - Frontend

Sistema de gestão de pedidos desenvolvido em **React + TypeScript**, utilizando **Tailwind CSS v4**, **TanStack Query** e **Axios**.

## ✨ Visão Geral

Esta aplicação permite:

- Listar pedidos em uma tabela responsiva, com coluna de **status** exibindo os estados: **Pendente**, **Processando** e **Finalizado**;
- Criar novos pedidos através de um formulário;
- Excluir pedidos diretamente pelas linhas da tabela, através do ícone de lixeira, que acessa a rota `DELETE /orders/{id}`;
- Visualizar detalhes completos de cada pedido;
- A tabela é atualizada automaticamente com frequência para manter os dados sincronizados com o backend;

## 📆 Tecnologias Utilizadas

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TanStack Query v5](https://tanstack.com/query/latest)
- [React Router DOM v7](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/)

---

## ⚙️ Instalação

```bash
# Clone o repositório
https://github.com/seu-usuario/order-management-app.git

# Acesse a pasta do projeto
cd order-management-app

# Instale as dependências
npm install
```

---

## ✨ Execução do Projeto

```bash
npm run dev
```

Abra no navegador:

```
http://localhost:5173
```

Certifique-se de que sua API esteja rodando em:

```
http://localhost:5004/api
```

Ou ajuste a URL base em:

```ts
src/services/orderService.ts
```

---

## 📁 Estrutura de Pastas

```
src/
├── components/  # Componentes reutilizáveis (ex: tabela)
├── hooks/       # Hooks do TanStack Query
├── layouts/     # Auxílio na estrutura das telas
├── pages/       # Telas principais (listar, criar, visualizar)
├── services/    # Camada de serviços (axios + regras)
├── main.tsx     # Entrada da aplicação com rotas
└── index.css    # Estilos globais com Tailwind
```

---


## 🌐 Rotas da Aplicação

| Rota                  | Descrição                          |
| --------------------- | ---------------------------------- |
| `/`                   | Lista todos os pedidos             |
| `/new`                | Cria um novo pedido                |
| `/orders/:id`         | Detalhes do pedido por ID          |
| `DELETE /orders/{id}` | Remove um pedido pelo seu ID       |


---

## 🛠️ Configuração do Tailwind CSS v4

Tailwind CSS 4 é baseado em configuração via `@import`.

```css
/* src/index.css */
@import "tailwindcss";
```

E no `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite';
plugins: [react(), tailwindcss()];
```

---

## 🧪 Requisições HTTP (Axios)

As requisições são feitas pela instância do `axios` em `src/services/orderService.ts`.

### Endpoints esperados da API:

- `GET /orders`
- `GET /orders/:id`
- `POST /orders`
- `DELETE /orders/{id}`  

---

Desenvolvido por Diego Carneiro.
