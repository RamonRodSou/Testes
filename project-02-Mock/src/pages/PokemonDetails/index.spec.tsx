import { vi } from "vitest"
import PokemonDetails from "."
import { fetchPokemonDetails } from "../../services/PokemonService"
import { faker } from "@faker-js/faker"
import { render, screen } from "@testing-library/react"
import * as rrd from "react-router-dom"

const mockFn = vi.fn(fetchPokemonDetails)
const mockFetchPokemonDetailFn = mockFn.mockImplementation(async () => {
        return {
            id: 1,
            image: faker.image.urlPlaceholder(),
            name: "Pikachu",
            type: "Electric"
        }
})


describe("Testa o Componente PokemonDetails", () => {

    vi.mock("react-router-dom", ()=> {
        return {
            useParams: () => ({
                id: 1,
            }),
            Link: vi.fn().mockImplementation((props) => props.children),
        }
    });

    test("Deve haver um título na página", async () => {
        render(<PokemonDetails fetchPokemonDetails={mockFetchPokemonDetailFn}/>)

        const pikachu = await screen.findByText("Pikachu")
        expect(pikachu).toBeInTheDocument()
    });

    test("Deve haver um opção para voltar a página", async () => {
        render(<PokemonDetails fetchPokemonDetails={mockFetchPokemonDetailFn}/>)

        const voltar = await screen.findByText("Voltar")
        expect(voltar).toBeInTheDocument()
    });

    test("Deve validar quando não vier parâmetro na rota", async () => {

        vi.spyOn(rrd,"useParams").mockImplementationOnce(() =>({id:"0"}) ) 

        render(<PokemonDetails fetchPokemonDetails={mockFetchPokemonDetailFn}/>)
        const errorText = await screen.findByText("O id não é válido!")
        expect(errorText).toBeInTheDocument()

    });
});