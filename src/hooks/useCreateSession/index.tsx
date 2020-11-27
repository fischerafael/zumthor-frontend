import { useRouter } from "next/router"
import { useState } from "react"
import { saveLoginDateInLocalStorage } from "../../helpers/localStorage"
import { validateEmailSyntax } from "../../helpers/validations"
import loginUserService from "../../services/api/loginUserService"

const useCreateSession = () => {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    async function handleLogin(e: any) {
        e.preventDefault()

        setIsLoading(true)

        const isEmailValid = validateEmailSyntax(email)
        if (!isEmailValid) {
            setError('Informe um email válido')
            setTimeout(() => setError(''), 2000)
            setIsLoading(false) 
            return
        } 

        const data = await loginUserService({ email: email })        

        if (data.isLogged === false) {
            alert('Falha ao realizar login, tente novamente')
            setEmail('')
            setIsLoading(false)
            return
        }

        const userData = data.response.data
        saveLoginDateInLocalStorage(userData) 

        alert('Login realizado com sucesso')
              
        router.push('/dashboard')
    }    
    
    return {
        isLoading,
        email,
        setEmail,
        error,
        handleLogin
    }
}

export default useCreateSession
