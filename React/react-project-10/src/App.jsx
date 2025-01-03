import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashborad from './components/Dashborad';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Tests from './components/Tests';
import Results from './components/Results';
import OtherComp from './components/OtherComp';

// We can create a basic browser router like this with help of react-router-dom library
// This will take an array as argument and inside that there will be objects having diffrent routes
// And each routes must have an path and also an element or an comoponent where we wanted to rdirect when we get that path
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: "/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: "/dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashborad/>
      </div>,
      // There might be some cases where from dashboard we move forward to some other pages like test results so this is considered as nested routing
      children:[
        {
          path: '/test',
          element: <Tests/>
        },
        {
          path: '/results',
          element: <Results/>
        }
      ]
    },
    // Here we are trying to add router with path varaible also passed with the URL
    {
      path: "/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    // This is for other paths that are not mentioned can be used for not found cases 
    {
      path: '*',
      elememt: <OtherComp/>
    }
  ]
);

// Here we are trying to learn routing in react
// Routing is nothing it's just creation of diffrent componets and then redirecting to them based on some URI
function App() {

  return (
    <>
      <div>
        {/* Now since we have created the routes but our application should also need to know that we have provided some routes */}
        {/* So for that we are using RouterProvider and providing our router */}
        <RouterProvider router={router}/>
        <Navbar/>
      </div>
    </>
  )
}

export default App
