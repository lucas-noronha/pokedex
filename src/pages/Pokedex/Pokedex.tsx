import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pokedex.css';
import { Pokemon } from "../../interfaces/Pokemon";
import PokeCard from '../../components/PokeCard/PokeCard';

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
            const pokemonData = await Promise.all(
                response.data.results.map(async (pokemon: { name: string; url: string }) => {
                    const pokemonDetails = await axios.get(pokemon.url);
                    const speciesDetails = await axios.get(pokemonDetails.data.species.url);
                    const description = speciesDetails.data.flavor_text_entries.find((entry: { language: { name: string } }) => entry.language.name === 'en').flavor_text;
                    return {
                        name: pokemonDetails.data.name,
                        image: pokemonDetails.data.sprites.front_default,
                        description: description
                    };
                })
            );
            setPokemonList(pokemonData);
        };

        fetchPokemon();
    }, []);

    return (
        <div className="pokedex">
            {pokemonList.map((pokemon, index) => (
                <PokeCard
                    linkTo={`/pokemon/${pokemon.name}`}
                    key={index}
                    name={pokemon.name}
                    image={pokemon.image}
                    description={pokemon.description}
                />
            ))}
        </div>
    );
};

export default Pokedex;