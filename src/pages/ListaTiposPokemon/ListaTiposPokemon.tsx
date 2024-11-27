import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from '../../components/PokeCard/PokeCard';
import './ListaTiposPokemon.css';
import { Tipo } from "../../interfaces/Tipo";

const ListaTiposPokemon = () => {
    const [tipos, setTipos] = useState<Tipo[]>([]);
    
    useEffect(() => {
        const fetchTipos = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/type');
            
            await Promise.all(
                response.data.results.map(async (tipo: Tipo) => {
                    tipo.image = await obterImagem(tipo.url);
                    tipo.name = tipo.name;
                    tipo.url = tipo.url;
                })
            );
            setTipos(response.data.results);
        };

        fetchTipos();
    }, []);

    const obterImagem = async (url: string): Promise<string> => {
        const response = await axios.get(url);
        return response.data.sprites['generation-iii']['firered-leafgreen'].name_icon;
    };

    return (
        <div className="lista-tipos-pokemon">
            {tipos.map((tipo) => (
                <PokeCard name={tipo.name} linkTo={`/pokemons-por-tipo/${tipo.name}`} image={tipo.image} description={`Pokémon do tipo ${tipo.name}`} />    
            ))}
        </div>
    );
};

export default ListaTiposPokemon;