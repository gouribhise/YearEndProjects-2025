function Products({ products, refreshList }) {

    const deleteProduct = async (id) => {
      await fetch(`http://127.0.0.1:8000/product/${id}`, {
        method: "DELETE"
      });
  
      alert("Product deleted!");
  
      refreshList();  // refresh after delete
    };
  
    return (
      <div>
        <h3>Products</h3>
  
        <ul>
          {products.map(p => (
            <li key={p.id}>
              {p.name} - ₹{p.price}
              <button onClick={() => deleteProduct(p.id)} className="btn btn-danger btn-sm ms-2">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Products;
  