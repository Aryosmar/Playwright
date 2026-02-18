Feature: Catálogo e Ordenação

  Background:
    Given que estou logado como "standard_user"

  Scenario: Listar produtos
    Then devo ver a lista de produtos

  Scenario: Ordenar produtos por nome
    When eu ordeno os produtos por "Name (Z to A)"
    Then a lista deve estar ordenada por nome em ordem decrescente

  Scenario: Ordenar produtos por preço
    When eu ordeno os produtos por "Price (low to high)"
    Then a lista deve estar ordenada por preço em ordem crescente