import { InfoPokemonProps } from "../../interfaces/InfoPokemonProps";
import CarrosselPokemon from '../CarroselPokemon/CarroselPokemon';

import './InfoPokemon.css';

const InfoPokemon = ({ nome, imagens, altura, peso }: InfoPokemonProps) => {
    return (
        <div className="info-pokemon">
            <h2>{nome}</h2>
            <CarrosselPokemon imagens={imagens} />
            <p>Altura: {altura}</p>
            <p>Peso: {peso}</p>
        </div>
    );
};

export default InfoPokemon;