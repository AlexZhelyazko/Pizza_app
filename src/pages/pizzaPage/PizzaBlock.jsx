import { Categories } from "../../components/Categories"
import { PizzaList } from "../../components/PizzaList"
import { Sort } from "../../components/Sort"
import { useState } from "react"

export const PizzaBlock =  (props) => {
  const sorts = [
    {queryParamName: 'rating', name: 'популярности'},
    {queryParamName: 'price', name: 'цене'},
    {queryParamName: 'name', name: 'алфавиту'},
  ]
  const [activeSort, setActiveSort] = useState(0)
  const [activeCategory, setActiveCategory]  = useState(0)
  return <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories setCategory = {(index) => setActiveCategory(index)} activeCategory = {activeCategory}/>
            <Sort sorts={sorts} setSort = {(index) => setActiveSort(index)} activeSort = {activeSort}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaList sorts={sorts} activeSort = {activeSort} activeCategory = {activeCategory}/>
          </div>
        </div>
  </div>
}