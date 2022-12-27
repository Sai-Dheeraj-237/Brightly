export function getCartDetails (products){
    console.log("Products are Added to The Cart");
    // const promise = add() , remove();

    // const cartProduct= () =>{
    //     add:(state,action)=>{
    //         state.products.push(action.payload)
    //     }
    //     remove:(state,action)=>{
    //         state.products.splice(action.payload,1)
    //     }

    // }

    // const add= (state,action) =>{
    //         state.products.push(action.payload)
    //     }
    
    // const remove = (state,action)=>{
    //         state.products.splice(action.payload,1)
    //     }




    return{
      type:"user-proudcts-cart",
      payload:{
        add: (state,action) =>{
            state.products.push(action.payload)
        },
    
      remove :(state,action)=>{
            state.products.splice(action.payload,1)
        }
      }
    }
}