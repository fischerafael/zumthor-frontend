export function saveLoginDateInLocalStorage(loginData: any) {
    const userDataString = JSON.stringify(loginData)
    localStorage.setItem('userData', userDataString)
}

export function getUserInfoInLocalStorage(localStorageKey: string) {  
    if (!localStorageKey) return {}
    const userData = JSON.parse(localStorage.getItem(localStorageKey))
    return userData
}

export function clearUserInfoInLocalStorage() {
    localStorage.clear()
}