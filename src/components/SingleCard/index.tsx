import { Button } from '../../styles/button';

import React from 'react';
import styled from 'styled-components';

interface ISingleCard {
	userId: string;
	remove: (projectId: string, userId: string) => Promise<void>;
	features: {
		_id: string;
		thumbnail?: string;
		score: number;
		ceiling_high: number;
		ceiling_low: number;
		ceiling_medium: number;
		ceiling_none: number;
		color_black: number;
		color_blue: number;
		color_green: number;
		color_red: number;
		color_white: number;
		furniture_high: number;
		furniture_low: number;
		furniture_medium: number;
		light_high: number;
		light_low: number;
		light_medium: number;
		limit_closed: number;
		limit_open: number;
		limit_semi: number;
		material_artificial: number;
		material_mixed: number;
		material_natural: number;
		operation_day: number;
		operation_night: number;
		population_dense: number;
		population_low: number;
		population_medium: number;
		size_big: number;
		size_medium: number;
		size_small: number;
		tone_grey: number;
		tone_pastel: number;
		tone_vivid: number;
		type_exterior: number;
		type_interior: number;
		type_transition: number;
	};
}

const defaultThumbnail =
	'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg';

const SingleCard: React.FC<ISingleCard> = ({ features, remove, userId }) => {
	return (
		<SingleCardContainerStyle>
			<SingleCardImageStyle
				src={features.thumbnail ? features.thumbnail : defaultThumbnail}
				alt="Imagem"
			/>
			<SingleCardHeaderContainerStyle>
				<div>
					<h2>Atmosfera de </h2>
					<h1>{showAtmosphereStatus(features.score)}</h1>
				</div>
				<h1>{features.score}</h1>
			</SingleCardHeaderContainerStyle>
			<SingleCardBodyContainerStyle>
				{features.ceiling_high === 1 && <span>#forro alto</span>}
				{features.ceiling_low === 1 && <span>#forro baixo</span>}
				{features.ceiling_medium === 1 && <span>#forro médio</span>}
				{features.ceiling_none === 1 && <span>#sem cobertura</span>}

				{features.color_black === 1 && (
					<span>#predominantemente preto</span>
				)}
				{features.color_blue === 1 && (
					<span>#predominantemente azul</span>
				)}
				{features.color_green === 1 && (
					<span>#predominantemente verde</span>
				)}
				{features.color_red === 1 && (
					<span>#predominantemente vermelho</span>
				)}
				{features.color_white === 1 && (
					<span>#predominantemente branco</span>
				)}

				{features.furniture_high === 1 && (
					<span>#muitos móveis / elementos</span>
				)}
				{features.furniture_low === 1 && (
					<span>#pouco ou nenhum móvel / elementos</span>
				)}
				{features.furniture_medium === 1 && (
					<span>#alguns móveis / elementos</span>
				)}

				{features.light_low === 1 && <span>#pouco iluminado</span>}
				{features.light_medium === 1 && (
					<span>#medianamente iluminado</span>
				)}
				{features.light_high === 1 && <span>#bem iluminado</span>}

				{features.limit_closed === 1 && <span>#aberto</span>}
				{features.limit_open === 1 && (
					<span>#semiaberto / semifechado</span>
				)}
				{features.limit_semi === 1 && <span>#fechado</span>}

				{features.material_artificial === 1 && (
					<span>#materiais artificiais</span>
				)}
				{features.material_mixed === 1 && (
					<span>#materiais artificiais e naturais</span>
				)}
				{features.material_natural === 1 && (
					<span>#materiais naturais</span>
				)}

				{features.operation_day === 1 && <span>#utilizado de dia</span>}
				{features.operation_night === 1 && (
					<span>#utilizado de noite</span>
				)}

				{features.population_dense === 1 && (
					<span>#muitas pessoas</span>
				)}
				{features.population_low === 1 && <span>#poucas pessoas</span>}
				{features.population_medium === 1 && (
					<span>#algumas pessoas</span>
				)}

				{features.size_big === 1 && <span>#grande</span>}
				{features.size_medium === 1 && <span>#médio</span>}
				{features.size_small === 1 && <span>#pequeno</span>}

				{features.tone_pastel === 1 && <span>#tons pasteis</span>}
				{features.tone_vivid === 1 && <span>#tons vivos</span>}
				{features.tone_grey === 1 && <span>#tons de cinza</span>}

				{features.type_exterior === 1 && <span>#externo</span>}
				{features.type_interior === 1 && <span>#interno</span>}
				{features.type_transition === 1 && <span>#transição</span>}
			</SingleCardBodyContainerStyle>
			<SingleCardFooterContainer>
				<RemoveButton onClick={() => remove(features._id, userId)}>
					Remover
				</RemoveButton>
			</SingleCardFooterContainer>
		</SingleCardContainerStyle>
	);
};

export default SingleCard;

export function showAtmosphereStatus(score: number) {
	if (score < 2) return 'Perigo';
	if (score < 4.5) return 'Tédio';
	if (score < 5.5) return 'Neutralidade';
	if (score < 8) return 'Conforto';
	return 'Aventura';
}

export const SingleCardContainerStyle = styled.div`
	width: 90%;
`;
export const SingleCardImageStyle = styled.img`
	width: 100%;
	height: 150px;
	object-fit: cover;
	display: flex;
`;
export const SingleCardHeaderContainerStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;

	div {
		display: flex;
		flex-direction: column;

		h2 {
			font-size: 10px;
			font-weight: normal;
		}

		h1 {
			font-size: 24px;
		}
	}
`;
export const SingleCardBodyContainerStyle = styled.div`
	display: flex;

	padding: 10px;
	padding-top: 0px;

	flex-wrap: wrap;
	width: 100%;

	span {
		font-size: 10px;
		background: #f1f1f1;
		margin: 1.5px;
		padding: 5px;
	}
`;
export const SingleCardFooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const RemoveButton = styled(Button)`
	height: 25px;
	background: #a75252;
	width: 100%;

	margin-bottom: 75px;
`;
