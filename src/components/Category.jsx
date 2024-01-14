import Meal from "./Meal";

const Category = ({ category }) => {
  return (
    <div className="category">
      <div>
        <h2>{category.name}</h2>
      </div>
      <div className="meals">
        {category.meals.map((meal) => {
          return <Meal meal={meal} />;
        })}
      </div>
    </div>
  );
};

export default Category;
