import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './assets/css/font-awesome.min.css'
import './assets/css/elegant-icons.css'


import { RouterProvider } from 'react-router-dom'
import { Router } from './routers'
// import
const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App;