import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./modules/Home"
import Product from "./modules/Home/Product"
import Footer from "./components/Footer"

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:id' element={<Product />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
