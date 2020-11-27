import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import InputFieldGroup from '../components/InputFieldGroup'
import Logo from '../components/Logo'
import { validateEmail } from '../helpers/validations'
import createUserService from '../services/api/createUserService'
import { LoadingMessage } from '../styles/loading'
import { FormPageContainer, FormButton, FormContainer, FormFooter, FormLink } from '../styles/login'

const Register = () => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [emailConfirmation, setEmailConfirmation] = useState('')
    const [emailConfirmationError, setEmailCofirmationError] = useState('')

    async function handleCreateUser(e: any) {
        e.preventDefault()
        setIsLoading(true)
        const isEmailValid = validateEmail(email, emailConfirmation)
        if (!isEmailValid) {
            setEmailCofirmationError('Os emails são diferentes')   
            setTimeout(() => setEmailCofirmationError(''), 2000)
            setIsLoading(false)    
        } else {
            const user = await createUserService({ email: email })            
            alert(`User ${user} criado com sucesso`)
            router.push('/login')
        }        
    }   

    return (
        <FormPageContainer>
            {isLoading ? 
                <LoadingMessage>
                    Carregando...
                </LoadingMessage>
            :
                <FormContainer>
                    <Logo form={true}/>                
                    <InputFieldGroup 
                        inputId='email' 
                        inputTitle='Email' 
                        inputType='text'
                        state={email}
                        setState={setEmail}
                    />  
                    <InputFieldGroup 
                        inputId='email-validation' 
                        inputTitle='Confirme seu email' 
                        inputType='text'
                        state={emailConfirmation}
                        setState={setEmailConfirmation}
                        inputError={emailConfirmationError}
                    />              
                    <FormButton onClick={handleCreateUser}>Cadastrar</FormButton>
                    <FormFooter>
                        <Link href='/login'>
                            <FormLink>Já sou cadastrado</FormLink>
                        </Link>
                        <Link href='/'>
                            <FormLink>Voltar</FormLink>
                        </Link>
                    </FormFooter>
                </FormContainer>
            }            
        </FormPageContainer>
    )
}

export default Register