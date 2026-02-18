// Generated from: features/checkout.feature
import { test } from "playwright-bdd";

test.describe('Checkout', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('que estou logado como "standard_user"', null, { page }); 
    await And('que eu adiciono o produto "Sauce Labs Backpack" ao carrinho', null, { page }); 
    await And('eu abro o carrinho', null, { page }); 
    await And('eu inicio o checkout', null, { page }); 
  });
  
  test('Validar campos obrigatórios', async ({ When, Then, page }) => { 
    await When('eu continuo o checkout sem preencher dados', null, { page }); 
    await Then('devo ver uma mensagem de erro no checkout', null, { page }); 
  });

  test('Finalizar compra com sucesso', async ({ When, Then, And, page }) => { 
    await When('eu preencho o checkout com first name "Ana", last name "Silva" e postal code "60000-000"', null, { page }); 
    await And('eu finalizo a compra', null, { page }); 
    await Then('devo ver a confirmação de pedido', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And que eu adiciono o produto \"Sauce Labs Backpack\" ao carrinho","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Sauce Labs Backpack\"","children":[{"start":27,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And eu abro o carrinho","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And eu inicio o checkout","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When eu continuo o checkout sem preencher dados","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then devo ver uma mensagem de erro no checkout","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And que eu adiciono o produto \"Sauce Labs Backpack\" ao carrinho","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Sauce Labs Backpack\"","children":[{"start":27,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And eu abro o carrinho","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And eu inicio o checkout","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When eu preencho o checkout com first name \"Ana\", last name \"Silva\" e postal code \"60000-000\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Ana\"","children":[{"start":39,"value":"Ana","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"\"Silva\"","children":[{"start":56,"value":"Silva","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":77,"value":"\"60000-000\"","children":[{"start":78,"value":"60000-000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And eu finalizo a compra","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then devo ver a confirmação de pedido","stepMatchArguments":[]}]},
]; // bdd-data-end