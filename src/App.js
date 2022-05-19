import Categories from './components/Categories';
import Header from './components/Header';
import SinglePizza from './components/SinglePizza';
import Sorting from './components/Sorting';
import './scss/app.scss';

import { pizzas } from './data';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sorting />
          </div>
          <h2 className="content__title">All Pizzas</h2>
          <div className="content__items">
            {pizzas.map((item) => {
              const { id, ...itemProps } = item;
              return <SinglePizza key={id} {...itemProps} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
