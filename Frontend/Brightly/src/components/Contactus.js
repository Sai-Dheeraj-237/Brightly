import { getLogout } from '../actions/UserActions';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

// import Adminlogin from '../containers/Admindashboard/Adminlogin';
// import Adminlogin from '../containers/Admindashboard/Adminlogin';
import Adminlogin from "../containers/Admindashboard/Adminlogin";

import Adminregister from '../containers/Admindashboard/Adminregister';
import Createproducts from './Adminpanel/Createproducts'
import Stock from '../components/Adminpanel/Stock'
import Userdefine from '../components/Adminpanel/Userdefine'
import UserEdit from '../components/Adminpanel/UserEdit'
import Admindash from '../containers/Admindashboard/Admindash';




import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { useEffect } from 'react';

function Contactus(props) {
    const navig = useNavigate();

    // console.log("logout token update", props.token);

    const logout = () => {
        props.getLogout();
        navig("/contactus");

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
                                    <Link className="navbar-brand" to="/Admindash" style={{color:"green", fontStyle:"bold", marginLeft:"60px",fontSize: "25px"}}>BRIGTHLY</Link>

                                    

                                    <li className="nav-item" style={{}}>
                                        <Link className="nav-link" to="/Createproducts"><i class="fa fa-plus" aria-hidden="true" style={{ fontSize: "30px", color: "green", marginLeft:"890px" }}></i></Link>
                                    </li>

                                 

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Stock"> <i className="fa fa-list" style={{ fontSize: "30px", color: "green", marginLeft:"30px"  }}></i> </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Userdefine"> <i className="fa fa-user" style={{ fontSize: "30px", color: "green", marginLeft:"30px"  }}></i> </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/UserEdit"><i class="fa fa-user" style={{fontSize:"30px", color:"green", marginLeft:"30px"}}></i></Link>
                                    </li> */}

                                    <li>
                                        <Link className="nav-link" onClick={logout}><i class="fa fa-sign-out" aria-hidden="true" style={{ fontSize: "30px", color: "green", marginLeft:"30px" }}></i></Link>
                                    </li>


                                </>
                                :
                                <>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Adminlogin">Login</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Adminregister" >Sign In</Link>
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
                <Route path="/Adminregister" element={<Adminregister></Adminregister>}></Route>
                <Route path="/Adminlogin" element={<Adminlogin></Adminlogin>}></Route>
                <Route path="/Admindash" element={<Admindash></Admindash>}></Route>

                {/* <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route> */}

                <Route path="/Createproducts" element={<Createproducts></Createproducts>}></Route>
                <Route path="/Stock" element={<Stock></Stock>}></Route>
                <Route path="/Userdefine" element={<Userdefine></Userdefine>}></Route>
                <Route path="/UserEdit" element={<UserEdit></UserEdit>}></Route>

                {/* <Route path="/Logout" element={<Logout></Logout>}></Route> */}
            </Routes>


        </>
    )
}

function ContatctStatetoProps(appState) {
    console.log("appState", appState);
    return { token: appState.accessToken }
}

function logoutStatetoProps(dispatch) {
    return bindActionCreators({ getLogout: getLogout }, dispatch);
}

export default connect(ContatctStatetoProps, logoutStatetoProps)(Contactus);

