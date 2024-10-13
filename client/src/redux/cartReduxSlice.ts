import {createSlice,PayloadAction } from "@reduxjs/toolkit";
export type Goods = {
   _id:string,
   title:string,
   desc:string,
   desc1?:string,
   img1:string,
   img2:string,
   img3:string,
   price1:number,
   price2:number,
   price3:number,
   price4:number,
}
export type Cartproduct = {
   product: Goods,
   quantity: number,
   price: number,
   selectedsize?: string,
   userId: string; 
};

type cartState = {
   products: Cartproduct[],
   quantity: number,
   total: number,
   userId:string
};
const initialState: cartState = {
   products: [],
   quantity: 0,
   total: 0,
   userId:''
};
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        resetCart:(state)=>{
            state.total= 0;
            state.quantity = 0;
            state.products = [];
        },
        addProduct: (state, action: PayloadAction<Cartproduct>) => {
            const newProduct = action.payload;    
            state.products.push(newProduct);
            state.quantity += newProduct.quantity;
            state.total += newProduct.price * newProduct.quantity;
        },
    deleteProduct: (state, action: PayloadAction<{ productId: string; userId: string }>) => {
        const { productId, userId } = action.payload;
        const index = state.products.findIndex((item) => item.product._id === productId && item.userId === userId);
        if (index >= 0) {
            const quantityToRemove = state.products[index].quantity;
            const priceToRemove = state.products[index].price; 
        
            if (state.total >= priceToRemove * quantityToRemove) {
                state.total -= priceToRemove * quantityToRemove;
            } else {
                state.total = 0; 
            }
    
            state.products.splice(index, 1); 
            state.quantity -= quantityToRemove; 
            if (state.products.length === 0) {
                state.total = 0;
                state.quantity = 0;
            }
        }
    },
    increaseQuantity: (state, action: PayloadAction<{ productId: string; userId: string }>) => {
        const { productId, userId } = action.payload;
        const index = state.products.findIndex(item => item.product._id === productId && item.userId === userId);
        if (index >= 0) {
            state.products[index].quantity += 1; 
            state.total += state.products[index].price; 
        }
    },
    decreaseQuantity: (state, action: PayloadAction<{ productId: string; userId: string }>) => {
        const { productId, userId } = action.payload;
        const index = state.products.findIndex(item => item.product._id === productId && item.userId === userId);
        if (index >= 0) {
            if (state.products[index].quantity > 1) {
                state.products[index].quantity -= 1; 
                state.total -= state.products[index].price; 
            } else {
                const priceToRemove = state.products[index].price;
                state.total -= priceToRemove;
                state.products.splice(index, 1);
            }
        }
    },
    
    clearCartAction:(state)=>{
        state.total= 0;
        state.quantity = 0;
        state.products = []
    }
},
})
export const {addProduct,deleteProduct,clearCartAction,increaseQuantity,resetCart,decreaseQuantity}=cartSlice.actions;
export default cartSlice.reducer

