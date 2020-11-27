export function validateEmail(email: string, emailConfirmation: string) {
    if (email !== emailConfirmation) return false
    return true
}

export function validateEmailSyntax(email: string) {
    if (!email.includes('@')) return false
    return true
}