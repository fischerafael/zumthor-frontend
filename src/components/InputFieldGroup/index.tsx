import React from 'react'
import { InputContainer, InputError, InputField, InputLabel } from './styles'

interface IInputFieldGroup {
    inputTitle: string,
    inputId: string,
    inputType: string,
    state?: string | number,
    setState?: (e: string | number) => void    
    inputError?: string
}

const InputFieldGroup: React.FC<IInputFieldGroup> = ({ 
    inputTitle, 
    inputId, 
    inputType, 
    inputError,
    state,
    setState
}) => {

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setState(e.currentTarget.value)
    }

    return (
        <InputContainer>
            <InputLabel htmlFor={inputId}>{inputTitle}</InputLabel>
            <InputField 
                type={inputType} 
                id={inputId}
                value={state}
                onChange={handleOnChange}
            />
            {inputError && <InputError>{inputError}</InputError>}            
        </InputContainer>
    )
}

export default InputFieldGroup


