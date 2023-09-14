import PropTypes from 'prop-types';

const CartItem = ({ courses }) => {
    const { name } = courses
    return (

        <li className=' font-medium text-gray-500 p-1'>{name}</li>

    );
};
CartItem.propTypes = {
    courses: PropTypes.object
}

export default CartItem;