import TwoColumnsFormGroup from '../../../src/components/FormGroups/TwoColumns';
import ThreeColumnsFormGroup from '../../../src/components/FormGroups/ThreeColumns';
import FourColumnsFormGroup from '../../../src/components/FormGroups/FourColumns';
import FiveColumnsFormGroup from '../../../src/components/FormGroups/FiveColumns';

import InputFieldGroup from '../../../src/components/InputFieldGroup';
import Logo from '../../../src/components/Logo';

import { PageContainer } from '../../../src/styles/page';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../src/styles/button';

const NewReference: React.FC = () => {
	const [thumbnail, setThumbnail] = useState<number | string>('');
	const [score, setScore] = useState<number | string>(5);

	const [typeInterior, setTypeInterior] = useState<number>(0);
	const [typeTransition, setTypeTransition] = useState<number>(0);
	const [typeExterior, setTypeExterior] = useState<number>(0);

	const [sizeBig, setSizeBig] = useState<number>(0);
	const [sizeMedium, setSizeMedium] = useState<number>(0);
	const [sizeSmall, setSizeSmall] = useState<number>(0);

	const [ceilingLow, setCeilingLow] = useState<number>(0);
	const [ceilingMedium, setCeilingMedium] = useState<number>(0);
	const [ceilingHigh, setCeilingHigh] = useState<number>(0);
	const [ceilingNone, setCeilingNone] = useState<number>(0);

	const [materialNatural, setMaterialNatural] = useState<number>(0);
	const [materialMixed, setMaterialMixed] = useState<number>(0);
	const [materialArtificial, setMaterialArtificial] = useState<number>(0);

	const [colorRed, setColorRed] = useState<number>(0);
	const [colorGreen, setColorGreen] = useState<number>(0);
	const [colorBlue, setColorBlue] = useState<number>(0);
	const [colorWhite, setColorWhite] = useState<number>(0);
	const [colorBlack, setColorBlack] = useState<number>(0);

	const [tonePastel, setTonePastel] = useState<number>(0);
	const [toneGrey, setToneGrey] = useState<number>(0);
	const [toneVivid, setToneVivid] = useState<number>(0);

	const [limitOpen, setLimitOpen] = useState<number>(0);
	const [limitSemi, setLimitSemi] = useState<number>(0);
	const [limitClose, setLimitClose] = useState<number>(0);

	const [populationDense, setPopulationDense] = useState<number>(0);
	const [populationMedium, setPopulationMedium] = useState<number>(0);
	const [populationLow, setPopulationLow] = useState<number>(0);

	const [furnitureHigh, setfurnitureHigh] = useState<number>(0);
	const [furnitureMedium, setfurnitureMedium] = useState<number>(0);
	const [furnitureLow, setfurnitureLow] = useState<number>(0);

	const [operationDay, setOperationDay] = useState<number>(0);
	const [operationNight, setOperationNight] = useState<number>(0);

	const [lightHigh, setlightHigh] = useState<number>(0);
	const [lightMedium, setlightMedium] = useState<number>(0);
	const [lightLow, setlightLow] = useState<number>(0);

	return (
		<FormPageContainer>
			<FormPageContent>
				<FormPageBack>
					<Logo link="../dashboard" />
				</FormPageBack>
				<FormPageImage
					src={
						thumbnail ? (thumbnail as string) : '/default-image.gif'
					}
				/>
				<FormPageInputsContainer>
					<TwoColumnsInputContainer>
						<InputFieldGroup
							inputId="thumbnail"
							inputTitle="Link da Imagem"
							inputType="text"
							state={thumbnail}
							setState={setThumbnail}
						/>
						<InputFieldGroup
							inputId="score"
							inputTitle="Nota"
							inputType="number"
							state={score}
							setState={setScore}
						/>
					</TwoColumnsInputContainer>

					<ThreeColumnsFormGroup
						subTitle="Como você caracteriza este espaço?"
						firstFeatTitle="Espaço Interno"
						firstFeatState={typeInterior}
						firstFeatSetState={setTypeInterior}
						secondFeatTitle="Espaço de Transição"
						secondFeatState={typeTransition}
						secondFeatSetState={setTypeTransition}
						thirdFeatTitle="Espaço Externo"
						thirdFeatState={typeExterior}
						thirdFeatSetState={setTypeExterior}
					/>

					<ThreeColumnsFormGroup
						subTitle="Como você caracteriza o tamanho deste espaço?"
						firstFeatTitle="Espaço Grande"
						firstFeatState={sizeBig}
						firstFeatSetState={setSizeBig}
						secondFeatTitle="Espaço Médio"
						secondFeatState={sizeMedium}
						secondFeatSetState={setSizeMedium}
						thirdFeatTitle="Espaço Pequeno"
						thirdFeatState={sizeSmall}
						thirdFeatSetState={setSizeSmall}
					/>

					<FourColumnsFormGroup
						subTitle="Como você caracteriza o pé-direito do espaço?"
						firstFeatTitle="Pé-direito baixo"
						firstFeatState={ceilingLow}
						firstFeatSetState={setCeilingLow}
						secondFeatTitle="Pé-direito médio"
						secondFeatState={ceilingMedium}
						secondFeatSetState={setCeilingMedium}
						thirdFeatTitle="Pé-direito alto"
						thirdFeatState={ceilingHigh}
						thirdFeatSetState={setCeilingHigh}
						fourthFeatTitle="Aberto"
						fourthFeatState={ceilingNone}
						fourthFeatSetState={setCeilingNone}
					/>

					<ThreeColumnsFormGroup
						subTitle="Como você caracteriza os materiais deste espaço?"
						firstFeatTitle="Naturais"
						firstFeatState={materialNatural}
						firstFeatSetState={setMaterialNatural}
						secondFeatTitle="Misto"
						secondFeatState={materialMixed}
						secondFeatSetState={setMaterialMixed}
						thirdFeatTitle="Artificiais"
						thirdFeatState={materialArtificial}
						thirdFeatSetState={setMaterialArtificial}
					/>

					<FiveColumnsFormGroup
						subTitle="Como você caracteriza as cores predominantes do espaço?"
						firstFeatTitle="Vermelho"
						firstFeatState={colorRed}
						firstFeatSetState={setColorRed}
						secondFeatTitle="Verde"
						secondFeatState={colorGreen}
						secondFeatSetState={setColorGreen}
						thirdFeatTitle="Azul"
						thirdFeatState={colorBlue}
						thirdFeatSetState={setColorBlue}
						fourthFeatTitle="Branco"
						fourthFeatState={colorWhite}
						fourthFeatSetState={setColorWhite}
						fifthFeatTitle="Preto"
						fifthFeatState={colorBlack}
						fifthFeatSetState={setColorBlack}
					/>

					<ThreeColumnsFormGroup
						subTitle="Como você caracteriza os tons das cores deste projeto?"
						firstFeatTitle="Tons vivos"
						firstFeatState={toneVivid}
						firstFeatSetState={setToneVivid}
						secondFeatTitle="Tons pastéis"
						secondFeatState={tonePastel}
						secondFeatSetState={setTonePastel}
						thirdFeatTitle="Escala de cinza"
						thirdFeatState={toneGrey}
						thirdFeatSetState={setToneGrey}
					/>

					<ThreeColumnsFormGroup
						subTitle="Como você caracteriza os limites desse projeto?"
						firstFeatTitle="Aberto"
						firstFeatState={limitOpen}
						firstFeatSetState={setLimitOpen}
						secondFeatTitle="Semi-aberto"
						secondFeatState={limitSemi}
						secondFeatSetState={setLimitSemi}
						thirdFeatTitle="Fechado"
						thirdFeatState={limitClose}
						thirdFeatSetState={setLimitClose}
					/>

					<ThreeColumnsFormGroup
						subTitle="Como você caracteriza a quantidade de pessoas percebida nesse espaço?"
						firstFeatTitle="Muitas"
						firstFeatState={populationDense}
						firstFeatSetState={setPopulationDense}
						secondFeatTitle="Algumas"
						secondFeatState={populationMedium}
						secondFeatSetState={setPopulationMedium}
						thirdFeatTitle="Poucas"
						thirdFeatState={populationLow}
						thirdFeatSetState={setPopulationLow}
					/>

					<ThreeColumnsFormGroup
						subTitle="Como você caracteriza a quantidade móveis/objetos dentro do espaço?"
						firstFeatTitle="Vazio"
						firstFeatState={furnitureLow}
						firstFeatSetState={setfurnitureLow}
						secondFeatTitle="Alguns móveis/objetos"
						secondFeatState={furnitureMedium}
						secondFeatSetState={setfurnitureMedium}
						thirdFeatTitle="Muitos móveis/objetos"
						thirdFeatState={furnitureHigh}
						thirdFeatSetState={setfurnitureHigh}
					/>

					<TwoColumnsFormGroup
						subTitle="O espaço é utilizado durante o:"
						firstFeatTitle="Dia"
						firstFeatState={operationDay}
						firstFeatSetState={setOperationDay}
						secondFeatTitle="Noite"
						secondFeatState={operationNight}
						secondFeatSetState={setOperationNight}
					/>

					<ThreeColumnsFormGroup
						subTitle="Como você caracteriza a iluminação do espaço?"
						firstFeatTitle="Bastante Iluminado"
						firstFeatState={lightHigh}
						firstFeatSetState={setlightHigh}
						secondFeatTitle="Meia Luz"
						secondFeatState={lightMedium}
						secondFeatSetState={setlightMedium}
						thirdFeatTitle="Pouco Iluminado"
						thirdFeatState={lightLow}
						thirdFeatSetState={setlightLow}
					/>
				</FormPageInputsContainer>
				<FormProjectButton>Salvar</FormProjectButton>
			</FormPageContent>
		</FormPageContainer>
	);
};

export default NewReference;

const FormPageContainer = styled(PageContainer)`
	background: #ccc;
`;
const FormPageContent = styled.div`
	background: white;
	margin: 50px;

	max-width: 600px;
	width: 90%;

	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;
`;
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
`;
const FormPageImage = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;
`;
const FormPageInputsContainer = styled.div`
	width: 100%;
	padding: 25px;

	display: flex;
	flex-direction: column;
`;
const TwoColumnsInputContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 15px;
	margin-top: 7.5px;
`;
const FormProjectButton = styled(Button)`
	width: 100%;
`;
