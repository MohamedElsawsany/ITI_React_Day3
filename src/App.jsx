import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import RecipeList from "./pages/Recpies/RecpieList";
import { BrowserRouter, Route, Routes } from "react-router";
import Welcome from "./pages/Welocme";
import RecipeInfo from "./pages/Recpies/RecpieInfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipe-info/:id" element={<RecipeInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
