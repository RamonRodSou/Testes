import { PokemonType } from "../types/PokemonType";

const BASE_URL = "http://localhost:3000"

export async function fetchPokemonList(): Promise<PokemonType[]> {
    const response = await fetch(`${BASE_URL}/pokemon`)
    return await response.json()
}

export async function fetchPokemonDetails(id: number): Promise<PokemonType> {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`)
    return await response.json()
} 