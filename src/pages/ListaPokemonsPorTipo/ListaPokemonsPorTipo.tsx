import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PokeCard from '../../components/PokeCard/PokeCard';
import './ListaPokemonsPorTipo.css';

interface Pokemon {
    name: string;
    url: string;
    image: string;
    description: string;
}

const ListaPokemonPorTipo = () => {
    const { tipo } = useParams<{ tipo: string }>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [tipoImg, setTipoImg] = useState<string>('');

    useEffect(() => {
        const fetchPokemonPorTipo = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/type/${tipo}`);
            const pokemonData = await Promise.all(
                response.data.pokemon.map(async (p: { pokemon: Pokemon }) => {
                    const pokemonDetails = await axios.get(p.pokemon.url);
                    return {
                        name: pokemonDetails.data.name,
                        image: pokemonDetails.data.sprites.front_default,
                        url: p.pokemon.url,
                        description: `Pokémon do tipo ${tipo}`
                    };
                })
            );
            setPokemonList(pokemonData);
            setTipoImg(response.data.sprites['generation-iii']['firered-leafgreen'].name_icon);
        };

        fetchPokemonPorTipo();
    }, [tipo]);

    return (
        <div className="lista-pokemon-por-tipo">
            <div className="titulo">
                <h1>Pokémon do tipo <img src={tipoImg} className="tipo-img" alt={tipo} /></h1>
            </div>
            <div className="pokemon-list">
                {pokemonList.map((pokemon, index) => (
                    <PokeCard
                        key={index}
                        name={pokemon.name}
                        image={pokemon.image}
                        description={pokemon.description}
                        linkTo={`/pokemon/${pokemon.name}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListaPokemonPorTipo;