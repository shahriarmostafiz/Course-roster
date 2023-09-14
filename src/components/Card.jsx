import PropTypes from 'prop-types';
const Card = ({ card }) => {
    const { id, name, price, credit_hours, cover, description } = card
    return (
        <div className='w-80 p-3 shadow-lg border-2 rounded-xl space-y-2' >
            <div>
                <img src={cover} className='rounded' alt="" />

            </div>
            <h1 className='text-xl font-medium'>{name}</h1>
            <p>{description}</p>
            <div>
                <span>Price: {price}</span>
                <span>Credit: {credit_hours}</span>
            </div>
            <button className='w-full bg-blue-600 text-white p-1'>Select </button>


        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}
export default Card;