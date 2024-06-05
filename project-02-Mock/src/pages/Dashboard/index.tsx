import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { PokemonType } from '../../types/PokemonType'
import { useNavigate } from 'react-router-dom'

// Utilizando o Design Pattern Injecao de dependencia
interface IProps {
    fetchPokemonList: () => Promise<PokemonType[]>
}
// Utilizando o Design Pattern Injecao de dependencia
const Dashboard = ({ fetchPokemonList }: IProps) => {

    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState<PokemonType[]>([])


    function handleNavigate (id: number){
        navigate(`/pokemon-details/${id}`)
    }


    // Utilizando o Design Pattern Injecao de dependencia
    useEffect(() => {
        (async () => {
            const data = await fetchPokemonList()
            setPokemon(data)
        })()

    }, [])

    return (

        <div className={styles.container}>
            <h1>Dashboard</h1>
            <ul>
                {pokemon.map((pokemon) => (
                    <li key={pokemon.id} className={styles.pokemon} onClick={()=> handleNavigate(pokemon.id)}>
                        <img src={pokemon.image} alt={`imagem do pokemon ${pokemon.name}`} width={100} height={100} />
                        <strong>Tipo: {pokemon.type}</strong>
                        <h3>{pokemon.name}</h3>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Dashboard