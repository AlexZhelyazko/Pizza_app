import { Header } from './components/Header';
import { PizzaBlock } from './pages/pizzaPage/PizzaBlock';
import './scss/app.scss'
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<PizzaBlock />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
