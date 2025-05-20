import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDirection } from "../context/DirectionContext";
export default function Header() {
  const cartCount = useSelector((state) => state.cart.totalQuantity); // <-- totalQuantity from Redux
  const { direction, toggleDirection } = useDirection();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Products App
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav-underline">
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Products
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav nav-underline">
            <li className="nav-item">
              <NavLink
                to="/registration-page"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link position-relative">
                <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item dropdown" style={{ cursor: "pointer" }}>
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lang
              </span>
              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{
                  minWidth: "auto",
                  width: "auto",
                  padding: "0.25rem 0.5rem",
                }}
              >
                <li>
                  <span
                    className={
                      "dropdown-item " + (direction === "ltr" ? "active" : "")
                    }
                    onClick={() => direction !== "ltr" && toggleDirection()}
                    style={{ cursor: "pointer" }}
                  >
                    En
                  </span>
                </li>
                <li>
                  <span
                    className={
                      "dropdown-item " + (direction === "rtl" ? "active" : "")
                    }
                    onClick={() => direction !== "rtl" && toggleDirection()}
                    style={{ cursor: "pointer" }}
                  >
                    Ar
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
