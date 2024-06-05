import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { PokemonType } from '../types/PokemonType'

const Dashboard = () => {

    const [pokemon, setPokemon] = useState<PokemonType[]>([])
    const api = `http://localhost:3000/pokemon`
    useEffect(() => {

        async function loadData() {
            const response = await fetch(api)
            const data = await response.json()
            setPokemon(data)
        }

        loadData()
    }, [])

    return (

        <div className={styles.container}>
            <h1>Dashboard</h1>

            <ul>
                {pokemon.map((pokemon) => (
                    <li key={pokemon.id} className={styles.pokemon}>
                        <img src={pokemon.image} alt={`imagem do pokemon ${pokemon.name}`} width={100} height={100} />
                        <strong>Tipo: {pokemon.type}</strong>
                        <h3>{pokemon.name}</h3>
                    </li>
                )
                )
                }
            </ul>

        </div>
    )
}

export default Dashboard