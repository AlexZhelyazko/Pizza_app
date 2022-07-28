import { useSelector, useDispatch } from "react-redux"
import { setActiveCategory } from "../redux/slices/filterSlice"

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories = () => {
  let activeCategory = useSelector((state) => state.filterSlice.activeCategory)
  const dispatch = useDispatch()
    return <div className="categories">
    <ul>
      {categories.map((el, index) => {
       return <li key={index} className = {activeCategory===index ? 'active' : ''} onClick={() => dispatch(setActiveCategory(index))}>{el}</li>
      })}
    </ul>
  </div>
}