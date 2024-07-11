const LoginScreen = () =>
    {
      
      const credentials Validator = ({ email, password }) => { 
            
            if (isEmail(email) && password?.length >= 8) {
            
            return true;
            
            }
            
            return false;
            
            };
            
            const handleSubmit = (e) => {  e.preventDefault(); 
            
            }

        }

    return (
    
    <div className="screen">
    
    <h1 className="ui heading center">Login</h1>
    <div> 
    <form className="ui form">

<div className="field">

<label>Email</label>

<input type="Email" name="first-name" placeholder="Email"/>

</div>

<div className="field">

<label>Password</label>

<input type="Password" name="Password" placeholder="Password"/>


</div>

<button className="ui button" type="submit">Submit</button>

</form>
    </div>
    
    </div>
    );

 };
    
    export default LoginScreen;