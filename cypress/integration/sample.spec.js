describe("Cenário 1", function() {
    it("Exibir resultados para o livro 'Código Limpo'", function() {
        cy.visit("https://americanas.com.br")

        cy.get("#h_search-input").type("livro codigo limpo").should("have.value", "livro codigo limpo")
        cy.get("#h_search-btn").click()       
    })
})

describe("Cenário 2", function() {
    it("Acessar o primeiro item da busca", function() {
        cy.get("picture > img[alt='Livro - Código Limpo: Habilidades Práticas do Agile Software']").click()        
    })
    it("Calculando frete e prazo", function() {
        cy.get("#freight-field").type("04055-000").should("have.value", "04055-000")
        cy.get("#freight-field-button").click()
    })
    it("Colocar o livro no carrinho", function() {
        cy.get("#btn-buy").click({force:true})
    })
})
