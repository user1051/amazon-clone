export const initialState = {
    basket: [],
    user: null,

};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic to add item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item] //returning the state, and then overwriting the new value of basket with a new value
            }
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket
            
            // we cloned the basket
            let newBasket = [...state.basket];

            // here we found index of item
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)

            if(index >= 0){
                // item exists in basket, remove it
                newBasket.splice(index, 1)
            } else {
                console.warn(`cant remove product (id: ${action.id})`)
            }
            return{...state , basket: newBasket}
        default:
            return state; 
    }
} 

export default reducer;