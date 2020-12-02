import React from 'react'
import styled from 'styled-components'

import { PageContainer } from '../../../src/styles/page'

const NewReference = () => {
    return (
        <FormPageContainer>
            <FormPageContent>
                Oi
            </FormPageContent>
        </FormPageContainer>
    )
}

export default NewReference

const FormPageContainer = styled(PageContainer)`
    background: #ccc;
`
const FormPageContent = styled.div`
    background: white;
    margin: 25px;
    padding: 25px;

    max-width: 900px;
    width: 100%;

    display: flex;
    flex-direction: column;
`
