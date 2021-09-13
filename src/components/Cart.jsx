import { useContext } from 'react';
import { ShopContext } from '../context';


function Cart() {
    const { order,
        handleBasketShow = Function.prototype
    } = useContext(ShopContext)

    const quantity = order.length

    return (
        <div
            className='cart orange darken-2'
            onClick={handleBasketShow}
        >
            <i className='material-icons'>
                shop_two
            </i>
            {quantity ?
                <span className='cart-quantity'>{quantity}</span>
                : null}
        </div>
    )
}

export { Cart }