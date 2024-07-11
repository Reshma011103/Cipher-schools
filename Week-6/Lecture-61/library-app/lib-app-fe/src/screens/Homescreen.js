import { useEffect, useState} from "react";

    import { getLocalStorageUser } from "../utils/AuthUtil";
    
    import LibrarianHomeScreen from "./LibrarianHomeScreen";
    
    const HomeScreen = () => {
    
    const [userType, setUserType] = useState("");
    
    useEffect {() => {
    
    const user = getLocalStorageUser(); 
    if (user) {
    
    setUserType(user.type);
    }
    
},[]};
    
if (userType.length){
return <p>Loading...</p>;

}
const getHomeScreen = () => {

return userType == "LIBRARIAN" ? (

<LibrarianHomeScreen />

):(

<StudentHomeScreen />

);

};

return (
<>
<button className="ui secondary button" onClick>Logout</button>
</>
);

};

export default HomeScreen;