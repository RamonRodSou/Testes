const URL_BASE = 'http://localhost:3000/pokemon/1'


describe("Testa página PokemonDetails", () => {

    it("Deve renderizar um pokemon na tela", () => {

        cy.visit("pokemon-details/1")
        cy.intercept('GET', URL_BASE, {
            fixture: 'pokemonDetails.json'
        })
        cy.contains("Pikachu")
        cy.contains("Electric")
        cy.get("img").should(
            "have.attr",
            "src",
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        )
    });

    it("Quando clicar em voltar, deve ir para página dashboard", () => {

        cy.visit("pokemon-details/1")
        cy.intercept('GET', URL_BASE, {
            fixture: 'pokemonDetails.json'
        })
        cy.contains("Pikachu")
        cy.contains("Voltar").click()
        cy.contains("Dashboard")


    });

    it("Deve validar a quantidade de div e display flex", () => {

        cy.visit("pokemon-details/1")

        cy.get("div") // Pegar div
            .find("div") // Fazer uma pesquisa de todas as divs dentro da página
            .should(($div) => { // deveria ter 
                expect($div).to.have.length(2) // espero que tenha 2 divs

                const className = $div[0].className // pegar a classe da primeira div
                expect(className).to.match(/container/i) // ver se tem a classe container
            }).then(($div) => { // se tudo de cima der certo, entao...
                expect($div).to.have.css("display", "flex")
            })

    });


})