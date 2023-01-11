import React from 'react'
import Layout from '../components/Layout'

const resume = () => {
    return (
        <Layout>
            <h1>Resume</h1>
            <iframe src="../assets/resume.pdf" />
        </Layout>
    )
}

export default resume