import { useEffect, useState } from "react";
import AddProd from "./components/AddProd";
import SearchProd from "./components/SearchProd";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  const loadProducts = async () => {
    const res = await fetch("http://127.0.0.1:8000/products/");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();   // load products when app starts
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div className="container">

        <div className="row">
          {/* Pass loadProducts to AddProd */}
          <div className="col-md-6">
            <AddProd refreshList={loadProducts} />
          </div>

          <div className="col-md-4">
            <SearchProd products={products} />
          </div>
        </div>

        <div className="row">
          {/* Pass products to Products */}
          <Products products={products} refreshList={loadProducts} />
        </div>

      </div>
    </div>
  );
}

export default App;
