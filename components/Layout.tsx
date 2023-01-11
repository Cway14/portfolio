import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css'

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return <>
        <Head>
            <title>Cam Way</title>
            <meta name="description" content="Cameron Way's Portfolio Application" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar />
            <div className={styles.main}>
                {children}
            </div>
        </main>
    </>
}

export default Layout