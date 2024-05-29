import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { CgMenuRound } from "react-icons/cg"
import { RiShoppingBasketLine } from "react-icons/ri"

const logo = (
  <div className={styles.logo}>
  <Link to='/'>
    <h2>
      Re<span>Commerce</span>
    </h2>
  </Link>

</div>
)

const basket = (
<span className={styles.cart}>
              <Link to='/cart'>
                Basket 
                <RiShoppingBasketLine   size={30} />
                <p>0</p>
              </Link>

            </span>

)

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () =>{
    setShowMenu(!setShowMenu)
  }

  const hideMenu = () =>{
    setShowMenu(false)
  }

  return (
    <header>
      <div className='col-12'>
      <div className={styles.header}>
        {logo}
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>

          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign up</Link>
              <Link to="/order-history">My Orders</Link>
            </span>
            {basket}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {basket}
          <CgMenuRound color='red' size = {30}/>

        </div>
      </div>
      </div>
      
    </header>
  )
}

export default Header