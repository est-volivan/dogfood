import './index.css';
import Header from "../Header/Header";
import CardList from "../CardList/CardList"
import Footer from "../Footer/Footer"
import { useState } from 'react'; 

function Application() {
    const [query, setQuery] = useState('')
    function onInput(e) {
        setQuery(e.target.value)
    }
    
    return (
        <>
            <Header onInput={onInput}/>
            <CardList query={query}/>
            <Footer/>
        </>
    )
}

export default Application;