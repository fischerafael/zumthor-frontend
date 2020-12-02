import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/button'

interface IFeatureButton {
    children: any,
    isSet: number
}

const FeatureButton: React.FC<IFeatureButton> = ({ children, isSet }) => {

    if (isSet === 1) return (
        <FeatureButtonStyleActive>
            {children}
        </FeatureButtonStyleActive>
    )

    return (
        <FeatureButtonStyleInactive>
            {children}
        </FeatureButtonStyleInactive>
    )
}

export default FeatureButton

const FeatureButtonStyleActive = styled(Button)`
    background: #333;
    color: white;
    &:hover {
        background: #333;
        color:white;
        font-weight: inherit;
    }
`
const FeatureButtonStyleInactive = styled(Button)`
    background: #ccc;
    color: #333;
    &:hover {
        background: #ccc;
        color: #333;
        font-weight: inherit;
    }
`