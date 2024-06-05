import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './styles.module.scss'
import { PokemonType } from '../../types/PokemonType'

interface IProps {
    fetchPokemonDetails: (id: number) => Promise<PokemonType>
}

const PokemonDetails = ({ fetchPokemonDetails }: IProps) => {

    const params = useParams()

    const [error, setError] = React.useState<string>("")
    const [pokemon, setPokemon] = useState<PokemonType>({
        id: 0,
        image:"",
        name:"",
        type:""
    })

    useEffect(() => {
        (async () => {
            setError("")
            if(!params.id || params.id === "0") {
                setError("O id não é válido!")
                return
            }

            const data = await fetchPokemonDetails(parseInt(params.id))
            setPokemon(data)
        })()
    }, [])

    return (
        <div className={styles.container}>
            <div key={pokemon.id} className={styles.pokemon}>
                <img src={pokemon.image} alt={`imagem do pokemon ${pokemon.name}`} />
                <strong>Tipo: {pokemon.type}</strong>
                <h3>{pokemon.name}</h3>
            </div>

            <Link to="/dashboard">Voltar</Link>

            {  error && <strong>{error}</strong> }

        </div>
    )
}

export default PokemonDetails