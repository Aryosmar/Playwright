import { defineBddConfig } from 'playwright-bdd';

export default defineBddConfig({
  features: ['features/*/.feature'],
  steps: ['steps/*/.ts'],
  outputDir: '.bdd-gen',
});