import { useState } from "react"

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories = () => {
  const [activeCategory, setActiveCategory]  = useState(0)
  console.log(activeCategory);
    return <div className="categories">
    <ul>
      {categories.map((el, index) => {
       return <li className = {activeCategory===index ? 'active' : ''} onClick={() => setActiveCategory(index)}>{el}</li>
      })}
    </ul>
  </div>
}