import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--79sf29g9cmjg.code.run/"
        );
        console.log(response.data);
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
          <div className="menu">
            {data.categories.map((category) => {
              console.log(category);
              return category.meals.length > 0 ? (
                <Category key={category.name} category={category} />
              ) : (
                ""
              );
            })}
          </div>
          <div className="basket"></div>
        </div>
      </main>
    </>
  );
}

export default App;
