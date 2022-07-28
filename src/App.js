import { Header } from './components/Header';
import { PizzaBlock } from './pages/pizzaPage/PizzaBlock';
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Cart } from './pages/cartPage/Cart';
import { createContext, useState } from 'react';

export let SearchContext = createContext()

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<PizzaBlock />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
