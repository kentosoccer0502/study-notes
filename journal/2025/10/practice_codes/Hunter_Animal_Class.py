class Animal:
    def __init__(self, species: str, weightKg: float, heightM: float, predetar: bool):
        self.species = species
        self.weightKg = weightKg
        self.heightM = heightM
        self.predetar = predetar
    
    def domesticate(self) -> bool:
        self.predetar = False

class Hunter:
    def __init__(self, name: str, weightKg: float, heightM: float, strength: float, cageCubicMeters: float):
        self.name = name
        self.weightKg = weightKg
        self.heightM = heightM
        self.strength = strength
        self.cageCubicMeters = cageCubicMeters

    def strengthKg(self) -> float:
        return self.strength * self.weightKg
    
    def canCaptureAnimal(self, animal) -> bool:
        if self.weightKg >= animal.weightKg and self.cageCubicMeters >= animal.heightM and not animal.predetar:
            return True
    
    def attemptToDomesticate(self, animal) -> bool:
        if self.strength > animal.weightKg * 2:
            animal.domesticate()
            return True


def capturedAnimals(hunter, animals: []) -> []:
    "WIP"
    return None
def domesticateTheAnimals(hunter, animals: []) -> []:
    "WIP"
    return None

tiger = Animal("Tiger", 290, 2.6, True)
cow = Animal("Cow", 1134, 1.5, False)
snake = Animal("Snake", 100, 1.2, True)
cat = Animal("Cat", 10, 0.5, False)
hunternator = Hunter("Hunternator", 124.73, 1.85, 15, 3)

animals = [tiger, cow, snake, cat]

print(capturedAnimals(hunternator, animals))

print(domesticateTheAnimals(hunternator, animals))

print(capturedAnimals(hunternator, animals))