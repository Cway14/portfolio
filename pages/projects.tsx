import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Projects.module.css'

const projects = () => {
    
    return (
        <Layout>
            <h1 className={styles.title}>Projects</h1>
            <ul className={styles.projectcontainer}>
                <li>
                    <h3>Python Web Server</h3>
                    <p>A HTTP server build in Python using TCP sockets. Implemented error handling for several edge cases such as connection timeout, bad requests, and file not found. I built this web server to better my understanding networking principles during my CMPT 371 course.</p>
                    <a href="https://github.com/Cway14/python-webserver">Source Code</a>
                </li>
                <li>
                    <h3>To Do List</h3>
                    <p>Simple to do list app built using React, Express, and Postgres. The purpose of the app was to learn how to develop a full stack application.</p>
                    <a href="https://todo.camway.ca">Live Demo</a>{' '}
                    <a href="https://github.com/cway14/todo-list">Source Code</a>
                </li>
            </ul>
        </Layout>
    )
}
 
export default projects
