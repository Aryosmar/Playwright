// Generated from: features/catalog.feature
import { test } from "playwright-bdd";

test.describe('Catálogo e Ordenação', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que estou logado como "standard_user"', null, { page }); 
  });
  
  test('Listar produtos', async ({ Then, page }) => { 
    await Then('devo ver a lista de produtos', null, { page }); 
  });

  test('Ordenar produtos por nome', async ({ When, Then, page }) => { 
    await When('eu ordeno os produtos por "Name (Z to A)"', null, { page }); 
    await Then('a lista deve estar ordenada por nome em ordem decrescente', null, { page }); 
  });

  test('Ordenar produtos por preço', async ({ When, Then, page }) => { 
    await When('eu ordeno os produtos por "Price (low to high)"', null, { page }); 
    await Then('a lista deve estar ordenada por preço em ordem crescente', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/catalog.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then devo ver a lista de produtos","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When eu ordeno os produtos por \"Name (Z to A)\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Name (Z to A)\"","children":[{"start":27,"value":"Name (Z to A)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then a lista deve estar ordenada por nome em ordem decrescente","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When eu ordeno os produtos por \"Price (low to high)\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Price (low to high)\"","children":[{"start":27,"value":"Price (low to high)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then a lista deve estar ordenada por preço em ordem crescente","stepMatchArguments":[]}]},
]; // bdd-data-end