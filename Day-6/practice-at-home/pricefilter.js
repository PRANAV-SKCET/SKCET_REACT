import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ExampleComponent = () => {
  const { categories, priceFilter, setPriceFilter } = useContext(ProductContext);


  const handlePriceFilterChange = (min, max) => {
    setPriceFilter({ min, max });
  };
return (
    <div>
     
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      
     
      <input type="range" min="0" max="1000" onChange={(e) => handlePriceFilterChange(e.target.value)} />
      
     
    </div>
  );
};

export default ExampleComponent;

import React, { createContext, useState, useEffect } from 'react';
import { fetchCategories } from './ProductService'; 

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 }); 

  useEffect(() => {
    
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    getCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ categories, priceFilter, setPriceFilter }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };