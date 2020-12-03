import React from 'react'
import { FeatureButtonActive, FeatureButtonInnactive, FourColumnsInputContainer, SubTitle } from '../styles'

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
    thirdFeatSetState: (e: any) => void,

    fourthFeatTitle: string,
    fourthFeatState: number,
    fourthFeatSetState: (e: any) => void
}

const FourColumnsFormGroup: React.FC<IFormGroup> = ({ 
    subTitle,    

    firstFeatTitle,
    firstFeatState,
    firstFeatSetState,

    secondFeatTitle,
    secondFeatState,
    secondFeatSetState,

    thirdFeatTitle,
    thirdFeatState,
    thirdFeatSetState,

    fourthFeatTitle,
    fourthFeatState,
    fourthFeatSetState
}) => {  
    return (
        <>
            <SubTitle>{subTitle}</SubTitle>
            <FourColumnsInputContainer>
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

                {fourthFeatState === 1 ?
                    <FeatureButtonActive
                        onClick={() => fourthFeatSetState(0)}
                    >{fourthFeatTitle}</FeatureButtonActive> :
                    <FeatureButtonInnactive
                        onClick={() => fourthFeatSetState(1)}
                    >{fourthFeatTitle}</FeatureButtonInnactive>
                }

            </FourColumnsInputContainer>
        </>
    )
}

export default FourColumnsFormGroup
