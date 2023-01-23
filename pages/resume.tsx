import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Resume.module.css'

const resume = () => {
    return (
        <Layout>
            <iframe className={styles.iframe} src="resume.pdf" />
        </Layout>
    )
}

export default resume
