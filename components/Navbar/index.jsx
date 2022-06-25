import styles from './Navbar.module.css'

import newsIcon from '../../assets/news-icon.svg'

const News = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navIconWrapper}>
                <img className={styles.navIcon} src={newsIcon} alt="navbar icon" />
                <h1 className={styles.navTitle}>News</h1>
            </div>
        </nav>
    )
}

export default News

