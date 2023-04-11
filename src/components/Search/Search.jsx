import './index.css';
import SearchImg from "./ic-search.svg"

function Search({onInput}) {
    return (
      <form className='search'>
          <input type="text" className='search__input' placeholder='Поиск' onChange={onInput}/>
          <button type='button' className='search__btn'><img src={SearchImg} /></button>
      </form>
 
    )
}

export default Search;
