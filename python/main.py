from fastapi import FastAPI
from models import Product
app=FastAPI()

@app.get("/")
def greet():
    return "Welcome to my page"

products=[
    Product(id=1,name="phone",description="budget phone",price=99,quatity=2),
    Product(id=2,name="laptop",description="gaming phone",price=999,quatity=4)

]

@app.get("/products")
def get_all_products():
    return products

