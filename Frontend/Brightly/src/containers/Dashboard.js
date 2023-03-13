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
    const navig = useNavigate();
    const [x,setX]=useState();
    const [search, setSearch] = useState("");



    useEffect(() => {
        userdisplayProducts();
    }, [])

    const userdisplayProducts = () => {
        axios.get("http://localhost:8112/api/v1/products/list").then(
            response => {
                if (response.status) {
                    console.log("response", response);
                    setProducts(response.products);
                }
            }
        )
    }
    // http://localhost:8089/api/v1.0.0/product/list

    const addProducts = (item) => {
        console.log("items00", item);
        navig("/Cartlogout", { state: item })
    }

    const addToCart = (item) => {
        console.log(props.token);
        console.log("items for the cart", item);
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(item);
        console.log("cart", cart);
        localStorage.setItem('cart', JSON.stringify(cart));

        setX(Math.floor((Math.random() * 100) + 1));


    }

    const addedToCart = () => {
        navig("/Cart")
    }

    const updateSt = (event)=>{
        var value =   event.target.value;
        setSearch(value);
    }

    const generateUserProductCards = () => {
        console.log("products to be displayed", products);
        let cds = JSON.parse(localStorage.getItem("cart"));
        console.log("checking one more time", cds);

            var ids = cds.map( cd => {
                return cd._id;
            })

            console.log("ids", ids);

        var y = products.map((item, i) => {
                console.log( ids.includes(item._id));
            return <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
                <div class="card shadow" style={{height:"95%"}}>
                    <div class="card-body text-center">
                        <h3 class="text">{item.brand}</h3>
                        <a href="#">
                            <img class="card-img-top" style={{  }} src={item.image} alt="" />
                        </a> <br></br>
                        {/* <div class="text-warning">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div> */}  <br></br>
                        <h5 onClick={() => addProducts(item)} style={{ cursor: "pointer" }}>{item.name}</h5>
                        <h4>₹{item.price}</h4>

                        {/* -----BUTTONS---------- */}
                        
                        {
                           ids.includes(item._id)  ? (
                                <button class="btn btn-success my-2" onClick={addedToCart} href="#" role="button">Added to Cart</button>

                            ):(
                                <button class="btn btn-primary my-2" onClick={() => addToCart(item)} href="#" role="button">Add to Cart</button>
                            )
                        }
                    {/* <button class="btn btn-primary my-2" onClick={() => addToCart(item)} href="#" role="button">Add to Cart</button> */}

                                    
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

                        <div className="input-group" style={{ marginLeft:"300px"}}>
                                        <form>
                                            <input type="search" style={{width:"450px", marginTop:"15px"}}class="form-control" placeholder="Search for Products"  onChange={updateSt} />

                                        </form>
                                       
                                    </div>
                        {generateUserProductCards()}

                    </div>

                </div>
            </div>
        </>
    )
}



function mapLogStatetoProps(appState) {
    console.log("appState", appState);
    return { token: appState.accessToken };
}

export default connect(mapLogStatetoProps, null)(Dashboard);

