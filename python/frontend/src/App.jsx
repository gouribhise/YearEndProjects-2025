import { useEffect, useState } from "react";
import AddProd from "./components/AddProd";
import SearchProd from "./components/SearchProd";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const loadProducts = async () => {
    const res = await fetch("http://127.0.0.1:8000/products/");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products); // initially show all
  }, [products]);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((prod) =>
        prod.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div className="container">

        <div className="row">
          <div className="col-md-6">
            <AddProd refreshList={loadProducts} />
          </div>

          <div className="col-md-4">
            <SearchProd onSearch={handleSearch} />
          </div>
        </div>

        <div className="row">
          <Products products={filteredProducts} refreshList={loadProducts} />
        </div>

      </div>
    </div>
  );
}

export default App;
