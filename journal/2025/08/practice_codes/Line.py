class Point:
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

class Line:
    def __init__(self, startPoint: Point, endPoint: Point):
        self.startPoint = startPoint
        self.endPoint = endPoint

    def getLength(self) -> int:
        return int(((self.startPoint.x - self.endPoint.x) ** 2 + (self.startPoint.y - self.endPoint.y) ** 2) ** 0.5)

a = Point(3,1)
b = Point(3,6)
lineAB = Line(a, b)
print(lineAB.getLength())

c = Point(1,3)
d = Point(6,15)
lineCD = Line(c, d)
print(lineCD.getLength())