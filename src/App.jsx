import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./modules/Home"
import Product from "./modules/Product"
import Footer from "./components/Footer"
import ProductsArchive from "./components/ProductsArchive"
import Products from "./modules/Products"
import CategorizedProducts from "./modules/CategorizedProducts"

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:id' element={<ProductsArchive />} />
				<Route path='/products' element={<Products />} />
				<Route path='/categories/:name' element={<CategorizedProducts />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
