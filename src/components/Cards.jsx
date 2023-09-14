import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Card from './Card';

const Cards = ({ handleAddCourse }) => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='w-3/4 flex justify-center'>
            <div className='grid grid-cols-3 gap-4 p-4'>
                {
                    cards.map(card => <Card key={card.id} handleAddCourse={handleAddCourse} card={card}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handleAddCourse: PropTypes.func
}
export default Cards;