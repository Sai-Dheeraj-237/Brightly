import { useLocation, useNavigate } from 'react-router-dom';
// import Products from '../containers/Products';
import './cartlogout.css'









function Cartlogout(props) {
    const location = useLocation();
    console.log("location", location);
    var it = location.state;
    const navig  = useNavigate();

    return (
        <>
            <div>
                <div className="container">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">

                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img style={{ height: "450px", width: "450px" }} src={it.image} /></div>

                                    </div>
                                </div>
                                
                                <div className="details col-md-6">
                                    <h3 className="product-title">{it.name}</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <span className="review-no">Rating: {it.rating}</span>
                                    </div>
                                    <p className="product-description">{it.description}</p> <br></br>
                                    <h4 className="price">current price: <span> ₹ {it.price}</span></h4> <br></br>


                                    <div className="action">
                                        
                                            <button onClick={()=>navig("/Login", {state:{message:"Please Login to Continue.."}})}  className="add-to-cart btn btn-default" type="button">Add to cart</button> <span>        </span>
                                       
                                        <button onClick={()=>navig("/")} className="add-to-cart btn btn-default" type="button">Return to Home</button>

                                        {/* <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Cartlogout;
// export default Cartlogout;