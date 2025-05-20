import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "../../components/ProductsCard";

export default function ProductsList() {
  const [products, setProducts] = useState([]);       // filtered list
  const [allProducts, setAllProducts] = useState([]); // full list
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // adjust as needed

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
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(text.trim() === "" ? allProducts : filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h2>Products List</h2>

      <input
        className="form-control mb-3"
        type="search"
        placeholder="Search"
        onChange={(e) => searchInProductsList(e.target.value)}
      />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentProducts.map((product) => (
          <div className="col" key={product.id}>
            <ProductsCard data={product} onDelete={deleteProductFromTheList} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
