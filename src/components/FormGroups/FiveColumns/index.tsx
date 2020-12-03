import React from 'react'
import { FeatureButtonActive, FeatureButtonInnactive, FiveColumnsInputContainer, SubTitle } from '../styles'

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

    fifthFeatTitle: string,
    fifthFeatState: number,
    fifthFeatSetState: (e: any) => void
}

const FiveColumnsFormGroup: React.FC<IFormGroup> = ({ 
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
    fourthFeatSetState,

    fifthFeatTitle,
    fifthFeatState,
    fifthFeatSetState
}) => {  
    return (
        <>
            <SubTitle>{subTitle}</SubTitle>
            <FiveColumnsInputContainer>
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

                {fifthFeatState === 1 ?
                    <FeatureButtonActive
                        onClick={() => fifthFeatSetState(0)}
                    >{fifthFeatTitle}</FeatureButtonActive> :
                    <FeatureButtonInnactive
                        onClick={() => fifthFeatSetState(1)}
                    >{fifthFeatTitle}</FeatureButtonInnactive>
                }

            </FiveColumnsInputContainer>
        </>
    )
}

export default FiveColumnsFormGroup
