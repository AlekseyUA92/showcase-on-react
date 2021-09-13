export function reducer(state, {type, payload}) {
    switch(type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
            
        case 'SET_LOADING':
            return {
                ...state,
                goods: payload.status
            }

        case 'ADD_IN_ORDER': {
                const itemIndex = state.order.findIndex(orderItem => orderItem.mainId === payload.mainId)

                let newOrder = null
                if (itemIndex < 0) {
                    const newItem = {
                        ...payload,
                        quantity: 1
                    }
                    newOrder = [...state.order, newItem]
                } else {
                    newOrder = state.order.map((orderItem, index) => {
                        if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                        } else {
                        return orderItem
                        }
                    })
                }

                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.displayName 
                }
                
        }
            
        case 'INCREMENT_QUANTITY': 
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity + 1
                        return {
                        ...el,
                        quantity: newQuantity
                        }
                    } else {
                        return el
                    }
                    })
            }
        case 'DECREMENT_QUANTITY': 
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity - 1
                        return {
                        ...el,
                        quantity: newQuantity >= 0 ? newQuantity : 0
                        }
                    } else {
                        return el
                    }
                    })
            }

        case 'REMOVE_FROM_BASKET': 
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== payload.id)
            }

        case 'TOGGLE_BASKET_SHOW': 
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }

        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        
        default: 
            return state
    }
}
