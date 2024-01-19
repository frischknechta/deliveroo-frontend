import Meal from "./Meal";

const Category = ({ category, basket, setBasket }) => {
  return (
    <div className="category">
      <div>
        <h2>{category.name}</h2>
      </div>
      <div className="meals">
        {category.meals.map((meal) => {
          return (
            <Meal
              key={meal.id}
              meal={meal}
              basket={basket}
              setBasket={setBasket}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
