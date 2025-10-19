function addEveryOtherElement(intArr:number[]): number{
    let sum: number = 0
    for (let i = 0; i < intArr.length; i++){
        if ((i + 1) % 2 === 0) continue
        sum += intArr[i]
    }
    return sum
}