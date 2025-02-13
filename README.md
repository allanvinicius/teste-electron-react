# 📚 Teste prático

## 🚀 Tecnologias Utilizadas

- **React** com **Vite** para um ambiente de desenvolvimento rápido e eficiente.
- **TypeScript** para garantir segurança e melhor manutenção do código.
- **Context API** para gerenciar o estado global.
- **Styled Components** para estilização dinâmica e componentizada.
---

## 📦 Como Executar o Projeto

### 🔧 Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### 📥 Instalação
```sh
# Clone o repositório
git clone https://github.com/allanvinicius/teste-electron-react.git

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
yarn install  # ou npm install
```

### ▶️ Rodando o Projeto
```sh
# Iniciar o servidor de desenvolvimento
yarn dev  # ou npm run dev
```
A aplicação estará disponível em **http://localhost:5173**.

---

## 🏗️ Arquitetura do Projeto

### 📂 Estrutura de Pastas
```
/src
│── components/       # Componentes reutilizáveis
│── context/          # Context API para gerenciamento de estado
│── hooks/            # Hooks customizados
│── pages/            # Páginas principais da aplicação
│── services/         # Serviços auxiliares (ex: api)
│── styles/           # Estilizações globais
│── types/            # Tipagens
```

### 🌍 Gerenciamento de Estado com Context API
A aplicação utiliza a **Context API** para armazenar e manipular os dados. O estado global contém a seguinte estrutura:

---

### 🎨 Estilização com Styled Components
Todos os estilos são feitos utilizando **Styled Components**, permitindo **componentização e dinamismo** na estilização.
Exemplo:

```tsx
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
```
---

### 📦 Componentização
O projeto segue uma abordagem **modular**, separando cada funcionalidade em componentes reutilizáveis, como:

- **CardPokemon.tsx** - Card de pokemons
- **ListPokemon.tsx** - Lista de pokemons
- **LoadMore.tsx** - Carregar mais pokemons
- **ModalPokemon.tsx** - Modal de pokemons
- **SearchPokemon.tsx** - Pesquisa de pokemons

Cada componente recebe **props tipadas** e utiliza os estados do **Context API**.

---

---

## 📄 Licença
Este projeto está sob a licença **MIT**.


