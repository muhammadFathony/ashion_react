import React, { useEffect } from "react";
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './assets/css/font-awesome.min.css'
import './assets/css/elegant-icons.css'


import { RouterProvider } from 'react-router-dom'
import { Router } from './routers'
// import
const App = () => {
  useEffect(() => {
    // Set jQuery sebagai variabel global
    window.$ = $;
    window.jQuery = $;
    console.log("window.$:", window.$);
    console.log("window.jQuery:", window.jQuery);
  }, []);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App;