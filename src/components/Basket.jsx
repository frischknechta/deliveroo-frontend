const Basket = ({ basket, setBasket }) => {
  const handleRemove = (id) => {
    const newTab = [...basket];

    const index = newTab.findIndex((element) => element.id === id);

    if (newTab[index].quantity > 1) {
      newTab[index].quantity = newTab[index].quantity - 1;
    } else {
      newTab.splice(index, 1);
    }

    setBasket(newTab);
  };

  const handleAdd = (id) => {
    const newTab = [...basket];

    const index = newTab.findIndex((element) => element.id === id);

    newTab[index].quantity = newTab[index].quantity + 1;

    setBasket(newTab);
  };

  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total += basket[i].price * basket[i].quantity;
  }

  let deliveryCosts = 2.5;
  if (total >= 50) {
    deliveryCosts = 0;
  }

  return (
    <div>
      <div className="basket">
        <button
          className={
            basket.length === 0 ? "validateCart disabled" : "validateCart"
          }
        >
          Valider mon panier
        </button>
        {basket.length === 0 ? (
          <div className="basketEmpty">Votre panier est vide</div>
        ) : (
          <div>
            <div className="itemsList">
              {basket.map((item) => {
                return (
                  <div key={item.id} className="item">
                    <div className="counter">
                      <i
                        className="icon-minus"
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      ></i>
                      {item.quantity}
                      <i
                        className="icon-plus"
                        onClick={() => {
                          handleAdd(item.id);
                        }}
                      ></i>
                    </div>
                    <div className="itemTitle">{item.title}</div>

                    <span className="right">
                      {(item.price * item.quantity).toFixed(2)} €
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="subTotal">
              <div>
                Sous-total <span className="right">{total.toFixed(2)} €</span>
              </div>
              <div>
                Frais de livraison{" "}
                <span className="right">{deliveryCosts.toFixed(2)} €</span>
              </div>
            </div>
            <div className="total">
              Total{" "}
              <span className="right">
                {(total + deliveryCosts).toFixed(2)} €
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
