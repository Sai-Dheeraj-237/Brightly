import {  useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getRegister} from "../actions/UserActions";
import { useNavigate } from 'react-router-dom';

function Register(props){

    const navigate = useNavigate();

 const[regDetails, setRegDetails]  = useState(
    {
        username: "",
        password: "",
        email: ""
    })

    if(props.token){
        console.log("token getting from state");
        console.log(props.token);
        navigate("/Dashboard");
    }
 
const updateState = (event)=>{
    var value = event.target.value;
    var name = event.target.name;
    setRegDetails({ ...regDetails, [name]: value })
};

const regist =(event)=>{
    event.preventDefault();
    console.log("regDetails", regDetails)
    props.getRegister(regDetails);
}



    return(
        <>
        <br></br>  <br></br>
       
            
    <div className="container">
        <div className="container card" style={{width: "40vw", backgroundColor:"white"}} >
                {/* <br></br> */}
            <div className="container">
                <center>
          <a href="/">  <img src="https://img.freepik.com/free-photo/shopping-cart-3d-render-icon_460848-6902.jpg?w=826&t=st=1671634910~exp=1671635510~hmac=abeeb32ff5dbf8c9524f0296da38f47c6c3329190682100c91e29558fff7f2d0" width="250px" /> </a>
            </center>
            </div>

            <div className="container" >
                <h2 style={{backgroundColor:"#64BBF4", textAlign:"center", height:"45px", color:"white"}}>Register Here</h2>
            </div>
            <br></br>   <br></br>   
            <div className="container">
           
            <form style={{width:"500px"}} >
                    <div className="form-group">
                      <label>User Name</label>
                      <input type="text" onChange={updateState} name="username" className="form-control" placeholder="Enter User Name"/>       
                    </div>

                    <br></br> 

                    <div className="form-group">
                      <label>Password </label>
                      <input type="password" onChange={updateState} name="password" className="form-control" placeholder="Enter Password"/>
                     </div>

                     <br></br> 

                    <div className="form-group">
                       <label>Email Address</label>
                       <input type="text"  onChange={updateState} name="email" className="form-control" placeholder="Enter Email"/>
                    </div>

                    <br></br>    <br></br>  

                     <button type="submit" onClick={regist} className="btn btn-success" style={{marginBottom:"30px", width:"500px"}}>Register</button>

                     <br></br>

                    <h6 class="text-center">Already Have an Account ? <a href="/Login" style={{textDecoration:"none"}}>Login Here</a></h6> 
            </form>

            </div>
        </div>
    </div>

        
        </>
    )
}


function mapDisptachtoProps(dispatch){
   return bindActionCreators({getRegister:getRegister},dispatch)
}


function mapStateToProps (appState){
    console.log("appState", appState);
    return {token : appState.accessToken};
}

export default connect (mapStateToProps, mapDisptachtoProps)(Register);