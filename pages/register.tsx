import Link from 'next/link'
import InputFieldGroup from '../src/components/InputFieldGroup'

import Logo from '../src/components/Logo'
import useCreateUser from '../src/hooks/useCreateUser'

import { LoadingMessage } from '../src/styles/loading'
import { FormPageContainer, FormButton, FormContainer, FormFooter, FormLink } from '../src/styles/login'

const Register = () => {   

    const { 
        isLoading, 
        email, 
        setEmail, 
        emailConfirmation,
        setEmailConfirmation,
        emailConfirmationError,
        handleCreateUser
    } = useCreateUser()

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