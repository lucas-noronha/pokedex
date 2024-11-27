import { HabilidadesPokemonProps } from "../../interfaces/HabilidadesPokemonProps";
import './HabilidadesPokemon.css';

const HabilidadesPokemon = ({ habilidades }: HabilidadesPokemonProps) => {
    return (
        <div className="habilidades-pokemon">
            <h3>Habilidades</h3>
            <ul>
                {habilidades.map((habilidade, index) => (
                    <li key={index}>{habilidade}</li>
                ))}
            </ul>
        </div>
    );
};

export default HabilidadesPokemon;