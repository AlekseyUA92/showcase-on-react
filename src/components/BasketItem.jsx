import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
    const {
        mainId,
        displayName,
        regularPrice,
        quantity
    } = props

    const { removeFromBasket, decQuantity, incQuantity } = useContext(ShopContext)
    return (
        <li href="#!" className="collection-item">
            {displayName}
            <i className='material-icons quantBtns' onClick={() => decQuantity(mainId)}>remove</i>
            x{quantity}
            <i className='material-icons quantBtns' onClick={() => incQuantity(mainId)}>add</i>
            = {Math.floor(regularPrice * 0.36 * quantity)}
            <span className="secondary-content"
                onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-delete" >
                    clear
                </i>
            </span>
        </li>
    )
}

export { BasketItem }