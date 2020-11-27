import styled from 'styled-components'
import { Button } from './button'
import { PageContainer } from './page'

export const FormPageContainer = styled(PageContainer)`
    justify-content: center;
`
export const FormContainer = styled.form`    
    min-height: 50vh;
    width: 300px;
    padding: 18px;    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FormButton = styled(Button)`
    margin-top: 15px;
    width: 100%;
`
export const FormFooter = styled.div`    
    width: 100%;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FormLink = styled.a`
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;

    transition: 0.5s;

    &:hover {
        color: #ccc;
    }
`