import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti"

const logo = (
  <div className={styles.logo}>
  <Link to='/'>
    <h2>
      Re<span>Commerce</span>
    </h2>
  </Link>

</div>
)

const Header = () => {
  return (
    <header>
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
            <span className={styles.cart}>
              <Link to='/cart'>Cart <TiShoppingCart size={25} /></Link>

            </span>

          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header