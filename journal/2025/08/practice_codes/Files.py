FILE_EXTENTIONS = [".word", ".png", ".mp4", ".pdf"]

MEGA_BYTE_PER_WORD: int = 25
GIGA: int = 1000

class Files:
    def __init__(self, fileName: str, fileExtension: str, content: str, parentFolder: str):
        self.fileName = fileName
        self.fileExtension = ".txt" if fileExtension not in FILE_EXTENTIONS else fileExtension
        self.content = content
        self.parentFolder = parentFolder

    def getLifetimeBandwidthSize(self) -> str:
        file_size_mega = len(self.content) * MEGA_BYTE_PER_WORD
        if file_size_mega >= GIGA:
            file_size_giga = file_size_mega / GIGA
            return str(file_size_giga) + "GB"
        else:
            return str(file_size_mega) + "MB"
        
    
    def prependContent(self, data: str) -> str:
        self.content = data + self.content
        return self.content

    def addContent(self, data: str, position: int) -> str:
        self.content = self.content[:position] + data + self.content[position:]
        return self.content
    
    def showFileLocation(self) -> str:
        return self.parentFolder + " > " + self.fileName + self.fileExtension


assignment = Files("assignment", ".word", "ABCDEFGH", "homework")
print(assignment.getLifetimeBandwidthSize())
print(assignment.prependContent("MMM"))
print(assignment.addContent("hello world", 5))
print(assignment.showFileLocation())

blade = Files("blade", ".txt", "bg-primary text-white m-0 p-0 d-flex justify-content-center", "view")
print(blade.getLifetimeBandwidthSize())
print(blade.addContent("font-weight-bold ", 11))
print(blade.showFileLocation())F