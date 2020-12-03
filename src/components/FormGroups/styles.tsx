import styled from 'styled-components'
import { FeatureButton } from '../../styles/button'

const ColumnsInputContainer = styled.div`
    width: 100%;
    display: grid;     
    grid-gap: 15px;  
    margin-top: 7.5px;
`
export const ThreeColumnsInputContainer = styled(ColumnsInputContainer)`
    grid-template-columns: 1fr 1fr 1fr;
`
export const FourColumnsInputContainer = styled(ColumnsInputContainer)`
    grid-template-columns: 1fr 1fr 1fr 1fr;  
`
export const FiveColumnsInputContainer = styled(ColumnsInputContainer)`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;  
`

export const SubTitle = styled.h2`
    margin: 15px;
    text-align: center;

    font-size: 14px;
`
export const FeatureButtonActive = styled(FeatureButton)`  
    background: #333;
    color: white;    
`
export const FeatureButtonInnactive = styled(FeatureButton)`   
    color: white;
    background: #ccc;    
`