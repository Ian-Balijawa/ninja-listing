export const getStaticPaths = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	const paths = data.map(ninja => {
		return {
			params: { id: ninja.id.toString() },
		};
	});

	return {
		// an array of routes
		// paths:[{},{}, {params:{id}}]

		paths,
		fallback: false, //for fallback pages to show the 404 pages
	};
};

export const getStaticProps = async context => {
	const id = context.params.id;

	const response = await fetch(
		'https://jsonplaceholder.typicode.com/users/' + id
	);
	const data = await response.json();

	return {
		props: {
			ninja: data,
		},
	};
};

const Details = ({ ninja }) => {
	return (
		<div>
			<h1>Details Page</h1>
			<h2>{ninja.name}</h2>
			<p>{ninja.email}</p>
			<p>{ninja.website}</p>
			<p>{ninja.address.city}</p>
		</div>
	);
};

export default Details;
