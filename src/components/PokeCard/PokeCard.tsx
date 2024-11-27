import { Link } from 'react-router-dom';
import './PokeCard.css';
import { PokemonCardProps } from "../../interfaces/PokemonCardProps";

const PokeCard = ({ name, image, description, linkTo }: PokemonCardProps) => {
    return (
        <div className="pokemon-card">
            <Link to={linkTo} className="pokemon-card__link">
                <img src={image} alt={name} className="pokemon-card__image" />
                <div className="pokemon-card__content">
                    <h3 className="pokemon-card__name">{name}</h3>
                    <p className="pokemon-card__description">{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default PokeCard;