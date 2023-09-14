import PropTypes from 'prop-types';
import CartItem from './CartItem';
const Cart = ({ selectedCourses, creditHour, remainnigCredit }) => {
    return (
        <div className='p-4 w-1/4 '>
            <div className='bg-white shadow-md border py-4 px-4 rounded-2xl h-fit'>
                <h1 className='text-blue-600 text-2xl font-medium pb-2 border-b-[3px]'>Credit Hour Remaining {remainnigCredit} hr </h1>

                <h1 className='text-2xl font-medium py-2 my-2'>Course Name</h1>
                <div className='list-decimal mb-2'>
                    {
                        selectedCourses.map((courses, idx) => <CartItem key={idx} courses={courses}></CartItem>)
                    }
                </div>

                <h1 className=' font-medium text-gray-500 p-1 border-t-[3px] '>Total Credit Hour: {creditHour}</h1>
            </div>
        </div>
    );
};
Cart.propTypes = {
    selectedCourses: PropTypes.array,
    creditHour: PropTypes.number,
    remainnigCredit: PropTypes.number
}
export default Cart;