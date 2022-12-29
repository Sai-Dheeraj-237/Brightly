export default function (state=null, action){
    console.log("we are in reducers");
    console.log("action", action);
    switch(action.type){
        case "user-register-details" :
            console.log(action.payload);
            return action.payload.data.token;
            
        case "user-login-details":
            console.log(action.payload);
            localStorage.setItem("token", action.payload.data.token);
            return action.payload.data.token;
        
        case "user-Logout" : 
            console.log("logut reducer")
            console.log("action.payload",action.payload);
            return action.payload;
        
      

        default : return state;
    }
    
}