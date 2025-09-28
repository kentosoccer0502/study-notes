from typing import List

class Book:
    def __init__(self, title: str, year: str):
        self.author = "Stephen Hawkings"
        self.title = title
        self.year = year

def printBookArray(books: List[Book]) -> str:
    for book in books:
        print(f"{book.title} written by {book.author} in {book.year}")

books = []
books.append(Book("How Did It All Begin?", "2021"))
books.append(Book("The Theory of Everything", "2010"))
books.append(Book("God Created the Integers", "2006"))

printBookArray(books)

