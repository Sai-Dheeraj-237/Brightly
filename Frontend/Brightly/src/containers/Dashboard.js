import axios from "axios";
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Cartlogout from "../components/Cart-logout";
import { connect } from "react-redux";





function Dashboard(props) {

    console.log("local storage", localStorage.getItem("cart"));
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem('cart', "[]");
    }

    const [products, setProducts] = useState([]);
    const navig  = useNavigate();

   

   

    useEffect(() => {
        userdisplayProducts();
    }, [])

    const userdisplayProducts = () => {
        axios.get("http://localhost:8089/api/v1.0.0/product/list").then(
            response => {
                if (response.status) {
                    console.log("response", response.data);
                    setProducts(response.data.products);
                }
            }
        )
    }

    const addProducts = (item)=>{
        console.log("items00",item);
        navig("/Cartlogout",{state:item})
    }

    const addToCart = (item)=>{
        // console.log(props.token);
        console.log("items for the cart", item);
     var cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(item);
        console.log("cart", cart);
        localStorage.setItem('cart', JSON.stringify(cart));
     
    }

    const generateUserProductCards = () => {
        console.log("products to be displayed", products);
        var y = products.map(item => {
            return <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
                <div class="card shadow">
                    <div class="card-body text-center">
                        <h3 class="text">{item.brand}</h3>
                        <a href="#">
                            <img class="card-img-top" style={{height:"450px",width:"450px", }}  src={item.image} alt="" /> 
                        </a> <br></br>
                        {/* <div class="text-warning">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div> */}
                       <h5 onClick={()=>addProducts(item)} style={{cursor:"pointer"}}>{item.name}</h5>
                        <h6>₹{item.price}</h6>
                        <button class="btn btn-primary my-2" onClick={() => addToCart(item)} href="#" role="button">Add to Cart</button>
                    </div>
                </div>
            </div>
        })

        return y;
    }

   
   
    return (
        <>
        <div class="container mb-4">
            <div class="container mb-4">
                <div class="row">

                    {generateUserProductCards()}

                </div>

            </div>
        </div>
        </>
    )
}



function mapLogStatetoProps(appState){
    console.log("appState", appState);
    return {token:appState.accessToken};
}

export default connect(mapLogStatetoProps,null)(Dashboard);
