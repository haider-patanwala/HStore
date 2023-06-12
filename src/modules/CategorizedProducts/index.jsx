import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import Products from "../Products"
import ProductsArchive from "../../components/ProductsArchive"

const CategorizedProducts = () => {
	const { name } = useParams()
	const [Products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch(
				`https://fakestoreapi.com/products/category/$(name)`
			)
			const data = await response.json()
			console.log(data)
			setProducts(data)
		}
		fetchProducts()
	}, [])

	if (Products.length === 0)
		return <div className='flex justify-center'>loading...</div>

	return <ProductsArchive products={products} />
}

export default CategorizedProducts
