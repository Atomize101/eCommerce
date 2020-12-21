import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

//import Products from './components/Products/Products';
//import NavBar from './components/Navbar/Navbar';

import { Products, NavBar } from './components';

const App = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	// I cannot believe no one looks through my github. It is depressing.

	useEffect(() => {
		fetchProducts();
	}, []);

	console.log(products);
	return (
		<div>
			<NavBar />
			<Products />
		</div>
	);
};

export default App;
