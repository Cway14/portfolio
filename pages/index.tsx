import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import profileImage from '../assets/me.jpeg'
import construction from '../assets/barricade.png'
import Layout from '../components/Layout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<Layout>
			<h1 className={styles.title}> Cameron Way </h1>
			<p className={styles.description}> Junior Software Developer </p>
			<div className={styles.profile}>
				<Image src={profileImage} alt='' />
				<p className={styles.aboutme}>
					Hi there! My name is Cameron Way, and I am a student at Simon Fraser University.
					I am currently working at Design It Corp. as a Junior Software Developer.
					For more of my work and experience, please visit my{' '}
					<Link className={styles.subtlelink} href='/resume'>resume</Link> or <Link className={styles.subtlelink} href='/projects'>projects</Link> pages.
					Feel free to contact me on <Link className={styles.linkedin} href='www.linkedin.com/in/camway/'>LinkedIn</Link>,{' '}
					<Link className={styles.instagram} href='www.instagram.com/camwaay/'>Instagram</Link>,
					or by <a className={styles.subtlelink} href='mailto:cway140@gmail.com'>email</a>.

				</p>
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
