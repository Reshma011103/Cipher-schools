import { useState } from "react";
import { loginUser } from "../utils/AuthUtil";
import { userNavigate }


const LoginScreen = () => {

const [credentials, setCredentials] = useState({ email: "", password: "" });
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
    
    <h1>Login</h1>
    <span>

donot have an account? signup <Link to={"/signup"}>here</Link>
</span>
    
    <form className="ui form" onsubmit={handleLoginSubmit}>
    
    <div className="field">
    
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
    <div class="ui segment">

<div class="field">

<div class="ui toggle checkbox">

<input

type="checkbox"

name="gift"

tabIndex="0"

class="hidden"

checked={userData.type === "LIBRARIAN"}

onChange={(e) => {

setUserData({

...userData,

type:

userData.type == "LIBRARIAN" ? "STUDENT" : "LIBRARIAN".

});
}}

/>

<label>Are you a Librarian?</label>

</div>

    <button className="ui button" type="submit">
    
    Submit
    
    </button>
    
    </form>
    
    </section>
    
    ) ;
    };
    
    
    export default loginScreen;