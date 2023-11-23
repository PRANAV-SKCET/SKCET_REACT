import React, { useState, useEffect } from 'react';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/Product');
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []); 
  return (
    <div>
      <h1>Product List</h1>
      <div className="Product-grid">
        {products.map(product => (
          <div key={product.id} className="Product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;