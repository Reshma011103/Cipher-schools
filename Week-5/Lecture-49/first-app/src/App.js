import TodoScreen from "./screens/TodoScreen";
import {createBrowserRouter, RouterProvider}
import { useState } from "react";
const router = createBrowserRouter([

    {
    
      path: "/",
    
      element: <ToDoScreen />,
    
    },
    
    {
    
      path: "/add-task",
    
      element: <AddTask />,
    
    },
    
    ]);
    
    const App = () => {
    
      return (
    
       <TaskProvider>
    
         <RouterProvider router={router} />
    
       </TaskProvider>
    
      );
    
    };
    
    export default App;