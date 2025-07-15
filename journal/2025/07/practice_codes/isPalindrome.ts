function isPalindrome(stringInput:string): boolean{
    const spaceRejectInput = stringInput.toLocaleLowerCase().replace(/ /g, "")
    const stringLength = spaceRejectInput.length
    let index = 0
    while (index <= Math.floor(stringLength / 2)) {
        if(spaceRejectInput[index] !== spaceRejectInput[stringLength - index - 1]) return false
        index += 1
    }
    return true
}

