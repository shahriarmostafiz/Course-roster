import PropTypes from 'prop-types';
import CartItem from './CartItem';
const Cart = ({ selectedCourses }) => {
    return (
        <div>
            <h1>Total Credit Remaining: </h1>
            <div>
                {
                    selectedCourses.map((courses, idx) => <CartItem key={idx} courses={courses}></CartItem>)
                }
            </div>
        </div>
    );
};
Cart.propTypes = {
    selectedCourses: PropTypes.array
}
export default Cart;