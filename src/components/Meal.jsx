const Meal = ({ meal, basket, setBasket }) => {
  const handleAddBasket = () => {
    const newTab = [...basket];
    const index = newTab.findIndex((element) => element.id === meal.id);
    if (index === -1) {
      meal.quantity = 1;
      newTab.push(meal);
      setBasket(newTab);
    } else {
      newTab[index].quantity = newTab[index].quantity + 1;
      setBasket(newTab);
    }
  };

  return (
    <div key={meal.id} className="mealContainer">
      <div className="mealItem" onClick={handleAddBasket}>
        <div className="mealInfo">
          <h3>{meal.title}</h3>
          {meal.description ? (
            <p className="mealDescription">{meal.description} </p>
          ) : (
            ""
          )}
          <p className="price">
            <span>{meal.price} €</span>
            {meal.popular ? (
              <span className="popular">
                <i className="icon-STAR_FILL"></i> Populaire
              </span>
            ) : (
              ""
            )}
          </p>
        </div>

        {meal.picture ? (
          <div className="mealPicture">
            <img src={meal.picture} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Meal;
