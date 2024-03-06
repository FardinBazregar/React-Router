import { Link } from "react-router-dom";
export const Product = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/Product/1" className="link-p link-f">
              Product 1
            </Link>
          </li>
          <li>
            <Link to="/Product/2" className="link-p">
              Product 2
            </Link>
          </li>
          <li>
            <Link to="/Product/3" className="link-p">
              Product 3
            </Link>
          </li>
          <li>
            <Link to="/Product/4" className="link-p">
              Product 4
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
