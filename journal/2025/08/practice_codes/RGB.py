class RGB:
    def __init__(self, red: int, green: int, blue: int):
        self.red = red
        self.green = green
        self.blue = blue

    def getHexCode(self) -> str:
        hex_red = format(self.red, '02x')
        hex_green = format(self.green, '02x')
        hex_blue = format(self.blue, '02x')
        hex = hex_red + hex_green + hex_blue
        return '#' + hex

    def getBits(self) -> str:
        hex_code = self.getHexCode()[1:]
        decimal = int(hex_code, 16)
        return format(decimal, 'b')

    def getColorShade(self) -> str:
        if self.red == self.green and self.red == self.blue:
            return "grayscale"
        elif self.red >= self.green and self.red >= self.blue:
            return "red"
        elif self.green >= self.red and self.green >= self.blue:
            return "green"
        elif self.blue >= self.red and self.blue >= self.green:
            return "blue"


color1 = RGB(0, 153, 255)
print(color1.getHexCode())
print(color1.getBits())
print(color1.getColorShade())

color2 = RGB(255, 255, 204)
print(color2.getHexCode())
print(color2.getBits())
print(color2.getColorShade())

color3 = RGB(0, 87, 0)
print(color3.getHexCode())
print(color3.getBits())
print(color3.getColorShade())

gray = RGB(123, 123, 123)
print(gray.getHexCode())
print(gray.getBits())
print(gray.getColorShade())
