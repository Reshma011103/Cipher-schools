import TodoScreen from "./screens/TodoScreen";
import {createBrowserRouter, RouterProvider}
import { useState } from "react";
const router = createBrowserRouter([
  {
    path: "/"
    element: <TodoScreen />,
  },
]);
{
  path: "/add-task"
  element: <add task />,
},
  
const App =() => {
  const [tasks, setTasks] = useState([]);
  return <RouterProvider router={router} />;

};


export default App;