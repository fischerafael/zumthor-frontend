import React from 'react'
import styled from 'styled-components'
import { FeatureButton } from '../../../styles/button'
import { FeatureButtonActive, FeatureButtonInnactive, SubTitle, ThreeColumnsInputContainer } from '../styles'

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
