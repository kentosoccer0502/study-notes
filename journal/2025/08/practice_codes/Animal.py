import math

HEIGHT_OF_DANGEROUS = 1.7
SPEED_OF_DANGEROUS = 35


class Animal:
    def __init__(self, name: str, weightKg: int, heightM: int, isPredator: bool, speedKph: int):
        self.name = name
        self.weightKg = weightKg
        self.heightM = heightM
        self.isPredator = isPredator
        self.speedKph = speedKph
        self.activityMultiplier = 1.2

    def getBmi(self) -> int:
        return math.floor(self.weightKg / self.heightM ** 2 * 100) / 100

    def getDailyCalories(self) -> int:
        return math.floor((70 * self.weightKg ** 0.75) * self.activityMultiplier * 100) / 100

    def isDangerous(self) -> bool:
        if self.isPredator:
            return True
        elif self.heightM >= HEIGHT_OF_DANGEROUS or self.speedKph >= SPEED_OF_DANGEROUS:
            return True
        else:
            return False


rabbit = Animal("rabbit", 10, 0.3, False, 20)
print(rabbit.getBmi())
print(rabbit.isDangerous())

snake = Animal("snake", 30, 1, True, 30)
print(snake.isDangerous())
print(snake.getDailyCalories())

elephant = Animal("elephant", 300, 3, False, 5)
print(elephant.getBmi())
print(elephant.getDailyCalories())

gazelle = Animal("gazelle", 50, 1.5, False, 100)
print(gazelle.getDailyCalories())
print(gazelle.isDangerous())
