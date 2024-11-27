import './TiposPokemon.css';

interface TiposPokemonProps {
    tipos: string[];
}

const TiposPokemon = ({ tipos }: TiposPokemonProps) => {
    return (
        <div className="tipos-pokemon">
            <h3>Tipos</h3>
            <ul>
                {tipos.map((tipo, index) => (
                    <li key={index}>{tipo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TiposPokemon;