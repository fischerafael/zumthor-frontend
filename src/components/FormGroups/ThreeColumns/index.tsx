import React from 'react'
import styled from 'styled-components'
import FeatureButton from '../../FeatureButton'

interface IFormGroup {
    subTitle: string,
    firstFeatTitle: string,
    secondFeatTitle: string,
    thirdFeatTitle: string
}

const ThreeColumnsFormGroup: React.FC<IFormGroup> = ({ 
    subTitle,
    firstFeatTitle,
    secondFeatTitle,
    thirdFeatTitle
}) => {
    return (
        <>
        <SubTitle>{subTitle}</SubTitle>
            <ThreeColumnsInputContainer>                        
                <FeatureButton isSet={1}>
                    {firstFeatTitle}
                </FeatureButton>                         
                <FeatureButton isSet={1}>
                    {secondFeatTitle}
                </FeatureButton>
                <FeatureButton isSet={0}>
                    {thirdFeatTitle}
                </FeatureButton>                         
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
