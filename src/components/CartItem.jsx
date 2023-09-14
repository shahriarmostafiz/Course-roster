import PropTypes from 'prop-types';

const CartItem = ({ courses }) => {
    const { name } = courses
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};
CartItem.propTypes = {
    courses: PropTypes.object
}

export default CartItem;