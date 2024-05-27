import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { GiSaddle  } from "react-icons/gi"
import { CgMenuRound } from "react-icons/cg"

const logo = (
  <div className={styles.logo}>
  <Link to='/'>
    <h2>
      Re<span>Commerce</span>
    </h2>
  </Link>

</div>
)

const saddlebag = (
<span className={styles.cart}>
              <Link to='/cart'>
                My Saddlebag 
                <GiSaddle  size={30} />
                <p>0</p>
              </Link>

            </span>

)

const Header = () => {
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
            {saddlebag}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {saddlebag}
          <CgMenuRound size = {30}/>

        </div>
      </div>
      </div>
      
    </header>
  )
}

export default Header