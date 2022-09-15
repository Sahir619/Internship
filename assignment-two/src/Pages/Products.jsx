import React, { useState, useEffect } from 'react'
import "./style.scss"
import productList from "../Assets/jsons/products.json"
import Product from "../Components/Products"

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(productList)
  },[])
  return(
    <div className="container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => <Product product={product}/>)}
      </div>
    </div>
  )
}
export default Products