import axios from "axios";
import React,{ useEffect, useState } from "react";

function ProfileDetails() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        displayUsers();
    }, [])

    const displayUsers = () => {
        axios.get("http://localhost:8089/api/v1.0.0/user/profile").then(
            response => {
                if (response.status) {
                    console.log("response", response.data);
                    setUsers(response.data.allUsers);
                }
            }
        )
    }

    const profiledetailsdisplay = () => {
        var u = users.map(usr => {
            return <tr key={usr._id}>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
            </tr>
        })
        return u;
    }

    return (
        <table className="table table-hover table-border table-striped" >
            <thead>
            </thead>

            <tbody>
            { profiledetailsdisplay() }
            </tbody>

        </table>

    )

}
export default ProfileDetails;