
import Logo from '../Logo/logo';
import Search from '../Search/Search';
import './index.css';
import cn from 'classnames';



const Header = ({user, updateUserHandle, onInput,onSubmit}) => {
    const handleClickButtonEdit = (e) => {
        e.preventDefault();
        updateUserHandle({name: "Иван Волков", about: 'Студент'});
    }
    return (
        <header className='header'>
            <div className="container">
                {user?.email && <span>{user?.email}</span>}
                {user?.name ? <span>{user?.name}</span> : null}
                <button onClick={handleClickButtonEdit}>
                    Изменить
                </button>
                <div className="header__wrapper">
                    <Logo />
                    <Search onInput={onInput} onSubmit={onSubmit}/>
                </div>
            </div>
        </header>
    )
}

export default Header;