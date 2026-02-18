Feature: Autenticação

  Scenario: Login com credenciais válidas
    Given que estou na página de login
    When eu faço login com usuário "standard_user" e senha "secret_sauce"
    Then devo ver a página de inventário

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When eu faço login com usuário "standard_user" e senha "wrong_password"
    Then devo ver uma mensagem de erro de login

  Scenario: Login com usuário bloqueado
    Given que estou na página de login
    When eu faço login com usuário "locked_out_user" e senha "secret_sauce"
    Then devo ver uma mensagem de usuário bloqueado

  Scenario: Logout
    Given que estou logado como "standard_user"
    When eu faço logout
    Then devo voltar para a página de login