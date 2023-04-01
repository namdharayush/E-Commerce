
const CartReducer = (state,action) => {

    if(action.type === "ADD_TO_CART"){
        let {id , amount , product} = action.payload;

        let exitingProduct = state.cart.find((curEle)=>curEle.id === id);

        if(exitingProduct){
            let updateProduct = state.cart.map((curEle)=>{
                if(curEle.id === id){
                    let newAmount = curEle.amount + amount
                    if(newAmount >= curEle.max){
                        newAmount = curEle.max
                    }
                    return {
                        ...curEle,
                        amount : newAmount,
                    }
                }
                else{
                    return curEle;
                }
            })
            return{
                ...state,
                cart :updateProduct,
            }

        }
        else{
    
            let cartProduct={
                id:id,
                mobilename : product.mobilename,
                amount,
                image : product.image,
                price : product.price,
                stock : product.stock,
                max: product.stock
            }
            return{
                ...state,
                cart : [...state.cart,cartProduct]
            }
        }

        
    }

    if(action.type === "REMOVE_ITEM"){
        let updateCart = state.cart.filter((curEle)=> curEle.id != action.payload);
        return{
            ...state,
            cart:updateCart
        }
    }

    if(action.type==="CLEAR_CART"){
        return {
            ...state,
            cart : []
        }
    }

    if(action.type === "SET_DECREASE"){
        let updatedProduct = state.cart.map((ele)=>{
            if(ele.id === action.payload){
                let decreamentAMount = ele.amount - 1

                if(decreamentAMount <= 1){
                    decreamentAMount = 1
                }
                return{
                    ...ele,
                    amount : decreamentAMount
                }
            }
            else{
                return ele;
            }
        })

        return{
            ...state , cart:updatedProduct
        }
    }
    if(action.type === "SET_INCREASE"){
        let updatedProduct = state.cart.map((ele)=>{
            if(ele.id === action.payload){
                let IncreamentAMount = ele.amount + 1

                if(IncreamentAMount >= ele.max){
                    IncreamentAMount = ele.max
                }
                return{
                    ...ele,
                    amount : IncreamentAMount
                }
            }
            else{
                return ele;
            }
        })

        return{
            ...state , cart:updatedProduct
        }
    }
    if(action.type === "SET_CART_QUANTITY"){
        let updateItemQuantity = state.cart.reduce((initialValue , ele) => {
            let {amount} = ele;
            initialValue = initialValue+amount;
            return initialValue
        } ,0);
        return{
            ...state,
            total_items : updateItemQuantity,
            
        }
    }

    return state;
}

export default CartReducer;
