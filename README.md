# Testes Automatizados com Playwright

Este projeto contém testes automatizados utilizando **Playwright** com cenários descritos em **Gherkin**, seguindo o modelo de **Behavior Driven Development (BDD)**. O objetivo é validar funcionalidades de uma aplicação web por meio de testes automatizados que simulam interações reais de usuários.

---

# Tecnologias Utilizadas

* Node.js
* Playwright
* Gherkin (BDD)
* GitHub Actions

---

# Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado em sua máquina:

* Node.js (versão 18 ou superior)
* npm (gerenciador de pacotes do Node)

Para verificar se o Node.js e o npm estão instalados, execute no terminal:

```bash
node -v
npm -v
```

---

# Clonar o Repositório

Primeiramente, clone o repositório para sua máquina:

```bash
git clone <URL_DO_REPOSITORIO>
```

Depois acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

---

# Instalar Dependências

Após acessar o diretório do projeto, instale todas as dependências necessárias com o seguinte comando:

```bash
npm install
```

---

# Instalar Navegadores do Playwright

O Playwright utiliza navegadores próprios para executar os testes. Para instalá-los, execute:

```bash
npx playwright install
```

---

# Executar os Testes

Para executar todos os testes automatizados do projeto, utilize o comando:

```bash
npm test
```

ou

```bash
npx playwright test
```

Durante a execução, o Playwright abrirá os navegadores necessários e executará todos os cenários definidos no projeto.

---

# Visualizar Relatório de Testes

Após a execução dos testes, o Playwright gera um relatório detalhado com os resultados.

Para visualizar o relatório, execute:

```bash
npx playwright show-report
```

Isso abrirá automaticamente um relatório no navegador contendo informações sobre os testes executados, incluindo cenários aprovados e falhos.

---

# Estrutura do Projeto

A organização do projeto segue a seguinte estrutura:

```
project/
│
├── features/              # Cenários escritos em Gherkin
├── steps/                 # Implementação dos passos dos testes
├── .bdd-gen/              # Testes gerados automaticamente
├── .github/workflows/     # Pipeline de execução automática
├── docs/                  # Documentação do projeto
├── playwright.config.ts   # Configuração do Playwright
├── package.json           # Dependências do projeto
└── README.md              # Documentação principal
```

---

# Execução Automática no GitHub

O projeto está configurado para executar automaticamente os testes utilizando **GitHub Actions**.

Sempre que ocorrer:

* um **push no repositório**
* ou um **pull request**

o pipeline será executado automaticamente, realizando:

1. instalação das dependências
2. instalação dos navegadores do Playwright
3. execução dos testes automatizados
4. geração dos relatórios de execução

Essa automação garante que as funcionalidades do sistema sejam testadas continuamente durante o desenvolvimento.

---

# Funcionalidades Testadas

Os testes automatizados cobrem as seguintes funcionalidades da aplicação:

* Autenticação de usuário
* Visualização do catálogo de produtos
* Adição de produtos ao carrinho
* Processo de checkout

Cada funcionalidade possui cenários descritos em Gherkin que representam diferentes comportamentos esperados do sistema.

---

# Autor

Projeto desenvolvido para atividade acadêmica de **Testes Automatizados de Software**.
