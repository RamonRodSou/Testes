describe ("Testa página Dashboard", () => {

    it("Deve carregar uma lista com 3 pokemon", () =>  {

        cy.visit("/dashboard")
        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: 'pokemons.json'
        })
        cy.contains("Pikachu")
        cy.contains("Rotom")
        cy.contains("Charmander")

    });

    
    it("Quando clicar em um pokemon deve carregar tela de PokemonDetails", () =>  {

        cy.visit("/dashboard")
        cy.contains("Pikachu").click()

        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: 'pokemonDetails.json'
        })
        
        cy.contains("Voltar")

    });

    it("Quando clicar em um pokemon deve carregar tela de PokemonDetails e deve clicar em voltar e testar se tem 3 pokemons na tela", () =>  {

        cy.visit("/dashboard")
        cy.contains("Pikachu").click()

        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: 'pokemonDetails.json'
        })
        
        cy.contains("Voltar").click()
        
        cy.contains("Pikachu")
        cy.contains("Rotom")
        cy.contains("Charmander")

        cy.get("div").find("ul").should("have.css", "display").and("match", /flex/)

    });


    
    it("Deve haver 3 pokemons na tela", () =>  {

        cy.visit("/dashboard")

        cy.intercept('GET', 'http://localhost:3000/pokemon/', {
            fixture: 'pokemons.json',
        })

        cy.get("div")
          .find("li")
          .should(($li) => {
            expect($li).to.have.length(10)

            const pikachu = $li[0]
            const rotom = $li[1]
            const charmander = $li[2]

            expect(pikachu.textContent).to.contain("Pikachu")
            expect(rotom.textContent).to.contain("Rotom")
            expect(charmander.textContent).to.contain("Charmander")
        })
    });

})