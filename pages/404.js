import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			console.log('use Effect run after 3s');
			router.push('/');
		}, 3000);

		return () => {};
	}, []);

	return (
		<div className='not-found'>
			<h1>Ooops...</h1>
			<h2>That page could not be found</h2>
			<p>
				Go back to{' '}
				<Link href='/'>
					<a>homepage page</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
