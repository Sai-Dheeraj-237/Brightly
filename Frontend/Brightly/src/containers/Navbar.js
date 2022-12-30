import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { getLogout } from '../actions/UserActions';

import Login from './Login';
import Register from './Register';
import ContactUs from '../components/Contactus';
import Dashboard from './Dashboard';

import Home from '../components/Home';
import Products from './Products';
import Cart from "../components/Cart";

import Cartlogout from '../components/Cart-logout';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';

function Navbar(props) {
   const navig =  useNavigate();

// console.log("logout token update", props.token);

const logout = () => {
        props.getLogout();
        
    }

    // useEffect(() => {
    //     console.log("I am in use effect");
    //     if (props.token==null) {
    //         navig("/Login");
    //     }
    // }, []);


    return (
        <>


                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">BRIGTHLY</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">

                                {props.token ? 
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Products">Products</Link>
                                        </li>

                                        <li className="nav-item">
                                        <Link className="nav-link" to="/Cart"> <i className="fa fa-shopping-cart" style={{ fontSize: "30px", color: "white" }}></i>  <span>Cart</span> </Link>
                                        </li>

                                        <li>
                                            <Link className="nav-link" onClick={logout}>Logout</Link>
                                        </li>

                                        
                                    </>
                                 : 
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Login">Login</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Register" >Register</Link>
                                        </li>

                                        {/* <li className="nav-item">
                                        <Link className="nav-link" to="/Cart"> <i className="fa fa-shopping-cart" style={{ fontSize: "30px", color: "white" }}></i>  <span>Cart</span> </Link>
                                        </li> */}

                                        
                                    </>
                                }



                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contactus">Contact Us</Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>


                <Routes>
                    <Route path="/Register" element={<Register></Register>}></Route>
                    <Route path="/Login" element={<Login></Login>}></Route>
                    <Route path="/Contactus" element={<ContactUs></ContactUs>}></Route>
                    <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>

                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Products" element={<Products></Products>}></Route>
                    <Route path="/Cart" element={<Cart></Cart>}></Route>
                    <Route path="/Cartlogout" element={<Cartlogout></Cartlogout>}></Route>

                    {/* <Route path="/Logout" element={<Logout></Logout>}></Route> */}
                </Routes>

            
        </>
    )
}

function NavbarStatetoProps(appState) {
    console.log("appState", appState);
    return { token: appState.accessToken }
}

function logoutStatetoProps(dispatch){
    return bindActionCreators({getLogout:getLogout},dispatch);
}

export default connect(NavbarStatetoProps, logoutStatetoProps)(Navbar);