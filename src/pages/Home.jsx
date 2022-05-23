import { useEffect, useState } from 'react';

import Sorting from '../components/Sorting'
import Categories from '../components/Categories';
import SinglePizza from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://62873d457864d2883e80f6eb.mockapi.io/items')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);
  return (
   <>
          <div className="content__top">
            <Categories />
            <Sorting />
          </div>
          <h2 className="content__title">All Pizzas</h2>
          <div className="content__items">
            {/* if isLoading true, create a fake array with 6 items, when downloading is finish show items with data */}
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton  key={index}/>)
              : items.map((item) => <SinglePizza key={item.id} {...item} />)}
          </div>
   </>
  )
}

export default Home