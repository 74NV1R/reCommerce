import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Home, Contact} from './pages'
import { Header, Footer } from './components'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/contact' element = {<Contact/>}/>
          
          </Routes>

        <Footer/>
      </BrowserRouter> 
    </div>
  )
}

export default App
