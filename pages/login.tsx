import Link from 'next/link'
import React from 'react'
import InputFieldGroup from '../components/InputFieldGroup'
import Logo from '../components/Logo'
import { FormPageContainer, FormButton, FormContainer, FormFooter, FormLink } from '../styles/login'

const Login = () => {
    return (
        <FormPageContainer>
            <FormContainer>
                <Logo form={true}/>
                <InputFieldGroup inputId='email' inputTitle='Email' inputType='text'/>                
                <FormButton>Entrar</FormButton>
                <FormFooter>
                    <Link href='/register'>
                        <FormLink>Cadastrar-se</FormLink>
                    </Link>
                    <Link href='/'>
                        <FormLink>Voltar</FormLink>
                    </Link>
                </FormFooter>
            </FormContainer>
        </FormPageContainer>
    )
}

export default Login
