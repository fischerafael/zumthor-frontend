import { useRouter } from "next/router"
import { useState } from "react"
import { validateEmail, validateEmailSyntax } from "../../helpers/validations"
import createUserService from "../../services/api/createUserService"

const useCreateUser = () => {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [emailConfirmation, setEmailConfirmation] = useState('')
    const [emailConfirmationError, setEmailCofirmationError] = useState('')

    async function handleCreateUser(e: any) {
        e.preventDefault()

        setIsLoading(true)

        const isEmailConfirmed = validateEmail(email, emailConfirmation)
        if (!isEmailConfirmed) {
            setEmailCofirmationError('Os emails são diferentes')   
            setTimeout(() => setEmailCofirmationError(''), 2000)
            setIsLoading(false)    
            return
        } 

        const isEmailValid = validateEmailSyntax(emailConfirmation)
        if (!isEmailValid) {
            setEmailCofirmationError('Informe um email válido')
            setTimeout(() => setEmailCofirmationError(''), 2000)
            setIsLoading(false) 
            return
        }        
            
        const user = await createUserService({ email: email })           
        console.log(user)
        router.push('/login')       
    }

    return {
        isLoading,
        email,
        setEmail,
        emailConfirmation,
        setEmailConfirmation,
        emailConfirmationError,
        handleCreateUser
    }
}

export default useCreateUser
