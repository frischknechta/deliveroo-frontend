const Header = ({ data }) => {
  return (
    <>
      <header>
        <div className="topBar">
          <div className="topBarCenter">
            <img src="src/assets/img/logo-teal.svg" alt="Deliveroo logo" />
          </div>
        </div>
        <div className="restoInfos">
          <div className="restoInfosCenter">
            <div>
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>

            <img
              src={data.restaurant.picture}
              alt="A picture of a brunch table"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
