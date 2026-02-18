Objetivo do projeto (Playwright + Gherkin + GitHub Actions)

SUT: https://www.saucedemo.com/

Como rodar local:

npm ci
npx playwright install
npm test


Onde estão:

features: features/

steps: steps/

requisitos: docs/REQUIREMENTS.md

rastreabilidade: docs/TRACEABILITY.md

Como ver relatório:

npx playwright show-report