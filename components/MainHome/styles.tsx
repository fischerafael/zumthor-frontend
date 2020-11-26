import styled from 'styled-components'
import { Button } from '../../styles/button'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    max-width: 900px;
    width: 90%;
    height: 85vh;
`
export const Headline = styled.h1`
    font-size: 90px;
    margin-bottom: 24px;

    @media (max-width: 500px) {
        font-size: 72px;
    }
`
export const SubHeadline = styled.h2`
    font-size: 24px;
    font-weight: normal;
    text-align: center;

    max-width: 70%;
    margin-bottom: 24px;

    @media (max-width: 500px) {
        font-size: 14px;
        margin-bottom: 48px;
    }
`
export const MainActions = styled.div`
    display: flex;
`
export const ButtonExperiment = styled(Button)`
    margin-right: 7.5px;
`
export const ButtonAbout = styled(Button)`
    margin-left: 7.5px;
    background: #818181;
`