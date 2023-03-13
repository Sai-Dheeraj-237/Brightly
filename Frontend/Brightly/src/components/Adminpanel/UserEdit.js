import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function UserEdit(){

    const [users, setUsers] = useState([]);
    const nvg  = useNavigate();


    useEffect(() => {
        displayUser();
    }, [])

    const displayUser = () => {
        axios.get("http://localhost:8089/api/v1.0.0/user/allUsers").then(
            response => {
                if (response.status) {
                    console.log("response", response.data);
                }
            }
        )
    }

    const updateUser  = ()=>{
        axios.get("http://localhost:8089/api/v1.0.0/user/updateRole").then(
            response=>{
                if(response.status==true){
                    alert("User Updated");
                    nvg("/Userdefine")
                }
            }
        )
    }

    const updateState = (event)=>{
        var value = event.target.value;
        var name = event.target.name;
        setUsers({ ...users, [name]: value })
    };

  

    const renderList = ()=>{
        var y = users.map(usr=>{
            return   <form style={{width:"500px"}} key={usr._id}>
                      <div className="form-group">
                      <label>User Id</label>
                      <input value={usr._id}/>       
                    </div>

                    <div className="form-group">
                      <label>User Name</label>
                      <input value={usr.username} onChange={updateState} name="username"/>       
                    </div>

                    <br></br> 

                    <div className="form-group">
                      <label>Password </label>
                      <input value={usr.password} onChange={updateState} name="password"/>       
                     </div>

                     <br></br> 

                    <div className="form-group">
                       <label>Email Address</label>
                       <input value={usr.email} onChange={updateState} name="email"/>       
                    </div>

                    <br></br>    <br></br>  

                     <button type="submit" onClick={updateUser} className="btn btn-success" style={{marginBottom:"30px", width:"500px"}}>Update</button>

                    
            </form>

        })
        return y;
}

    




    return(
        <>
        {renderList()}       
        </>
    )
}

export default UserEdit;