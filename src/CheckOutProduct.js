import { Button } from '@material-ui/core'
import React from 'react'
import './CheckOutProduct.css'
import { useStateValue } from './StateProvider'

function CheckOutProduct({ id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                     {
                    Array(rating).fill().map((_) => (<p>⭐</p>))  // loop to fill no of stars
                     }
                </div>
                <Button onClick={removeFromBasket}>Remove from basket</Button>
            </div>
        </div>
    )
}

export default CheckOutProduct
