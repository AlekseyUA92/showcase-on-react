import { useContext } from 'react';
import { ShopContext } from '../context';

import { BasketItem } from './BasketItem';

function BasketList() {
    const {
        order = [],
        handleBasketShow = Function.prototype
    } = useContext(ShopContext)

    const totalPrice = order.reduce((sum, el) => {
        return sum + Math.floor(el.regularPrice * 0.36) * el.quantity
    }, 0)

    return (<ul className="collection basket-list">
        <li href="#!" className="collection-item active">Корзина</li>
        {
            order.length ? order.map(item => (
                <BasketItem
                    key={item.mainId} {...item}
                />
            )) : <li href="#!" className="collection-item">Корзина пуста</li>
        }
        <li href="#!" className="collection-item active">
            Общая стоимость: {totalPrice} UAH
        </li>
        <li href="#!" className="collection-item">
            <button className='btn btn-small'>Купить</button>
        </li>
        <i className='material-icons basket-close' onClick={handleBasketShow}>
            close
        </i>
    </ul>)
}

export { BasketList }