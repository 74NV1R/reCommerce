import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const logo = (
  <div className={styles.logo}>
  <Link to='/'>
    <h2>
      re<span>Commerce</span>
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

          </ul>
          <div className={styles["header-right"]}>

          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header