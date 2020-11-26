import styled from 'styled-components'

export const InputContainer = styled.div`
    position: relative;

    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 0 15px;

    display: flex;
    flex-direction: column; 
    justify-content: center;  

    height: 45px;
    border: solid; 
    border-width: 0.5px;
    border-color: #ccc;
    border-radius: 8px;

    transition: 0.5s;

    &:hover {
        background: #f7f7f7;
    }       
`
export const InputLabel = styled.label`
    font-size: 10px;
`
export const InputField = styled.input`
    outline: none;
    border: none;
    background: transparent;

    font-size: 16px;
    margin-top: 2.5px;  
`
export const InputError = styled.p`
    position: absolute;

    font-size: 10px;
    color: red;

    top: 45px;
`