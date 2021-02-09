import React from 'react'
import './Product.css'
import { Button } from '@material-ui/core'
import { useStateValue } from './StateProvider'

function Product({ id, title, price, rating, image }) {

    const [{}, dispatch] = useStateValue()
    const addToBasket =() => {
        // add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
           }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price"><small>$</small><strong>{price}</strong></p>
            <div className="product__rating">
                {
                    Array(rating).fill().map((_) => (<p>⭐</p>))  // loop to fill no of stars
                }
            </div>
            </div>
            <img src={image} alt=""/>
            <Button variant="outlined" onClick={addToBasket}>Add to Basket</Button>
        </div>
    )
}

export default Product
