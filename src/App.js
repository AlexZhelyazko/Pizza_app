import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './pages/pizzaPage/PizzaBlock';
import { Sort } from './components/Sort';
import './scss/app.scss'
import pizzaData from './assets/data/data.json'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock {...pizzaData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
