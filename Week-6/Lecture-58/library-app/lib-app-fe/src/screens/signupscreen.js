import { useState } from "react";
import { loginUser } from "../utils/AuthUtil";
import {link, userNavigate }


const signupScreen = () => {

    const [userData, setUserData] = useState({ 

        firstName:"",
        
        lastName:"",
        
        email:"",
        
        password:"",
        
        type: "STUDENT",
        
        });
        
const navigate = userNavigate();

const handleLoginSubmit = async (e) {

    e.preventDefault();
    
    console.log(credentials);
    
    if (validateCredentials()) {

        const user = await loginUser(credentials);
        
        if (user.type === "LIBRARIAN"){
        
        navigate("/LIBRARIAN");
        
         } else{
            navigate("/student")
    }
};
    
    const validateCredentials = () => {
    
    return credentials.email?.length && credentials.password?.length;
    
    };
  };

const validateCredentials = (e) => {

  setCredentials({ ...credentials, [e.target.name]})
};

const handleInputChange = (e) => {

setCredentials({...credentials, [e.target.name]: e.target.value});
};
return (

    <section className="app-section">
    
    <h1>SignUp</h1>
    <span>

      Already have an account? Login <Link to={"/login"}>here</Link>

</span>
    
    <form className="ui form" onsubmit={handleLoginSubmit}>
    
    <div className="field">


<label>First Name</label>

<input type="text" name="firstName" placeholder="First Name" />

</div>

<div className="field">

<label>Last Name</label>

<input type="text" name="lastName" placeholder="Last Name" />

</div>

<div className="field"></div>
    
    <label>Email</label>
    
    <input
    
    type="email"
    
    name="email"
    
    placeholder="Email" I
    
    value={credentials.email}
    
    onChange={handleInputChange}
    
    required={true}

    />
    
    </div>
    
    <div className="field">
    
    <label>Password</label>
    
    <input
    
    type="password"
    
    name="password"
    
    placeholder="Password"
    
    value={credentials.password}
    
    onChange={handleInputChange}
    
    required={true}
    
    minLength={8}
    
    />
    
    </div>

    <button className="ui button" type="submit">
    
    Submit
    
    </button>
    
    </form>
    
    </section>
    
    ) ;
    };
    
    
    export default SignUpScreen;