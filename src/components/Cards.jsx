import { data } from 'autoprefixer';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

Cards.propTypes = {

}
export default Cards;