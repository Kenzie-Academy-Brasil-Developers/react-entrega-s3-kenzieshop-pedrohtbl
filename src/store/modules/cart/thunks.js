import { addCart, removeCart } from "./actions"

export const addCartThunk = (product) => (dispatch)=>{
    const list = JSON.parse(localStorage.getItem("@kenzieShop:cart")) || []

    list.push(product)

    localStorage.setItem("@kenzieShop:cart", JSON.stringify(list))

    dispatch(addCart(product))
}

export const removeCartThunk = (id) => (dispatch, getState) =>{
    const {cart} = getState()

    console.log(cart)

    const list = cart.filter(product => Number(product.id) !== Number(id))

    localStorage.setItem("@kenzieShop:cart", JSON.stringify(list))

    dispatch(removeCart(list))
}