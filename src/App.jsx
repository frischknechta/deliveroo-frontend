import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/responsive.css";
import Header from "./components/Header";
import axios from "axios";
import Category from "./components/Category";
import Basket from "./components/Basket";
import BasketBottom from "./components/BasketBottom";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [seeBasket, setSeeBasket] = useState(false);

  // const handleAddBasket = (id) => {
  //   console.log("Add to basket ===>>>", id);
  //   const newTab = [data.categories];
  //   console.log(newTab);
  //   const meal = newTab.meals.findIndex((element) => element === id);
  //   console.log("Meal to basket ===>>>", meal);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--79sf29g9cmjg.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>Page is loading</span>
  ) : (
    <>
      <Header data={data} />

      <main>
        <div className="wrapper">
          <div className={"menu"}>
            {data.categories.map((category) => {
              return category.meals.length > 0 ? (
                <Category
                  key={category.name}
                  category={category}
                  basket={basket}
                  setBasket={setBasket}
                />
              ) : (
                ""
              );
            })}
          </div>
          <Basket basket={basket} setBasket={setBasket} />
        </div>
      </main>
      <div className="basketBottom">
        <BasketBottom
          basket={basket}
          setBasket={setBasket}
          seeBasket={seeBasket}
          setSeeBasket={setSeeBasket}
        />
      </div>
    </>
  );
}

export default App;
