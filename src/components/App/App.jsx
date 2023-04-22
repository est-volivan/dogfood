import './index.css';
import Header from "../Header/Header";
import CardList from "../CardList/CardList"
import Footer from "../Footer/Footer"
import { useState, useEffect } from 'react'; 
import api from "../../utils/api";
import useDebounce from '../../hook/useDebounce';

function Application() {
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const debounceSearchQuery = useDebounce(searchQuery, 300);
    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getProductList()])
            .then(([userData, cardData]) => {
                setCurrentUser(userData);
                setCards(cardData.products);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        handleRequest();
    },[debounceSearchQuery]);

    const handleRequest = () => {
        api.search(debounceSearchQuery).then(data => {
            setCards(data);
        }).catch(err => console.error(err));
    }
    function handleFormSubmit(e) {
        
        e.preventDefault();
        handleRequest();
    }
    const handleInputChange = (inputValue) => {
        setSearchQuery(inputValue);
    }

    const handleUpdateUser = (userUpdate) => {
        api.setUserInfo(userUpdate).then((newUserData) => {
            setCurrentUser(newUserData);
        })
    }

    const handleProductLike = (product) => {
        const isLiked = product.likes.includes(currentUser?._id); 
        api.changeLikeProduct(product, isLiked).then((newCard) => { 
            const newCards = cards.map((card) => {
                return card._id === newCard._id ? newCard : card;
             })
            setCards(newCards);
        })
    }

    return (
        <>
            <Header onInput = {handleInputChange} onSubmit = {handleFormSubmit} updateUserHandle = {handleUpdateUser} user = {currentUser}/>
            <CardList items = {cards} onProductLike={handleProductLike} currentUser={currentUser}/>
            <Footer/>
        </>
    )
}

export default Application;