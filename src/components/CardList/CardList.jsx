import './index.css';
import Card from '../Card/Card'
import data from '../../assets/data.json'


const CardList = ({query}) => {
    const foodArray = data
    return (
        <div className='main'>
            <div className='cards'>
                {
                foodArray.filter(e => e.name.toLowerCase().includes(query.toLowerCase())).map(e => <Card  key={e.name.toString()} name={e.name} price={e.price} discount={e.discount} wight={e.wight} description={e.description} picture={e.picture}/>)
                }
            </div>
        </div>
    );
};

export default CardList;
