import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";

const router = createBrowserRouter([
{
path: "/login",

element: <LoginScreen />,

},
{
  path: "/to-do",

element: <ToDoScreen />,
},


]);
const App = () => {

  return <RouterProvider router={router} />;
 };
  
  export default App;