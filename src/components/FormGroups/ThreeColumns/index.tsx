import React from 'react'
import styled from 'styled-components'
import { FeatureButton } from '../../../styles/button'

interface IFormGroup {
    subTitle: string,    
    firstFeatTitle: string,
    firstFeatState: number,
    firstFeatSetState: (e: any) => void,
    secondFeatTitle: string,
    secondFeatState: number,
    secondFeatSetState: (e: any) => void,
    thirdFeatTitle: string,
    thirdFeatState: number,
    thirdFeatSetState: (e: any) => void
}

const ThreeColumnsFormGroup: React.FC<IFormGroup> = ({ 
    subTitle,    
    firstFeatTitle,
    firstFeatState,
    firstFeatSetState,

    secondFeatTitle,
    secondFeatState,
    secondFeatSetState,

    thirdFeatTitle,
    thirdFeatState,
    thirdFeatSetState
}) => {  
    return (
        <>
            <SubTitle>{subTitle}</SubTitle>
            <ThreeColumnsInputContainer>
                {firstFeatState === 1 ?
                    <FeatureButtonActive
                        onClick={() => firstFeatSetState(0)}
                    >{firstFeatTitle}</FeatureButtonActive> :
                    <FeatureButtonInnactive
                        onClick={() => firstFeatSetState(1)}
                    >{firstFeatTitle}</FeatureButtonInnactive>
                }

                {secondFeatState === 1 ?
                    <FeatureButtonActive
                        onClick={() => secondFeatSetState(0)}
                    >{secondFeatTitle}</FeatureButtonActive> :
                    <FeatureButtonInnactive
                        onClick={() => secondFeatSetState(1)}
                    >{secondFeatTitle}</FeatureButtonInnactive>
                }
                
                {thirdFeatState === 1 ?
                    <FeatureButtonActive
                        onClick={() => thirdFeatSetState(0)}
                    >{thirdFeatTitle}</FeatureButtonActive> :
                    <FeatureButtonInnactive
                        onClick={() => thirdFeatSetState(1)}
                    >{thirdFeatTitle}</FeatureButtonInnactive>
                }          

            </ThreeColumnsInputContainer>
        </>
    )
}

export default ThreeColumnsFormGroup

const ThreeColumnsInputContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  
    grid-gap: 15px;  
    margin-top: 7.5px;
`
const SubTitle = styled.h2`
    margin: 15px;
    text-align: center;

    font-size: 14px;
`
const FeatureButtonActive = styled(FeatureButton)`  
    background: #333;
    color: white;    
`
const FeatureButtonInnactive = styled(FeatureButton)`   
    color: white;
    background: #ccc;    
`