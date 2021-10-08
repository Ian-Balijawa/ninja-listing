import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	return (
		<nav>
			<div className='logo'>
				<Image src='/logo.png' alt='logo' width={50} height={30} />
			</div>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<Link href='/ninjas'>Ninja Listing</Link>
		</nav>
	);
}
