import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './dash.css';









function Admindash() {



    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    const navig = useNavigate();

    useEffect(() => {
        displayUsers();
        displayProducts();

    }, [])

    const displayUsers = () => {
        axios.get("http://localhost:8089/api/v1.0.0/user/allUsers").then(
            response => {
                if (response.status) {
                    console.log("response user", response.data);
                    setUsers(response.data.allUsers);
                }
            }
        )
    }


    // useEffect(() => {
    //     displayProducts();
    // }, [])

    const displayProducts = () => {
        axios.get("http://localhost:8089/api/v1.0.0/product/list").then(
            response => {
                if (response.status) {
                    console.log("response", response.data);
                    console.log("prdts are ready for displaying");
                    setProducts (response.data.products);
                }
            }
        )

    }
    
    


    return (
        <>

<div class="container">
    <div class="row">
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Users</h6>
                    <h2 class="text-right"><i class="fa fa-user f-left" style={{ fontSize: "30px"}}></i><span>{users.length}</span></h2>
                    <button onClick={()=>navig("/Userdefine")} className="btn btn-light">Click Here</button>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Products</h6>
                    <h2 class="text-right"><i class="fa  fa-cart-plus  f-left"  style={{ fontSize: "30px"}}></i><span>{products.length}</span></h2>
                    <button onClick={()=>navig("/Stock")} className="btn btn-light">Click Here</button>

                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Orders Received</h6>
                    <h2 class="text-right"><i class="fa fa-refresh f-left"  style={{ fontSize: "30px"}}></i><span></span></h2>
                    <button onClick={()=>navig("/Stock")} className="btn btn-light">Click Here</button>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Total Orders Dispatched</h6>
                    <h2 class="text-right"><i class="fa fa-rocket f-left f-left"  style={{ fontSize: "30px"}}></i><span></span></h2>
                    <button onClick={()=>navig("/Stock")} className="btn btn-light">Click Here</button>

                </div>
            </div>
        </div>
	</div>
</div>



        </>
    )

}

export default Admindash;