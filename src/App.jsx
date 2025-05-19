import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import ProductsList from "./pages/products/ProductsList";
import { BrowserRouter, Route, Routes } from "react-router";
import Welcome from "./pages/Welocme";
import ProductInfo from "./pages/products/ProductInfo";
import RecipeCounter from "./components/RecipeCounter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product-info/:id" element={<ProductInfo />} />
          <Route path="/recipe-Counter" element={<RecipeCounter />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
