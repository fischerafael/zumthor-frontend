export function validateEmail(email: string, emailConfirmation: string) {
    if (email !== emailConfirmation) return false
    return true
}
