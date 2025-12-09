from fastapi import FastAPI
from models import Product
app=FastAPI()

@app.get("/")
def greet():
    return "Welcome to my page"

products=[
    Product(id=1,name="phone",description="budget phone",price=99,quatity=2),
    Product(id=2,name="laptop",description="gaming phone",price=999,quatity=4),
    Product(id=3,name="mouse",description="gaming mouse",price=99,quatity=3)


]

@app.get("/products")
def get_all_products():
    return products


@app.get("/product/{id}")
def get_product_by_id(id:int):
    print(id)
    for product in products:
        print(product)
        if product.id==id:
            return product
        
    return "Product Not Found!"

@app.post("/product/")
def add_product(product:Product):
    products.append(product)
    return product

@app.put("/product")   
def update_product(id:int,product:Product):
    for i in range(len(products)):
        if products[i].id==id:
            products[i]=product
            return "Prodcut Added Successfully!"
    return "Product Not Found!"

@app.delete("/product/{id}")
def delete_product(id:int):
    for i in range(len(products)):
        if products[i].id==id:
            del products[i]
            return "Product Deleted!"
    return "Product Not Found!"

