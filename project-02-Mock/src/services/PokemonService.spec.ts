import { vi } from "vitest";
import { PokemonType } from "../types/PokemonType";
import { faker } from "@faker-js/faker";
import { fetchPokemonDetails, fetchPokemonList } from "./PokemonService";

global.fetch = vi.fn()
// globalThis.fetch = vi.fn()


function createFetchResponse(data: any) {
    return { json: () => new Promise((response) => response(data))}
}

describe ("Testa o service PokemonService", () => {

    test("Verifica se foi feito um get list para a url correta", async () => {
        const pokemonListResponse: PokemonType[] = [
            {
                id: 1,
                image: faker.image.urlPlaceholder(),
                name: faker.animal.bear.name,
                type: faker.animal.type(),
            },
            {
                id: 2,
                image: faker.image.urlPlaceholder(),
                name: faker.animal.bear.name,
                type: faker.animal.type(),
            }
        ]
        fetch.mockResolvedValue(createFetchResponse(pokemonListResponse))

        const pokemonList = await fetchPokemonList()

        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon")
        expect(pokemonList).toStrictEqual(pokemonListResponse)
    });


    test("Verifica se foi feito um get details para a url correta", async () => {
        const pokemonDetailsResponse: PokemonType = 
            {
                id: 1,
                image: faker.image.urlPlaceholder(),
                name: faker.animal.bear.name,
                type: faker.animal.type(),
            }
        
        fetch.mockResolvedValue(createFetchResponse(pokemonDetailsResponse))

        const pokemonList = await fetchPokemonDetails(1)

        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon/1")
        expect(pokemonList).toStrictEqual(pokemonDetailsResponse)
    });

})