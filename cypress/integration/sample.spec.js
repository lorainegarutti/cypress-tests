describe("Cenário 1", function() {
    it("Pesquisar o livro 'Código Limpo'", function() {
        cy.visit("https://amazon.com.br")
        
        cy.get("#twotabsearchtextbox")
          .type("Livro Codigo Limpo")
          .should("have.value", "Livro Codigo Limpo")

        cy.get("div.nav-right > div.nav-search-submit > input.nav-input").click({force:true})
    })
})

describe("Cenário 2", function() {
    it("Acessar o primeiro item da busca", function() {
        cy.get("div[data-index='0']>div>span>div>div>div>div>div>div>span>a.a-link-normal")
          .click({force:true})
    
    })
})

describe("Cenário 3", function() {
    it("Colocar o livro no carrinho", function() {
        cy.get("#add-to-cart-button")
          .click()
    })
    it("Abrir o carrinho", function() {
        cy.get("#hlb-view-cart-announce")
          .click()
    })
})