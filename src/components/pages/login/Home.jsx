import React from 'react'
import Basket from '../../../assets/images/shopping-basket.png'
import { AiOutlineSearch } from 'react-icons/ai'

const Home = () => {
window.addEventListener('scroll', function(){
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
})
window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"})

  return (
    <div>
        <header className='header'>
            <div className="scontainer flex">
                <div className="logo" style={{
                    
                }} >
                    <img src ={Basket} width={50} height={50} alt="Logo" style={{ marginLeft: 0 }}/>
                </div>
                <div className="search flex">
                    <AiOutlineSearch/>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Home