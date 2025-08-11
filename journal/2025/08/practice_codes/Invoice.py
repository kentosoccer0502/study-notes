TAX: float = 1.10

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

class Invoice:
    def __init__(self, invoiceNumber: str, invoiceItemHead: InvoiceItem):
        self.invoiceNumber = invoiceNumber
        self.invoiceItemHead = invoiceItemHead

    def amountDue(self, taxes: bool) -> float:
        amountTotal = 0
        currentHead = self.invoiceItemHead
        while currentHead is not None:
            if taxes:
                amountTotal += currentHead.getTotalPrice() * TAX
            else:
                amountTotal += currentHead.getTotalPrice()
            currentHead = currentHead.next
        return amountTotal


product1 = Product("shampoo", 10)
product2 = Product("conditioner", 5)
product3 = Product("tooth brush", 3)

firstItem = InvoiceItem(product1, 7)
secondItem = InvoiceItem(product2, 9)
thirdItem = InvoiceItem(product3, 10)

firstItem.next = secondItem
secondItem.next = thirdItem
invoice = Invoice("UC1234567890", firstItem)

print(invoice.amountDue(False))
print(invoice.amountDue(True))