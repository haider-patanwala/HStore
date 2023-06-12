import React, { useEffect, useState } from "react"
import Hero from "../../components/Hero"
import FeatureCard from "../../components/FeatureCard"
import Stats from "../../components/Stats"
import ProductsArchive from "../../components/ProductsArchive"
import Categories from "../../components/Categories/indeex"

const Home = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products?limit=12")
			const data = await response.json()
			console.log(data)
			setProducts(data)
		}
		fetchProducts()
	}, [])

	return (
		<>
			<Hero />
			<Categories />
			<div className='flex flex-col text-center w-full '>
				<h2 className='text-xs text-blue-500 tracking-widest font-medium title-font mb-1'>
					PRODUCTS
				</h2>
				<h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>
					MOST POPULAR PRODUCTS
				</h1>
			</div>
			{products.length > 0 ? (
				<ProductsArchive products={products} />
			) : (
				<div>Loading...</div>
			)}
			<ProductsArchive />
			<Stats />
		</>
	)
}

export default Home
