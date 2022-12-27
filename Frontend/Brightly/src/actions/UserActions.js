import axios from 'axios';

export   function getRegister(regDetails){
    console.log("Im in action stage");
    console.log("regDetails", regDetails);
   const promise =  axios.post("http://localhost:8089/api/v1.0.0/user/register",regDetails);
    return{
        type:"user-register-details",
        payload:promise
}
}

export  function getLogin(loginDetails){
    console.log("We are in lOgin action")
    console.log("loginDetails",loginDetails);
    const promise = axios.post(" http://localhost:8089/api/v1.0.0/user/login",loginDetails);

    return{
        type:"user-login-details",
        payload:promise
    }
};

export function getLogout(){
    console.log("Logout Action is Started");
    return{
        type:"user-Logout",
        payload:null
    }
}