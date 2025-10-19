function generateAlphabet(firstAlphabet:string, secondAlphabet:string): string[]{
    let stoppedAlphabet: string[]= []
    const firstCode = firstAlphabet.toLowerCase().charCodeAt(0)
    const secondCode = secondAlphabet.toLowerCase().charCodeAt(0)
    if (firstCode >= secondCode) {
        for (let i = secondCode; i <= firstCode; i++){
        stoppedAlphabet.push(String.fromCharCode(i))
        }
        return stoppedAlphabet
    }
    else {
        for (let i = firstCode; i <= secondCode; i++){
        stoppedAlphabet.push(String.fromCharCode(i))
        }
        return stoppedAlphabet
    }
    
}