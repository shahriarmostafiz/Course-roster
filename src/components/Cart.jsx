import PropTypes from 'prop-types';
import CartItem from './CartItem';
const Cart = ({ selectedCourses, creditHour }) => {
    return (
        <div>
            <h1>Total Credit Remaining: </h1>
            <div>
                {
                    selectedCourses.map((courses, idx) => <CartItem key={idx} courses={courses}></CartItem>)
                }
            </div>
            <h1>Total Credit Hour: {creditHour}</h1>
        </div>
    );
};
Cart.propTypes = {
    selectedCourses: PropTypes.array,
    creditHour: PropTypes.number
}
export default Cart;