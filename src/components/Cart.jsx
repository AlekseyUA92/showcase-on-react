function Cart(props) {
    const {quantity = 0, 
           handleBasketShow = Function.prototype} = props

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

export {Cart}