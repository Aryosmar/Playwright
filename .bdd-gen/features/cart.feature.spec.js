// Generated from: features/cart.feature
import { test } from "playwright-bdd";

test.describe('Carrinho', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que estou logado como "standard_user"', null, { page }); 
  });
  
  test('Adicionar item ao carrinho', async ({ When, Then, page }) => { 
    await When('eu adiciono o produto "Sauce Labs Backpack" ao carrinho', null, { page }); 
    await Then('o badge do carrinho deve ser "1"', null, { page }); 
  });

  test('Remover item do carrinho', async ({ Given, When, Then, page }) => { 
    await Given('que eu adiciono o produto "Sauce Labs Backpack" ao carrinho', null, { page }); 
    await When('eu removo o produto "Sauce Labs Backpack" do carrinho', null, { page }); 
    await Then('o badge do carrinho não deve existir', null, { page }); 
  });

  test('Persistência ao navegar', async ({ When, Then, And, page }) => { 
    await When('eu adiciono o produto "Sauce Labs Backpack" ao carrinho', null, { page }); 
    await And('eu abro o carrinho', null, { page }); 
    await And('eu volto para o inventário', null, { page }); 
    await Then('o badge do carrinho deve ser "1"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When eu adiciono o produto \"Sauce Labs Backpack\" ao carrinho","stepMatchArguments":[{"group":{"start":22,"value":"\"Sauce Labs Backpack\"","children":[{"start":23,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then o badge do carrinho deve ser \"1\"","stepMatchArguments":[{"group":{"start":29,"value":"\"1\"","children":[{"start":30,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given que eu adiciono o produto \"Sauce Labs Backpack\" ao carrinho","stepMatchArguments":[{"group":{"start":26,"value":"\"Sauce Labs Backpack\"","children":[{"start":27,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When eu removo o produto \"Sauce Labs Backpack\" do carrinho","stepMatchArguments":[{"group":{"start":20,"value":"\"Sauce Labs Backpack\"","children":[{"start":21,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then o badge do carrinho não deve existir","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When eu adiciono o produto \"Sauce Labs Backpack\" ao carrinho","stepMatchArguments":[{"group":{"start":22,"value":"\"Sauce Labs Backpack\"","children":[{"start":23,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And eu abro o carrinho","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And eu volto para o inventário","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then o badge do carrinho deve ser \"1\"","stepMatchArguments":[{"group":{"start":29,"value":"\"1\"","children":[{"start":30,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end