function validEmailList(emailList: string[]): string[] {
    let validEmails: string[] = []
    for (let i = 0; i < emailList.length; i++) {
        const email = emailList[i]
        const indexOfAt: number = email.indexOf('@')
        const indexOfSpace: number = email.indexOf(' ')
        const countAt: number = email.split('@').length - 1
        if (indexOfAt <= 0 || countAt !== 1 || indexOfSpace !== -1) continue

        const domain = email.slice(indexOfAt + 1)
        if (!domain.includes(".")) continue
        validEmails.push(email)
    }
    return validEmails
}