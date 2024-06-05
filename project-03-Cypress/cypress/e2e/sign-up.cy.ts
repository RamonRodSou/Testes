describe("Testa a página sign-up", () => {

    it("Quando clicar em Sign Up deve ir para página Dashboard", () => {

        cy.visit("/sign-up")
        cy.contains("Sign Up").click()
        cy.contains("Dashboard")
    });
    
    it("Quando clicar em Sign Up deve ir para página Dashboard e 3 pokemons", () => {

        cy.visit("/sign-up")
        cy.contains("Sign Up").click()
        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture:'pokemons.json'
        })
        cy.contains("Pikachu")
        cy.contains("Rotom")
        cy.contains("Charmander")

    });

    it("Quando clicar em Sign Up deve ir para página Dashboard, clicar no Pikachu e ir para página Pokemon details ", () => {

        cy.visit("/sign-up")
        cy.contains("Sign Up").click()
        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture:'pokemons.json'
        })
        cy.contains("Pikachu").click()
        cy.contains("Voltar")

    });

    it("Quando clicar em  'Já tem cadastro?' deve ir para tela de login ", () => {

        cy.visit("/sign-up")
        cy.contains("Já tem cadastro? Clique aqui").click()
        cy.contains("Sign In")
        cy.contains("Login")

    });


    
})

