import logo from './logo.svg';
import './App.css';
import { ceateBrowserRouter, RouterProvider }
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/login", element: <loginscreen/> },
  { path: "/signup", element: <h1>SignUpScreen</h1> },
  { path: "/LIBRARIAN", element: <h1>LIBRARIAN screen</h1> },
  { path: "/student", element: <h1>student screen</h1> },
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
