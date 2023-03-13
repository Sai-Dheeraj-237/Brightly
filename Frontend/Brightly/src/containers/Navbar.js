import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { getLogout } from '../actions/UserActions';

import Login from './Login';
import Register from './Register';
import ContactUs from '../components/Contactus';
import Dashboard from './Dashboard';

import Home from '../components/Home';
import Cart from "../components/Cart";

import Cartlogout from '../components/Cart-logout';

import Profiledetails from './Profiledetails';




import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';

function Navbar(props) {
    const navig = useNavigate();

    // console.log("logout token update", props.token);

    const logout = () => {
        props.getLogout();
        navig("/login");

    }

    // useEffect(() => {
    //     console.log("I am in use effect");
    //     if (props.token==null) {
    //         navig("/Login");
    //     }
    // }, []);


    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light navbar-light" >
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">BRIGTHLY</Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">

                            {props.token ?
                                <>
                                    <Link> <img src="https://github.com/Sai-Dheeraj-237/Brightly/blob/c17a6488b1a15d047c1b4594cb743564d208ffd6/Frontend/Brightly/src/containers/assets/logo.jpg" style={{}}></img></Link>
                                    <Link className="navbar-brand" to="/Dashboard" style={{ color: "green", fontStyle: "bold", marginLeft: "60px", fontSize: "25px" }}>BRIGTHLY</Link>



                                    <li className="nav-item" style={{}}>
                                        <Link className="nav-link" to="/Dashboard"><i class="fa fa-home" aria-hidden="true" style={{ fontSize: "30px", color: "green", marginLeft: "890px" }}></i></Link>
                                    </li>



                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Cart"> <i className="fa fa-shopping-cart" style={{ fontSize: "30px", color: "green", marginLeft: "30px" }}></i> </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Profiledetails"><i class="fa fa-user" style={{ fontSize: "30px", color: "green", marginLeft: "30px" }}></i></Link>
                                    </li>

                                    <li>
                                        <Link className="nav-link" onClick={logout}><i class="fa fa-sign-out" aria-hidden="true" style={{ fontSize: "30px", color: "green", marginLeft: "30px" }}></i></Link>
                                    </li>


                                </>
                                :
                                <>
                                    <Link className="navbar-brand" to="/">BRIGTHLY</Link>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Login">Login</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Register" >Sign In</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Contactus" style={{ fontSize: "20px", color: "white", marginLeft: "18px", backgroundColor: "green" }}>Contact Us</Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/Cart"> <i className="fa fa-shopping-cart" style={{ fontSize: "30px", color: "white" }}></i>  <span>Cart</span> </Link>
                                        </li> */}


                                </>
                            }






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
                <Route path="/Profile" element={<Profiledetails></Profiledetails>}></Route>
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

function logoutStatetoProps(dispatch) {
    return bindActionCreators({ getLogout: getLogout }, dispatch);
}

export default connect(NavbarStatetoProps, logoutStatetoProps)(Navbar);

