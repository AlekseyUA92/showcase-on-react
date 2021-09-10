function BasketItem(props) {
    const {
        mainId,
        displayName,
        regularPrice,
        quantity
    } = props

    return (
        <li href="#!" class="collection-item">
            {displayName} x{quantity} = {regularPrice}
            <button class="secondary-content">
                <i class="material-icons basket-delete">
                    clear
                </i>
            </button>
        </li>
    )
}

export {BasketItem}