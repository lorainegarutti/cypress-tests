describe("Cenário 1", function() {
    it("Acessar informações sobre o livro 'Código Limpo'", function() {
        cy.visit("https://americanas.com.br")
        
        cy.pause()

        cy.get("#h_search-input")
          .type("livro codigo limpo")
          .should("have.value", "livro codigo limpo")
        
        cy.get("#h_search-btn")
          .click()

        cy.get("picture > img[alt='Livro - Código Limpo: Habilidades Práticas do Agile Software']")
          .click()        
    })
})

describe("Cenário 2", function() {
    it("Calculando frete e prazo", function() {
        cy.get("#freight-field")
          .type("04055-000")
          .should("have.value", "04055-000")
        cy.get("#freight-field-button")
          .click()
    })

    it("Colocar o livro no carrinho", function() {
        cy.get("button[class='ButtonUI-sc-1i9za0i-0 erKOhv']")
          .click({force:true})
    })
})