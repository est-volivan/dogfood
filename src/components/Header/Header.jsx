
import Logo from '../Logo/logo';
import Search from '../Search/Search';
import './index.css';



const Header = ({onInput}) => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <Logo />
                    <Search onInput={onInput}/>
                </div>
            </div>
        </header>
    )
}

export default Header;