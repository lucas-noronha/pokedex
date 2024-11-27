import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__spacer"></div>
            <div className="header__logo">
                <Link to={'/'}><img src={logo} alt="Logo" className="logo" /></Link>
            </div>
            <div className="header__nav">
                <Link to='/tipos' className="header__button">Tipos de Pokémon</Link>
            </div>
        </header>
    );
}

export default Header;