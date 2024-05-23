import './App.css'
import Header from './components/header/Header'
import { BrowserRouter as Router, RouterProvider, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/login/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = '/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
