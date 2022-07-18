import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './pages/pizzaPage/PizzaBlock';
import { Sort } from './components/Sort';
import './scss/app.scss'
import pizzaData from './assets/data/data.json'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<PizzaBlock />} />
      </Routes>
    </div>
  );
}

export default App;
