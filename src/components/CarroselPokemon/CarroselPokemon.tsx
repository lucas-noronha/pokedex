import Slider from 'react-slick';
import { CarrosselPokemonProps } from "../../interfaces/CarrosselPokemonProps";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarroselPokemon.css';

const CarrosselPokemon = ({ imagens }: CarrosselPokemonProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 20,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className="carrossel-pokemon">
            {imagens.map((imagem, index) => (
                <div key={index}>
                    <img src={imagem} alt={`Pokemon sprite ${index}`} />
                </div>
            ))}
        </Slider>
    );
};

export default CarrosselPokemon;