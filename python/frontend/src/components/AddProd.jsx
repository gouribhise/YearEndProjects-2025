import { useState } from "react";

function AddProd() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    quantity: ""
  });

  const handleChange = (e) => {
    console.log("inside handlechange");
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("inside handlesubmit");
    e.preventDefault();
    console.log("Product added:", product);

    alert("Product Added!");

    setProduct({
      id: "",
      name: "",
      description: "",
      price: "",
      quantity: ""
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h3>Add Product</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="id"
            value={product.id}
            onChange={handleChange}
            className="col-md-3"
            placeholder="Product ID"
          />

          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="col-md-3"
            placeholder="Product Name"
          />

          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="col-md-3"
            placeholder="Description"
          />

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="col-md-3"
            placeholder="Price"
          />

          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="col-md-3"
            placeholder="Quantity"
          />
 
          <button type="submit" className="btn btn-primary mt-3">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProd;
