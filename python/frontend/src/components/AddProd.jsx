import { useState } from "react";

function AddProd({ refreshList }) {

  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      id: Number(product.id),
      name: product.name,
      description: product.description,
      price: Number(product.price),
      quantity: Number(product.quantity)
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/product/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
      });

      const data = await response.json();
      console.log("Product added:", data);

      alert("Product Added!");

       refreshList();

      // Reset form
      setProduct({
        id: "",
        name: "",
        description: "",
        price: "",
        quantity: ""
      });

    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row"><h3>Add Product</h3></div>

        <form onSubmit={handleSubmit}>
          <input type="number" name="id" value={product.id}
                 onChange={handleChange} placeholder="Product ID" />

          <input type="text" name="name" value={product.name}
                 onChange={handleChange} placeholder="Product Name" required />

          <input type="text" name="description" value={product.description}
                 onChange={handleChange} placeholder="Description" />

          <input type="number" name="price" value={product.price}
                 onChange={handleChange} placeholder="Price" />

          <input type="number" name="quantity" value={product.quantity}
                 onChange={handleChange} placeholder="Quantity" />

          <button type="submit" className="btn btn-primary mt-3">Add</button>
        </form>
      </div>
    </>
  );
}

export default AddProd;
