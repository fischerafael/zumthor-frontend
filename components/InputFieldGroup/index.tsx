import React from 'react'
import { InputContainer, InputError, InputField, InputLabel } from './styles'

interface IInputFieldGroup {
    inputTitle: string,
    inputId: string,
    inputType: string,
    inputError?: boolean
}

const InputFieldGroup: React.FC<IInputFieldGroup> = ({ inputTitle, inputId, inputType, inputError }) => {
    return (
        <InputContainer>
            <InputLabel htmlFor={inputId}>{inputTitle}</InputLabel>
            <InputField type={inputType} id={inputId}/>
            {inputError && <InputError>Favor preencher campo</InputError>}            
        </InputContainer>
    )
}

export default InputFieldGroup
