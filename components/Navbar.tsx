import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [current, setCurrent] = useState<string>()
    
    const routes = [
        { path: "/", label: "Home"},
        { path: "/resume", label: "Resume" },
        { path: "/projects", label: "Projects" },
    ]

    useEffect(() => {
       if(window !== undefined){
            setCurrent(window.location.pathname)
        }
    }, [])

    console.log(current)

    return (
        <nav>
            <ul className={styles.navbar}>
                { routes.map((route) => {
                   return <li className={current === route.path ? styles.current : undefined} key={route.path}>
                            <a href={route.path}>{route.label}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Navbar
