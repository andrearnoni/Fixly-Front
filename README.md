# fixLy - Plataforma de Conexão de Serviços

<img src="./src/img/logo2.png" alt="fixLy Logo" width="150">

## Visão Geral

O fixLy é uma plataforma moderna que conecta clientes a profissionais qualificados para diversos tipos de serviços, como construção, manutenção, limpeza, instalação, entre outros. Com uma interface intuitiva e recursos abrangentes, o fixLy simplifica o processo de encontrar o profissional ideal para suas necessidades.

## 🚀 Tecnologias Utilizadas

<div style="display: flex; flex-wrap: wrap; gap: 5px;">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-Latest-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/React_Router-7.0.2-CA4245?style=for-the-badge&logo=react-router" alt="React Router">
  <img src="https://img.shields.io/badge/Axios-1.7.9-5A29E4?style=for-the-badge&logo=axios" alt="Axios">
  <img src="https://img.shields.io/badge/JWT-Latest-000000?style=for-the-badge&logo=json-web-tokens" alt="JWT">
</div>

- **Frontend**: React.js com Vite para desenvolvimento rápido
- **Estilização**: Tailwind CSS para design responsivo e moderno
- **Roteamento**: React Router para navegação entre páginas
- **Requisições HTTP**: Axios para comunicação com APIs
- **Autenticação**: JWT (JSON Web Tokens) para gerenciamento de sessões
- **Gráficos**: Highcharts para visualização de dados
- **UI/UX**:
  - SweetAlert2 para notificações interativas
  - Lucide React para ícones modernos
  - Swiper para carrosséis e sliders

## ✨ Funcionalidades Principais

- **Busca de Profissionais**: Encontre especialistas qualificados para diversos tipos de serviços
- **Contratação Segura**: Sistema de pagamento seguro com diversas opções de cartões
- **Perfis Verificados**: Avaliações e classificações de profissionais por outros usuários
- **Chat Integrado**: Comunicação direta entre cliente e prestador de serviço
- **Painel de Controle**: Gerenciamento de pedidos e histórico de serviços
- **Sistema de Cupons**: Descontos e promoções para usuários da plataforma
- **Suporte ao Cliente**: Chatbot e canais de atendimento para assistência contínua

## 🔧 Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/andrearnoni/Fixly-Front.git

# Entre na pasta do projeto
cd Fixly-Front

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Execute o projeto em modo de desenvolvimento
npm run dev

# Para build de produção
npm run build
```

## 📁 Estrutura do Projeto

```
fixLy/
├── src/
│   ├── api/           # Integrações com APIs externas
│   ├── components/    # Componentes reutilizáveis
│   ├── context/       # Contextos de React para gerenciamento de estado
│   ├── data/          # Dados estáticos e mocks
│   ├── hooks/         # Custom hooks
│   ├── img/           # Imagens e recursos visuais
│   ├── localstorage/  # Utilitários para armazenamento local
│   ├── pages/         # Páginas da aplicação
│   ├── services/      # Serviços de integração
│   └── utils/         # Funções utilitárias
├── public/            # Arquivos públicos
└── index.html         # Ponto de entrada HTML
```

## 💼 Sobre o Negócio

O fixLy atua como intermediário entre clientes e profissionais de serviços. Nossa plataforma:

- Conecta clientes a profissionais qualificados
- Garante segurança nas transações
- Facilita a comunicação entre as partes
- Promove avaliações transparentes
- Oferece suporte contínuo durante todo o processo

## 📱 Responsividade

O fixLy foi desenvolvido com design responsivo, garantindo uma experiência de usuário consistente em diferentes dispositivos:

- Desktop
- Tablet
- Dispositivos móveis

## 🖥️ Backend

O backend da plataforma fixLy foi desenvolvido com tecnologias modernas para garantir segurança, escalabilidade e performance:

- **Java**: Linguagem robusta e confiável
- **Spring Boot**: Framework para criação de aplicações Java
- **Spring Security**: Implementação de autenticação e autorização
- **Spring Data JPA**: Persistência de dados com mapeamento objeto-relacional
- **H2**: Sistema de gerenciamento de banco de dados
- **Maven**: Gerenciamento de dependências e build
- **JWT**: Autenticação segura entre frontend e backend

O código fonte do backend está disponível em: [https://github.com/fabiolmorais/fixly.git](https://github.com/fabiolmorais/fixly.git)

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com 💙 pela equipe fixLy.
