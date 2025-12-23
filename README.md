# 🎬 CinePlay - Meu Primeiro App Mobile



![Banner](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Banner](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white) ![Banner](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow?style=for-the-badge)

## 👋 Sobre o Projeto

Olá! Bem-vindo ao **CinePlay**.

Este projeto nasceu do meu desafio pessoal de sair do zero e construir um aplicativo funcional.

O CinePlay é um guia de filmes que consome dados reais, permitindo que o usuário explore, pesquise e salve seus filmes favoritos.

## 💡 O que eu aprendi construindo isso?

Este projeto me ensinou conceitos fundamentais:

- **Segurança primeiro:** Aprendi a proteger chaves de API sensíveis usando Variáveis de Ambiente (`.env`) e `.gitignore`, garantindo que segredos não subam para o GitHub.
- **Não confie na Internet:** Implementei tratamentos de erro (`try/catch`) e telas de carregamento (Loading States) para quando a conexão falha.
- **UX (Experiência do Usuário):** Criei feedbacks visuais para buscas vazias e navegação fluida entre abas.
- **Persistência de Dados:** Uso do `AsyncStorage` para salvar os filmes favoritos no celular do usuário, funcionando mesmo offline.
- **TypeScript:** Comecei a tipar os dados para evitar erros bobos durante o desenvolvimento.

## ✨ Funcionalidades

O app já conta com:
- [x] **Catálogo Dinâmico:** Listas de filmes separadas por gêneros.
- [x] **Busca Inteligente:** Pesquisa integrada com a API (suporta títulos em PT-BR).
- [x] **Detalhes Completos:** Sinopse, nota, duração e integração com trailers do YouTube.
- [x] **Favoritos:** Sistema de "curtir" filmes que salva localmente no dispositivo.
- [x] **Perfil do Usuário:** Dashboard visual com estatísticas e configurações.

## 🛠️ Tecnologias

- **React Native (Expo SDK 52)**
- **Expo Router** (Navegação baseada em arquivos)
- **TMDB API** (Fonte dos dados)
- **AsyncStorage** (Banco local)

## 🚀 Como rodar na sua máquina

### Clone o repositório
```bash
git clone https://github.com/DiegoSVK/filmes-react-native.git
Instale as dependências
bash
Copiar código
npm install
Configure a API
Crie um arquivo .env na raiz do projeto e adicione:

env
Copiar código
EXPO_PUBLIC_API_KEY=sua_chave_aqui
Execute o projeto
bash
Copiar código
npx expo start
