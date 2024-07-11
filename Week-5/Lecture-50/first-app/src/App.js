import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";

const router = createBrowserRouter([
{
path: "/login",

element: <LoginScreen />,

},

]);
const App = () => {

  return <RouterProvider router={router} />;
 };
  
  export default App;