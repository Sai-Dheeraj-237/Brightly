import { useState } from "react";
import {getLogin} from "../actions/UserActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";


function Login(props) {
   const navig =  useNavigate();
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
                <div className="container card" style={{ width: "600px" }} >
                    <div className="container">
                        <center>
                            <a href="/Login">  <img src="./assets/logo.jpg" type="jpg" width="250px" /> </a>
                        </center>
                    </div>

                    <div className="container" >
                        <h2 style={{ backgroundColor: "#64BBF4", textAlign: "center", height: "45px", color: "white" }}>Login Here</h2>
                    </div>
                    <br></br>   <br></br>
                    <div className="container">

                        <form style={{ width: "550px" }} >
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" onChange={updateState} name="username" className="form-control" placeholder="Enter User Name" />
                            </div>

                            <br></br>

                            <div className="form-group">
                                <label>Password </label>
                                <input type="password" onChange={updateState} name="password" className="form-control" placeholder="Enter Password" />
                            </div>

                            <br></br>

                            <button type="submit" onClick={log} className="btn btn-success" style={{ marginBottom: "30px", width: "550px" }}>Login..</button>

                            <br></br>

                        </form>

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