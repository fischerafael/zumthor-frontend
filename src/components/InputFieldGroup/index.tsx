import React from 'react'
import { InputContainer, InputError, InputField, InputLabel } from './styles'

interface IInputFieldGroup {
    inputTitle: string,
    inputId: string,
    inputType: string,
    state?: string,
    setState?: (e: string) => void
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
    return (
        <InputContainer>
            <InputLabel htmlFor={inputId}>{inputTitle}</InputLabel>
            <InputField 
                type={inputType} 
                id={inputId}
                value={state}
                onChange={e => setState(e.target.value)}
            />
            {inputError && <InputError>{inputError}</InputError>}            
        </InputContainer>
    )
}

export default InputFieldGroup
