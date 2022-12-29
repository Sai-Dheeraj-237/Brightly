import { useState } from "react";
import {getLogin} from "../actions/UserActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate, useLocation } from "react-router-dom";


function Login(props) {
   const navig =  useNavigate();
   const location  = useLocation();
    const[loginDetails, setLoginDetails] = useState({
        username:"",
        password:"",
    })

    if(props.token){
        console.log("Now the login props has been updated");
        console.log(props.token);
        navig("/Dashboard");

    }

    const updateState = (event)=>{
            var value  = event.target.value;
            var name  = event.target.name;
            setLoginDetails({...loginDetails, [name]:value})
    }

    const log = (event)=>{
        event.preventDefault();
        console.log("loginDetails", loginDetails);
        props.getLogin(loginDetails);
    }

    return (
        <>
            <div className="container">
                <div className="container card" style={{ width: "40vw", backgroundColor:"white" }} >
                    <div className="container">
                        <center>
                        <a href="/">  <img src="https://img.freepik.com/free-photo/shopping-cart-3d-render-icon_460848-6902.jpg?w=826&t=st=1671634910~exp=1671635510~hmac=abeeb32ff5dbf8c9524f0296da38f47c6c3329190682100c91e29558fff7f2d0" width="250px" /> </a>
                        </center>
                    </div>

                    <div className="container" >
                        <h2 style={{ backgroundColor: "#64BBF4", textAlign: "center", height: "45px", color: "white" }}>Login Here</h2>
                    </div>
                    <br></br>   <br></br>

                    <h4 className="text-danger">{(location.state !=null ?(location.state.message) : " ")}</h4>
                    <br></br>   <br></br>

                    <div className="container">
                        <center>
                        <form style={{ width: "500px" }} >
                            <div className="form-group">
                                <input type="text" onChange={updateState} name="username" className="form-control" placeholder="Enter User Name" />
                            </div>

                            <br></br>

                            <div className="form-group">
                                <input type="password" onChange={updateState} name="password" className="form-control" placeholder="Enter Password" />
                            </div>

                            <br></br> <br></br>

                            <button type="submit" onClick={log} className="btn btn-primary" style={{ marginBottom: "30px", width: "500px" }}>Login..</button>

                            <br></br>

                            <h6 className="text-center">New to Brightly? <a href="/Register" style={{textDecoration:"none"}}>Create an Account</a></h6>

                        </form>
                        </center>

                    </div>
                </div>
            </div>

        </>
    )
}

function mapLogDisptachtoProps(dispatch){
    return bindActionCreators({getLogin:getLogin},dispatch)
}

function mapLogStatetoProps(appState){
    console.log("appState", appState);
    return {token:appState.accessToken};
}

export default connect(mapLogStatetoProps,mapLogDisptachtoProps)(Login);