import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addCart = (product) => ({type: ADD_CART, product})

export const removeCart = (list) => ({type: REMOVE_CART, list})