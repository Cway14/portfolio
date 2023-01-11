import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li><Link href="/" >Home</Link></li>
                <li><Link href="/resume" >Resume</Link></li>
                <li><Link href="/projects" >Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar