import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import InputFieldGroup from '../src/components/InputFieldGroup'
import Logo from '../src/components/Logo'
import { saveLoginDateInLocalStorage } from '../src/helpers/localStorage'

import { validateEmailSyntax } from '../src/helpers/validations'
import loginUserService from '../src/services/api/loginUserService'
import { LoadingMessage } from '../src/styles/loading'

import { FormPageContainer, FormButton, FormContainer, FormFooter, FormLink } from '../src/styles/login'

const Login = () => {
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
                        inputError={error}
                    />                
                    <FormButton
                        onClick={handleLogin}
                    >Entrar</FormButton>
                    <FormFooter>
                        <Link href='/register'>
                            <FormLink>Cadastrar-se</FormLink>
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

export default Login
