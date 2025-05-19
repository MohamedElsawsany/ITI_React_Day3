import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "../../components/ProductsCard";

export default function ProductsList() {
  const [products, setProducts] = useState([]);       // filtered products
  const [allProducts, setAllProducts] = useState([]); // original list

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setAllProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProductFromTheList = (id) => {
    const filtered = allProducts.filter((product) => product.id !== id);
    setAllProducts(filtered);
    setProducts(filtered);
  };

  const searchInProductsList = (text) => {
    if (text.trim() === "") {
      setProducts(allProducts); // reset to full list
    } else {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(text.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  return (
    <>
      <h2>Products List</h2>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => searchInProductsList(e.target.value)}
      />
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductsCard data={product} onDelete={deleteProductFromTheList} />
          </div>
        ))}
      </div>
    </>
  );
}
