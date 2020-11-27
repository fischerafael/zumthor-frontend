import Link from 'next/link'

import InputFieldGroup from '../src/components/InputFieldGroup'
import Logo from '../src/components/Logo'
import useCreateSession from '../src/hooks/useCreateSession'

import { LoadingMessage } from '../src/styles/loading'
import { FormPageContainer, FormButton, FormContainer, FormFooter } from '../src/styles/login'
import { FormLink } from '../src/styles/link'

const Login = () => {
     
    const { isLoading, email, setEmail, error, handleLogin } = useCreateSession()

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
