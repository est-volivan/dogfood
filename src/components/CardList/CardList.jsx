import './index.css';
import Card from '../Card/Card'


const CardList = ({items, currentUser, onProductLike}) => {
    return (
        <div className='main'>
            <div className='cards'>
                {
                items.map(e => <Card  key={e._id} {...e} onProductLike={onProductLike} currentUser={currentUser}/>)
                }
            </div>
        </div>
    );
};

export default CardList;
