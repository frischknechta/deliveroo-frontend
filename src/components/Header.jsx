import logo from "../assets/img/logo-teal.svg";

const Header = ({ data }) => {
  return (
    <>
      <header>
        <div className="topBar">
          <div className="topBarCenter wrapper">
            <img src={logo} alt="Deliveroo logo" />
          </div>
        </div>
        <div className="restoInfos">
          <div className="restoInfosCenter wrapper">
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
