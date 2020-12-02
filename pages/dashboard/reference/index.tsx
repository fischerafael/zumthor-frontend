import React from 'react'
import styled from 'styled-components'
import FeatureButton from '../../../src/components/FeatureButton'
import InputFieldGroup from '../../../src/components/InputFieldGroup'
import Logo from '../../../src/components/Logo'

import { PageContainer } from '../../../src/styles/page'

interface IReferenceProps {
    thumbnail: string
}

const NewReference: React.FC<IReferenceProps> = ({ thumbnail }) => {
    return (
        <FormPageContainer>
            <FormPageContent>
                <FormPageBack>
                    <Logo link='../dashboard'/>                    
                </FormPageBack>
                <FormPageImage 
                    src={thumbnail ? 
                        thumbnail :
                        '/default-image.gif'
                    } 
                />
                <FormPageInputsContainer>                    
                    <TwoColumnsInputContainer>
                        <InputFieldGroup
                            inputId='thumbnail'
                            inputTitle='Link da Imagem'
                            inputType='text'
                        />
                        <InputFieldGroup
                            inputId='score'
                            inputTitle='Nota'
                            inputType='number'
                        />
                    </TwoColumnsInputContainer>  
                    
                    <SubTitle>Como você caracteriza este espaço?</SubTitle>                   
                    <ThreeColumnsInputContainer>                        
                        <FeatureButton isSet={1}>
                            Espaço Interno
                        </FeatureButton>                         
                        <FeatureButton isSet={1}>
                            Espaço de Transição
                        </FeatureButton>
                        <FeatureButton isSet={0}>
                            Espaço Externo
                        </FeatureButton>                         
                    </ThreeColumnsInputContainer>

                    <SubTitle>Como você caracteriza o tamanho deste espaço?</SubTitle>                   
                    <ThreeColumnsInputContainer>                        
                        <FeatureButton isSet={1}>
                            Espaço Pequeno
                        </FeatureButton>                         
                        <FeatureButton isSet={1}>
                            Espaço Médio
                        </FeatureButton>
                        <FeatureButton isSet={0}>
                            Espaço Grande
                        </FeatureButton>                         
                    </ThreeColumnsInputContainer>

                    <SubTitle>Como você caracteriza a cobertura deste espaço?</SubTitle>                   
                    <FourColumnsInputContainer>  
                        <FeatureButton isSet={1}>
                            Pé-direito baixo
                        </FeatureButton>                      
                        <FeatureButton isSet={1}>
                            Pé-direito médio
                        </FeatureButton>                         
                        <FeatureButton isSet={1}>
                            Pé-direito alto
                        </FeatureButton>
                        <FeatureButton isSet={0}>
                            Sem cobertura
                        </FeatureButton>                         
                    </FourColumnsInputContainer>                  
                </FormPageInputsContainer>                
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
    margin: 50px;
    
    max-width: 600px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
`
const FormPageBack = styled.div`
    background: white;
    height: 30px;
    position: absolute;
    top: -15px;
    right: 15px;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: center;
`
const FormPageImage = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`
const FormPageInputsContainer = styled.div`
    width: 100%;
    padding: 25px;

    display: flex;
    flex-direction: column;
`
const TwoColumnsInputContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;  
    grid-gap: 15px;  
    margin-top: 7.5px;
`
const ThreeColumnsInputContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  
    grid-gap: 15px;  
    margin-top: 7.5px;
`
const FourColumnsInputContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;  
    grid-gap: 15px;  
    margin-top: 7.5px;
`
const SubTitle = styled.h2`
    margin: 15px;
    text-align: center;

    font-size: 14px;
`

