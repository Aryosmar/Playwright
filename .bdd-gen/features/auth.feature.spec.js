// Generated from: features/auth.feature
import { test } from "playwright-bdd";

test.describe('Autenticação', () => {

  test('Login com credenciais válidas', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login', null, { page }); 
    await When('eu faço login com usuário "standard_user" e senha "secret_sauce"', null, { page }); 
    await Then('devo ver a página de inventário', null, { page }); 
  });

  test('Login com credenciais inválidas', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login', null, { page }); 
    await When('eu faço login com usuário "standard_user" e senha "wrong_password"', null, { page }); 
    await Then('devo ver uma mensagem de erro de login', null, { page }); 
  });

  test('Login com usuário bloqueado', async ({ Given, When, Then, page }) => { 
    await Given('que estou na página de login', null, { page }); 
    await When('eu faço login com usuário "locked_out_user" e senha "secret_sauce"', null, { page }); 
    await Then('devo ver uma mensagem de usuário bloqueado', null, { page }); 
  });

  test('Logout', async ({ Given, When, Then, page }) => { 
    await Given('que estou logado como "standard_user"', null, { page }); 
    await When('eu faço logout', null, { page }); 
    await Then('devo voltar para a página de login', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/auth.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que estou na página de login","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When eu faço login com usuário \"standard_user\" e senha \"secret_sauce\"","stepMatchArguments":[{"group":{"start":26,"value":"\"standard_user\"","children":[{"start":27,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"secret_sauce\"","children":[{"start":51,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then devo ver a página de inventário","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given que estou na página de login","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When eu faço login com usuário \"standard_user\" e senha \"wrong_password\"","stepMatchArguments":[{"group":{"start":26,"value":"\"standard_user\"","children":[{"start":27,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"wrong_password\"","children":[{"start":51,"value":"wrong_password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then devo ver uma mensagem de erro de login","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given que estou na página de login","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When eu faço login com usuário \"locked_out_user\" e senha \"secret_sauce\"","stepMatchArguments":[{"group":{"start":26,"value":"\"locked_out_user\"","children":[{"start":27,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"secret_sauce\"","children":[{"start":53,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then devo ver uma mensagem de usuário bloqueado","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given que estou logado como \"standard_user\"","stepMatchArguments":[{"group":{"start":22,"value":"\"standard_user\"","children":[{"start":23,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When eu faço logout","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then devo voltar para a página de login","stepMatchArguments":[]}]},
]; // bdd-data-end