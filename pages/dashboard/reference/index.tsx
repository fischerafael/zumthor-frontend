import React, { useState } from 'react'
import styled from 'styled-components'

import FourColumnsFormGroup from '../../../src/components/FormGroups/FourColumns'
import ThreeColumnsFormGroup from '../../../src/components/FormGroups/ThreeColumns'
import InputFieldGroup from '../../../src/components/InputFieldGroup'
import Logo from '../../../src/components/Logo'

import { PageContainer } from '../../../src/styles/page'

const NewReference: React.FC = () => {
    const [thumbnail, setThumbnail] = useState<number | string>('')
    const [score, setScore] = useState<number | string>(5)

    const [typeInterior, setTypeInterior] = useState<number>(0)
    const [typeTransition, setTypeTransition] = useState<number>(0)
    const [typeExterior, setTypeExterior] = useState<number>(0)

    const [sizeBig, setSizeBig] = useState<number>(0)
    const [sizeMedium, setSizeMedium] = useState<number>(0)
    const [sizeSmall, setSizeSmall] = useState<number>(0)

    const [ceilingLow, setCeilingLow] = useState<number>(0)
    const [ceilingMedium, setCeilingMedium] = useState<number>(0)
    const [ceilingHigh, setCeilingHigh] = useState<number>(0)
    const [ceilingNone, setCeilingNone] = useState<number>(0)

    return (
        <FormPageContainer>
            <FormPageContent>
                <FormPageBack>
                    <Logo link='../dashboard'/>                    
                </FormPageBack>
                <FormPageImage 
                    src={thumbnail ? 
                        thumbnail as string :
                        '/default-image.gif'
                    } 
                />
                <FormPageInputsContainer>                    
                    <TwoColumnsInputContainer>
                        <InputFieldGroup
                            inputId='thumbnail'
                            inputTitle='Link da Imagem'
                            inputType='text'
                            state={thumbnail}
                            setState={setThumbnail}
                        />
                        <InputFieldGroup
                            inputId='score'
                            inputTitle='Nota'
                            inputType='number'
                            state={score}
                            setState={setScore}
                        />
                    </TwoColumnsInputContainer>                      
                                   
                    <ThreeColumnsFormGroup
                        subTitle='Como você caracteriza este espaço?'                     
                        firstFeatTitle='Espaço Interno'
                        firstFeatState={typeInterior}
                        firstFeatSetState={setTypeInterior}

                        secondFeatTitle='Espaço de Transição'
                        secondFeatState={typeTransition}
                        secondFeatSetState={setTypeTransition}

                        thirdFeatTitle='Espaço Externo'
                        thirdFeatState={typeExterior}
                        thirdFeatSetState={setTypeExterior}
                    />

                    <ThreeColumnsFormGroup
                        subTitle='Como você caracteriza o tamanho deste espaço?'                     
                        firstFeatTitle='Espaço Grande'
                        firstFeatState={sizeBig}
                        firstFeatSetState={setSizeBig}

                        secondFeatTitle='Espaço Médio'
                        secondFeatState={sizeMedium}
                        secondFeatSetState={setSizeMedium}

                        thirdFeatTitle='Espaço Pequeno'
                        thirdFeatState={sizeSmall}
                        thirdFeatSetState={setSizeSmall}
                    />

                    <FourColumnsFormGroup
                        subTitle='Como você caracteriza o pé-direito do espaço?'                     
                        firstFeatTitle='Pé-direito baixo'
                        firstFeatState={ceilingLow}
                        firstFeatSetState={setCeilingLow}

                        secondFeatTitle='Pé-direito médio'
                        secondFeatState={ceilingMedium}
                        secondFeatSetState={setCeilingMedium}

                        thirdFeatTitle='Pé-direito alto'
                        thirdFeatState={ceilingHigh}
                        thirdFeatSetState={setCeilingHigh}

                        fourthFeatTitle='Aberto'
                        fourthFeatState={ceilingNone}
                        fourthFeatSetState={setCeilingNone}
                    />
                             
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

