import { Link } from "react-router-dom";
import "../main.css";
export const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/About" eleme>
        About
      </Link>
      <Link className="link" to="/">
        Home
      </Link>
      <Link to="/Product" className="link">
        Product
      </Link>
      <Link to="/LogIn" className="link">
        Log In
      </Link>
    </div>
  );
};
