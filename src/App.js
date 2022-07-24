import { Header } from './components/Header';
import { PizzaBlock } from './pages/pizzaPage/PizzaBlock';
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Cart } from './pages/cartPage/Cart';
import { createContext, useState } from 'react';

export let SearchContext = createContext()

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ value, setValue }}>
        <Header />
        <Routes>
          <Route path='/' element={<PizzaBlock />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
