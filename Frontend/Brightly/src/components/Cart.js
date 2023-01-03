import { useEffect, useState } from "react";
import './Cart.css'


function Cart(){

    const [state, setState] = useState()

    const getProductsInCart = ()=>{
        var cartProducts =   JSON.parse(localStorage.getItem("cart"));
        
        console.log("Products in Cart", cartProducts);

        const cartItm = cartProducts.map((itm)=>{
            return  <div className="cart-item d-md-flex justify-content-between">
            <div className="px-3 my-3">
                <a className="cart-item-product" href="#" >
                    <div className="cart-item-product-thumb"><img src={itm.image} alt="Product" /></div>
                    <div className="cart-item-product-info">
                        <h4 className="cart-item-product-title">{itm.name}</h4>
                    </div>
                </a>
            </div>
            
            <div className="px-3 my-3 text-center">
                <div className="cart-item-label">Quantity</div>
                <div className="count-input">
                    <select className="form-control">
                        {/* <option onClick={()=>removeItem(cartProducts._id)} >0(delete)</option> */}
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>       
            </div>

            <div className="px-3 my-3 text-center">
                <div className="cart-item-label">Subtotal</div><span className="text-xl font-weight-medium">{itm.price}</span>
                <br></br>  <br></br>
                <div>
                    <button onClick={()=>removeItems(itm._id)} className="btn btn-danger">REMOVE ITEM</button>
                </div>
            </div>

            

        </div>
        })
        return cartItm;
    }


   
    const removeItems =(_id)=>{
        var cartRemove = JSON.parse(localStorage.getItem("cart"));
        cartRemove.map((item, i) => {
                if(_id==item._id){
                    cartRemove.splice(i,1);
                }
        localStorage.setItem("cart", JSON.stringify(cartRemove));
        setState(Math.floor((Math.random() * 100) + 1));
        });

    }

    return(
        <div>
               <div className="container pb-5 mb-2">
               <div className="alert alert-info alert-dismissible fade show text-center mb-30"><span className="alert-close" data-dismiss="alert"></span><i className="fe-icon-award"></i>&nbsp;&nbsp;With this purchase you will earn <strong>2,549</strong> Reward Points.</div>
               {getProductsInCart()}
               <div className="row pt-3 pb-5 mb-2">
                    <div className="col-sm-6 mb-3"><a className="btn btn-style-1 btn-secondary btn-block" href="#"><i className="fe-icon-refresh-ccw"></i>&nbsp;Update Cart</a></div>
                    <div className="col-sm-6 mb-3"><a className="btn btn-style-1 btn-primary btn-block" href="checkout-address.html"><i className="fe-icon-credit-card"></i>&nbsp;Checkout</a></div>
                </div>
               </div>
      
        </div>
    )
}

export default Cart;