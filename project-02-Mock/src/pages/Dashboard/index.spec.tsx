import Dashboard from "."
import { fireEvent, render, screen } from "@testing-library/react"
import { fetchPokemonList } from "../../services/PokemonService"
import { vi } from "vitest"
import { faker } from "@faker-js/faker"

// Utilizando o Design Pattern Injecao de dependencia

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation (
    async ()=> {
        return [
            {
                id: 1,
                name: "Pikachu",
                image: faker.image.urlPlaceholder(),
                type: "Electron"
            },
            {
                id: 2,
                name: "Charmander",
                image: faker.image.urlPlaceholder(),
                type: "Fogo"
            }

        ]
    }
);

const navigateMock = vi.fn()


describe("Testando o component Dashboard", ()=>{

    vi.mock("react-router-dom", () => ({
        useNavigate: () => {
            return navigateMock
        },

        // Fazendo Mock do Link
        Link: vi.fn().mockImplementation((props) => props.children),
    }));

    test("Deve haver um titulo escrito 'Dashboard'", async()=> {

        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)
        const title = await screen.findByRole("heading", {
            name: /Dashboard/i
        })

        expect(title).toBeInTheDocument()
    });

    test("Deve haver um titulo escrito 'Dashboard'", async()=> {

        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)
        const title = await screen.findByRole("heading")

        expect(title).toHaveTextContent(/DashBoard/i)
    });

    test("Deve haver uma lista com 10 pokemons", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)
        const items = await screen.findAllByRole("listitem")

        expect(items).toHaveLength(2)
    });

    test("Deve haver um pokemon chamado Pikachu", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)
        const picachu = await screen.findByText("Pikachu")

        expect(picachu).toBeInTheDocument()

    });

    test("Deve ser possível clicar em li para abrir a página de detalhes do pokemon", async () =>{
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)
        const  link = await screen.findByText("Pikachu")
        fireEvent.click(link)
        expect(navigateMock).toHaveBeenCalledTimes(1)
    })
})