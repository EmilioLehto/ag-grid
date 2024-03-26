import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import TodoList from './TodoList.jsx';



const router = createBrowserRouter([
{
path: "/",
element: <App />,
children:[

  {
    element: <Home />,
    index: true
  },
  {
    path: "about",
  element: <About />,
  }, 
  {
    path: "contact",
    element: <Contact />,
  }, {
    path: "Todo",
    element: <TodoList />
    
  }
]

}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
