import PropTypes from 'prop-types';
const Card = ({ card, handleAddCourse }) => {
    const { name, price, credit_hours, cover, description } = card
    return (
        <div className='w-80 p-3 shadow-lg border-2 rounded-xl space-y-2' >
            <div className='flex justify-center'>
                <img src={cover} className='rounded' alt="" />

            </div>
            <div className='space-y-2'>
                <h1 className='text-xl font-medium'>{name}</h1>
                <p>{description}</p>
                <div className='flex gap-4'>
                    <span>Price: {price} $ </span>
                    <span>Credit: {credit_hours} hr</span>
                </div>
                <button onClick={() => handleAddCourse(card)} className='w-full bg-blue-600 text-white p-1'>Select </button>

            </div>

        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object,
    handleAddCourse: PropTypes.func
}
export default Card;