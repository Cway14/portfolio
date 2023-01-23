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
                    <h3>S&P 500 Trend Prediction</h3>
                    <p>Using sci-kit learn&apos;s machine learning models, my teamates and I were able to predict the next-day trend directions with a 84% accuracy using support vector machines. We made our predictions using a Volatility Index, U.S. 10 Treasury Bonds, and the U.S. Dollar Index. To achieve our promising result, we tested several hyperparameter tuning methods including GridSearchCV, RandomSearch, and Optuna.</p>
                    <a href="sp500.pdf">Report</a>{' '}
                    <a href="https://github.com/kazizi-dev/financial-time-series-prediction">Source Code</a>
                </li>
                <li>
                    <h3>Random Whistle App</h3>
                    <p>A IOS app built in swift to blow a whistle at a random interval. I use this app personally to help me practice my reaction time when taking lacrosse faceoffs.</p>
                    <a href="https://github.com/Cway14/whistle-timer">Source Code</a>
                </li>
                <li>
                    <h3>Course Planner</h3>
                    <p>As part of the CSSS fall hack, my teammates and I created a tool to help SFU students plan out what classes they can take. During the hackathon I tought two people how to use React.</p>
                    <a href="https://csss.camway.ca">Live Demo</a>{' '}
                    <a href="https://github.com/Cway14/CSSS">Source Code</a>
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
