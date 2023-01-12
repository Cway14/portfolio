import React from 'react'
import Layout from '../components/Layout'

const resume = () => {
    return (
        <Layout>
            <iframe src="resume.pdf" style={{ 'height': '85vh' }} />
        </Layout>
    )
}

export default resume