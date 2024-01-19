const BasketBottom = ({ basket, setBasket, seeBasket, setSeeBasket }) => {
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

  let qtyTotal = 0;
  for (let i = 0; i < basket.length; i++) {
    qtyTotal += basket[i].quantity;
  }

  let deliveryCosts = 2.5;
  if (total >= 50) {
    deliveryCosts = 0;
  }

  return (
    <div className={basket.length === 0 ? "hidden" : ""}>
      <div className="basketBottomContainer">
        {seeBasket === false ? (
          <button
            className="seeBasket"
            onClick={() => {
              setSeeBasket(!seeBasket);
            }}
          >
            <div>
              <span>{qtyTotal}</span>
            </div>

            <span>Voir mon panier</span>
            <span>{total.toFixed(2)} €</span>
          </button>
        ) : (
          <>
            <div className="basketTopLine">
              <span>Votre commande</span>
              <i
                className="icon-cross"
                onClick={() => {
                  setSeeBasket(!seeBasket);
                }}
              ></i>
            </div>
            <div className="basketBottomItems">
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
            <button className={"validateCart"}>Valider mon panier</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BasketBottom;
