import { Link } from "react-router-dom";
import "./art.css"

const Navbar = () => {
  return (
  <div>
    <div className="lightsaber--wrapper position--1">
      <div className="lightsaber--handlepiece1"></div>
      <div className="lightsaber--handlepiece2"></div>
      <div className="lightsaber--handlepiece3"></div>
      <div className="lightsaber--glow"></div>
    </div>

    <div className="starwars-navbar">
      <Link to="/">Home</Link>
      <Link id="lightside--button" to="../pages/LightSidePage">
        Light Side
      </Link>
      <Link id="darkside--button" to="../pages/DarkSidePage">
        Dark Side
      </Link>
    </div>


          <div className="lightsaber--wrapper position--2">
            <div className="lightsaber--handlepiece1"></div>
            <div className="lightsaber--handlepiece2"></div>
            <div className="lightsaber--handlepiece3"></div>
            <div className="lightsaber--glow2"></div>
          </div>
  </div>
  );
};

export default Navbar;
