import React from 'react';
import {
	FeatureButtonActive,
	FeatureButtonInnactive,
	SubTitle,
	TwoColumnsInputContainer
} from '../styles';

interface IFormGroup {
	subTitle: string;
	firstFeatTitle: string;
	firstFeatState: number;
	firstFeatSetState: (e: any) => void;
	secondFeatTitle: string;
	secondFeatState: number;
	secondFeatSetState: (e: any) => void;
}

const TwoColumnsFormGroup: React.FC<IFormGroup> = ({
	subTitle,
	firstFeatTitle,
	firstFeatState,
	firstFeatSetState,

	secondFeatTitle,
	secondFeatState,
	secondFeatSetState
}) => {
	return (
		<>
			<SubTitle>{subTitle}</SubTitle>
			<TwoColumnsInputContainer>
				{firstFeatState === 1 ? (
					<FeatureButtonActive onClick={() => firstFeatSetState(0)}>
						{firstFeatTitle}
					</FeatureButtonActive>
				) : (
					<FeatureButtonInnactive
						onClick={() => firstFeatSetState(1)}
					>
						{firstFeatTitle}
					</FeatureButtonInnactive>
				)}

				{secondFeatState === 1 ? (
					<FeatureButtonActive onClick={() => secondFeatSetState(0)}>
						{secondFeatTitle}
					</FeatureButtonActive>
				) : (
					<FeatureButtonInnactive
						onClick={() => secondFeatSetState(1)}
					>
						{secondFeatTitle}
					</FeatureButtonInnactive>
				)}
			</TwoColumnsInputContainer>
		</>
	);
};

export default TwoColumnsFormGroup;
