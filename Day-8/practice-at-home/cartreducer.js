import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

const ADD_TO_CART = 'ORDER NOW';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer
const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

const store = createStore(cartReducer);
const CartPage = () => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h2>Your Orders</h2>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Rs.{item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <br/>
            <br/>
          </li>
        ))}
      </ol>
    </div>
  );
};

// ProductList Component
const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Carrot', price: 200 },
    { id: 2, name: 'Betroot', price: 150 },
    { id: 2, name: 'Tomato', price: 20 },
    { id: 2, name: 'Raddish', price: 250 },
  
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2>Vegetables List</h2>
      <ol>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - Rs.{item.price}
            <button onClick={() => handleAddToCart(item)}>Order Now</button>
            <br/>
            <br/>
          </li>
        ))}
      </ol>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>E-commerce Website</h1>
        <ProductList />
        <CartPage />
      </div>
    </Provider>
  );
};

export default App;