import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ProductsList from "./pages/products/ProductsList";
import Welcome from "./pages/Welocme";
import ProductInfo from "./pages/products/ProductInfo";
import RecipeCounter from "./components/RecipeCounter";
import Registration from "./pages/users_auth/Registration";
import Cart from "./pages/cart/Cart";
import { DirectionProvider } from "./context/DirectionContext";



function App() {
  return (
    <DirectionProvider>
      <BrowserRouter>
        <Header />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/product-info/:id" element={<ProductInfo />} />
            <Route path="/recipe-Counter" element={<RecipeCounter />} />
            <Route path="/registration-page" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DirectionProvider>
  );
}

export default App;
