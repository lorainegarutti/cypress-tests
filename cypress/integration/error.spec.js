describe("Cenário 1 - erro", function() {
    it("Produto indisponível ou esgotado", function() {
        cy.visit("https://www.americanas.com.br/produto/6983188/livro-codigo-limpo-habilidades-praticas-do-agile-software-1")

        cy.get("body").contains("Ops! Já vendemos o estoque")
    })

})

describe("Cenário 2 - erro", function() {
    it("Digitar CEP inválido", function() {
        cy.visit("https://www.americanas.com.br/produto/6983188/livro-codigo-limpo-habilidades-praticas-do-agile-software-1")

        cy.get("#freight-field").type("00000-000").should("have.value", "00000-000")
        cy.get("#freight-field-button").click()
        
        cy.get("body").contains("Preencha um CEP válido.")
    })


})