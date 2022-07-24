import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../App"
import { Skeleton } from "./SkeletonLoader/Skeleton"

export const PizzaList = ({activeSort, activeCategory, sorts}) => {
  const pizzaType = ['тонкое', 'традиционное']
  const {value} = useContext(SearchContext)
  const [pizzas, setPizzas] = useState([])
  const [pizzaCount, setPizzaCount] = useState(0)
  const [activePizzaType, setActivePizzaType] = useState(0)
  const [activePizzaSize, setActivePizzaSize] = useState(0)
  const [loading, setIsLoading] = useState(true)
  const onAddButtonClick = () => {
      setPizzaCount(pizzaCount+1)
    }
  
  useEffect(() => {
    setIsLoading(true)
    console.log(value);
    fetch(`https://62d45072cd960e45d456797d.mockapi.io/pizza?filter=${value}${activeCategory>0 ? `&category=${activeCategory}` : ''}&sortBy=${sorts[activeSort].queryParamName}`).then((response) => {
      return response.json()
    }).then((data) => {
      setPizzas(data)
      setIsLoading(false)
    }) 
  }, [activeCategory, activeSort, value])  
  const fakeArr = [...new Array(8)]

  return <>
    {loading 
    ? fakeArr.map(() => <Skeleton/> )
    : pizzas.map((el, index) => {
      return <div className="pizza-block" key={index}>
      <img className="pizza-block__image" src={el.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{el.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {el.types.map((type, typeInd) => {
            return <li key={typeInd} onClick={() => setActivePizzaType(typeInd)} className={activePizzaType === typeInd ? 'active' : ''}>{pizzaType[typeInd]}</li>
          })}
        </ul>
        <ul>
          {el.sizes.map((size, sizeInd) => {
            return <li key={sizeInd} onClick={() => setActivePizzaSize(sizeInd)} className={activePizzaSize === sizeInd ? 'active' : ''}>{size}</li>
          })}
        </ul>
      </div>
      <div onClick={onAddButtonClick} className="pizza-block__bottom">
        <div className="pizza-block__price">от {el.price} ₽</div>
        <div className="button button--outline button--add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
          </svg>
          <span>Добавить</span>
          <i>{pizzaCount}</i>
        </div>
      </div>
    </div>
    })}
  </>
}