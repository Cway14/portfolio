import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import profileImage from '../assets/me.jpeg'
import construction from '../assets/construction.png'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<Layout>
			<h1 className={styles.title}> Cameron Way </h1>
			<p className={styles.description}> Junior Software Developer </p>
			<div className={styles.profile}>
				<Image src={profileImage} alt='' />
				<p> Testing</p>
			</div>
			<div className={styles.construction}>
				<div>
					<h3>Site Under Construction</h3>
					<p>Check back soon for updates!</p>
				</div>
				<Image src={construction} alt='' />
			</div>
		</ Layout >
	)
}
