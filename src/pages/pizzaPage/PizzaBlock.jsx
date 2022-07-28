import { Categories } from "../../components/Categories"
import { PizzaList } from "../../components/PizzaList"
import { Sort } from "../../components/Sort"

export const PizzaBlock =  (props) => {
  const sorts = [
    {queryParamName: 'rating', name: 'популярности'},
    {queryParamName: 'price', name: 'цене'},
    {queryParamName: 'name', name: 'алфавиту'},
  ]

  return <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort sorts={sorts}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaList sorts={sorts}/>
          </div>
        </div>
  </div>
}