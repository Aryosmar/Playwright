Feature: Carrinho

  Background:
    Given que estou logado como "standard_user"

  Scenario: Adicionar item ao carrinho
    When eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    Then o badge do carrinho deve ser "1"

  Scenario: Remover item do carrinho
    Given que eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    When eu removo o produto "Sauce Labs Backpack" do carrinho
    Then o badge do carrinho não deve existir

  Scenario: Persistência ao navegar
    When eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    And eu abro o carrinho
    And eu volto para o inventário
    Then o badge do carrinho deve ser "1"