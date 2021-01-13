import useGetUserInfo from '../../src/hooks/useGetUserInfo';

import Nav from '../../src/components/Nav';
import ProjectList from '../../src/components/ProjectSlider';

import { PageContainer } from '../../src/styles/page';

import styled from 'styled-components';
import { Button } from '../../src/styles/button';

const Dashboard = () => {
	const { projects, references } = useGetUserInfo();

	return (
		<PageContainer>
			<Nav isDashboard={true} />

			<CardContainerStyle>
				<CardContainerHeaderStyle>
					<h2>Referências</h2>
					<CardContainerButtonStyle>
						Adicionar
					</CardContainerButtonStyle>
				</CardContainerHeaderStyle>

				<CardContainerBodyStyle>oi</CardContainerBodyStyle>
			</CardContainerStyle>

			<ProjectList
				link="dashboard/reference"
				title="Referências"
				projects={references}
			/>
			{references.length < 3 ? null : (
				<ProjectList
					link="dashboard/project"
					title="Projetos"
					projects={projects}
				/>
			)}
		</PageContainer>
	);
};

export default Dashboard;

export const CardContainerStyle = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export const CardContainerHeaderStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	margin: 25px 0;
`;
export const CardContainerButtonStyle = styled(Button)`
	color: #ccc;
	background: transparent;

	font-weight: bold;

	&:hover {
		color: white;
		background: #ccc;
	}
`;
export const CardContainerBodyStyle = styled.div``;
