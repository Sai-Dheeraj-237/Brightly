import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



// import UserEdit from "./UserEdit";






function UserDefine() {

    const [user, setUser] = useState({
        
        "isAdmin":false
    });
   
    const navig  = useNavigate();

    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setUser({ ...user, [name]: value });
    }

    const submit = (event) => {
        event.preventDefault();
        console.log("user", user);
        axios.post("http://localhost:8089/api/v1.0.0/user/updateRole", user).then(
            response => {
                if (response.status) {
                    alert("role updated");
                }
            }
        ) }

        const [users, setUsers] = useState([]);

        const [updateUser, setUpdateUser] = useState(-1)


        useEffect(() => {
            displayUsers();
        }, [])

        const displayUsers = () => {
            axios.get("http://localhost:8089/api/v1.0.0/user/allUsers").then(
                response => {
                    if (response.status) {
                        console.log("response", response.data);
                        setUsers(response.data.allUsers);
                    }
                }
            )
        }

      

        const renderList = ()=>{
            var x = users.map(usr=>{
                    return <tr key={usr._id} scope="row">
                        <td>{usr._id}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                        <td>{usr.password}</td>
                        <td><button onClick={()=>editUser()}>Update</button></td>

                        {/* <td>
                            <select>  
                            <option>{usr.isAdmin}</option> 
                            <option onClick={updateState} name="name">true</option>
                            </select></td> */}
                        <td>
                        <button onClick={submit}>SUBMIT</button>
                        <br></br>  <br></br>
                        
                        </td>
    
                        </tr>
                })
                return x;
        }
 
        const editUser = (_id)=>{
            console.log(_id)
            navig("/UserEdit");
        }

    return (
        <>
        <h3 style={{backgroundColor:"green", color:"white", margintop:"20px", alignContent:"center"}}>USERS DATA</h3>
      <table class="table" style={{margin:"150px", marginLeft:"20px", marginTop:"30px"}}>
            <thead class="thead-dark" >
                <th scope="col">id </th>
                <th scope="col">username </th>
                <th scope="col">email</th>
                <th scope="col">password</th>
                <th scope="col">Update</th>
              
               
            </thead>
            <tbody>
            {renderList()}
            </tbody>
            </table>

           
        </>
    )

}

export default UserDefine;