import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetalhesPokemon.css';
import { PokemonDetailsProps } from "../../interfaces/PokemonDetailsProps";
import InfoPokemon from '../../components/InfoPokemon/InfoPokemon';
import HabilidadesPokemon from '../../components/HabilidadesPokemon/HabilidadesPokemon';
import TiposPokemon from '../../components/TiposPokemon/TiposPokemon';
import { useEffect, useState } from 'react';

const DetalhesPokemon = () => {
    const { name } = useParams<{ name: string }>();
    const [pokemon, setPokemon] = useState<PokemonDetailsProps | null>(null);

    useEffect(() => {
        const buscarDetalhesPokemon = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = response.data;
            const imagens = Object.values(data.sprites)
                .filter((sprite: any) => typeof sprite === 'string' && sprite !== null) as string[];
            setPokemon({
                name: data.name,
                image: imagens,
                height: data.height,
                weight: data.weight,
                types: data.types.map((type: { type: { name: string } }) => type.type.name),
                abilities: data.moves.map((move: { move: { name: string } }) => move.move.name),
            });
        };

        buscarDetalhesPokemon();
    }, [name]);

    if (!pokemon) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="detalhes-pokemon">
            <div className="detalhes-pokemon__overlay">
                <InfoPokemon nome={pokemon.name} imagens={pokemon.image} altura={pokemon.height} peso={pokemon.weight} />
                <div className="detalhes-pokemon__colunas">
                    <HabilidadesPokemon habilidades={pokemon.abilities} />
                    <TiposPokemon tipos={pokemon.types} />
                </div>
            </div>
        </div>
    );
};

export default DetalhesPokemon;