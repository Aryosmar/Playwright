Feature: Checkout

  Background:
    Given que estou logado como "standard_user"
    And que eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    And eu abro o carrinho
    And eu inicio o checkout

  Scenario: Validar campos obrigatórios
    When eu continuo o checkout sem preencher dados
    Then devo ver uma mensagem de erro no checkout

  Scenario: Finalizar compra com sucesso
    When eu preencho o checkout com first name "Ana", last name "Silva" e postal code "60000-000"
    And eu finalizo a compra
    Then devo ver a confirmação de pedido