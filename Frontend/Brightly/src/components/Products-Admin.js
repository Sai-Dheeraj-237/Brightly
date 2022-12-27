import axios from "axios";
import { useEffect, useState } from "react";

function Proudctsadmin() {

    const [product, setProduct] = useState({
        "name": "",
        "description": "",
        "richDescription": "",
        "image": "",
        "brand": "",
        "price": 0,
        "countInStock": 0,
        "rating": 0,
    });

    const [products, setProducts] = useState([]);

    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setProduct({ ...product, [name]: value });
    }

    const submit = (event) => {
        event.preventDefault();
        console.log("product", product);

        axios.post("http://localhost:8089/api/v1.0.0/product/add", product).then(
            response => {
                if (response.status) {
                    alert("products are added to the DB")
                }
            }
        )


    }

    useEffect(() => {
        displayProducts();
    }, [])

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

    

    const renderList = ()=>{
        var x = products.map(prd=>{
                return <tr key={prd._id}>
                    {/* <td>{prd.image}</td> */}
                    <td>{prd.name}</td>
                    <td>{prd.price}</td>
                    {/* <td>{prd.rating}</td> */}
                    {/* <td>{prd.stock}</td> */}
                    {/* <td>{prd.description}</td> */}
                    <td><button onClick={()=>deleteProduct(prd._id)}>Delete</button></td>
                    <td><button>Update</button></td>

                    </tr>
            })
            return x;
    }

    const deleteProduct = (_id)=>{
        console.log("delete proudct by id", _id);
        axios.delete("http://localhost:8089/api/v1.0.0/product/"+ _id).then(
            response=>{
                console.log(response);
                if(response.data.success==true){
                    displayProducts();
                }
            }
        )

}



    return (
        <>
            <br></br>         <br></br>

            <ul>

                <div className="container">
                    <div className="container card" style={{ width: "600px" }} >
                        <div className="container">
                            <br></br>
                            <h2 style={{ textAlign: "center" }}>ADMIN PANEL</h2>         <br></br>

                            <form style={{ width: "550px" }} >

                                <div className="row">
                                    <div className="col">
                                        <label>Product Name</label>
                                        <input type="text" onChange={updateState} name="name" className="form-control" placeholder="Enter Product Name" />
                                    </div>

                                    <div className="col">
                                        <label>Product Description</label>
                                        <input type="text" onChange={updateState} name="description" className="form-control" placeholder="Enter Product Description" />
                                    </div>

                                </div>

                                <br></br>

                                <div className="row">

                                    <div className="col">
                                        <label>Rich Description</label>
                                        <input type="text" onChange={updateState} name="richDescription" className="form-control" placeholder="Enter Rich Description" />
                                    </div>

                                    <div className="col">
                                        <label>Image URL</label>
                                        <input type="text" onChange={updateState} name="image" className="form-control" placeholder="Enter Image URL" />
                                    </div>

                                </div>

                                <br></br>

                                <div className="row">

                                    <div className="col">
                                        <label>Product Brand</label>
                                        <input type="text" onChange={updateState} name="brand" className="form-control" placeholder="Enter Product Brand" />
                                    </div>

                                    <div className="col">
                                        <label>Product Price</label>
                                        <input type="text" onChange={updateState} name="price" className="form-control" placeholder="Enter Product Price" />
                                    </div>

                                </div>

                                <br></br>

                                <div className="row">

                                    <div className="col">
                                        <label>Product Stock</label>
                                        <input type="text" onChange={updateState} name="countInStock" className="form-control" placeholder="Enter Product Stock" />
                                    </div>

                                    <div className="col">
                                        <label>Product Rating</label>
                                        <input type="text" onChange={updateState} name="rating" className="form-control" placeholder="Enter Product Rating" />
                                    </div>

                                </div>

                                <br></br>

                                <div className="row">
                                    <div className="col">
                                        <button type="submit" onClick={submit} className="btn btn-success" style={{ marginBottom: "30px", width: "550px" }}>SUBMIT</button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </ul>

            <br></br>
                            {products.length}
                            <center>
            <table className="table table-hover table-border table-striped" >
            <thead>
                {/* <th>image</th> */}
                <th>name</th>
                {/* <th>brand</th> */}
                {/* <th>description</th> */}
                <th>price</th>
                {/* <th>stock</th> */}
                {/* <th>rating</th> */}
                <th colSpan="2">Operation</th>
            </thead>
            <tbody>
                 {renderList()}
            </tbody>
            </table>
            </center>


        </>
    )
}

export default Proudctsadmin;

