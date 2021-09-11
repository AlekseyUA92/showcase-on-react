function BasketItem(props) {
    const {
        mainId,
        displayName,
        regularPrice,
        quantity,
        removeFromBasket,
        incQuantity,
        decQuantity
    } = props

    return (
        <li href="#!" class="collection-item">
            {displayName} 
            {/* <span 
            className='btn-small quantBtns'
            onClick={() => (decQuantity(mainId))}>-</span> */}
            <i className='material-icons quantBtns' onClick={() => decQuantity(mainId)}>remove</i>
            x{quantity}
            <i className='material-icons quantBtns' onClick={() => incQuantity(mainId)}>add</i>
            {/* <span 
            className='btn-small quantBtns'
            onClick={() => (incQuantity(mainId))}>+
            </span>  */}
            = {regularPrice * quantity}
            <span class="secondary-content"
                onClick={() => removeFromBasket(mainId)}>
                <i class="material-icons basket-delete" >
                    clear
                </i>
            </span>
        </li>
    )
}

export {BasketItem}