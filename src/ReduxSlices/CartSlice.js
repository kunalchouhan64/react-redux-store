import { createSlice } from '@reduxjs/toolkit'
import ProductData from '../ProductData'


const iniState = {
    cart: [], // Empty Cart
    items: ProductData, // Storing product Data into the items
    totalQuantity: 0, // The Quantity in starting
    totalPrice: 0 // Subtotal Price
}
const cartSlice = createSlice({
    name: "cart", //Name of the cart
    initialState: iniState, //Giving the initial state
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {
                state.cart.push(action.payload)
            }

        },
        IncQuantity: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            state.cart[find].quantity += 1


        },
        DecQuantity: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            state.cart[find].quantity -= 1
        },
        deleteItem: (state, action) => {
            // let find = state.cart.findIndex((item) => item.id === action.payload.id);
            // state.cart[find] = []
            state.cart = state.cart.filter((item) => item.id !== action.payload);

        },
        emptyCart: (state, action ) =>{
state.cart = []
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("carttotal", cartTotal);
                    console.log("cartitem", cartItem);
                    const { price, quantity } = cartItem;
                    console.log(price, quantity);
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },


    }
});

export const { addToCart, IncQuantity, DecQuantity, deleteItem, getCartTotal,emptyCart } = cartSlice.actions
export default cartSlice.reducer