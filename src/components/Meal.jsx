const Meal = ({ meal }) => {
  return (
    <div key={meal.id} className="mealContainer">
      <div className="mealItem">
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
