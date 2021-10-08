import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name='keywords' content='Ninjas' />
			</Head>
			<div>
				<h1 className={styles.title}>Home page</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Iure est aliquid accusantium, libero officia quibusdam.
					Rerum eos, nam nesciunt doloribus assumenda deleniti.
					Temporibus eius, similique illo nobis veniam facere eaque.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Iure est aliquid accusantium, libero officia quibusdam.
					Rerum eos, nam nesciunt doloribus assumenda deleniti.
					Temporibus eius, similique illo nobis veniam facere eaque.
				</p>

				<Link href='/ninjas'>
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
