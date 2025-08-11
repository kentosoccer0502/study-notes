class Product:
    def __init__(self, title: str, price: float):
        self.title = title
        self.price = price
    

class InvoiceItem:
    def __init__(self, product: Product, quantity: int):
        self.product = product
        self.quantity = quantity
        self.next = None

    def getTotalPrice(self) -> float:
        return self.product.price * self.quantity

product1 = Product("shampoo", 10)
product2 = Product("conditioner", 5)
product3 = Product("tooth brush", 3)

firstItem = InvoiceItem(product1, 7)
secondItem = InvoiceItem(product2, 9)
thirdItem = InvoiceItem(product3, 10)

firstItem.next = secondItem
secondItem.next = thirdItem

print(firstItem.getTotalPrice())
print(secondItem.getTotalPrice())
print(firstItem.next.getTotalPrice())
print(firstItem.next.next.getTotalPrice())
print(firstItem.next.product.price)
print(firstItem.next.next.product.title)