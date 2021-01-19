import useGetUserInfo from '../../src/hooks/useGetUserInfo';

import Nav from '../../src/components/Nav';
import ProjectList from '../../src/components/ProjectSlider';

import { PageContainer } from '../../src/styles/page';

import styled from 'styled-components';
import { Button } from '../../src/styles/button';

import SingleCard from '../../src/components/SingleCard';
import Link from 'next/link';
import api from '../../src/services/api';
import { useEffect, useState } from 'react';

const Dashboard = () => {
	const {
		projects,
		references,
		userId,
		deletedProject,
		setDeletedProject
	} = useGetUserInfo();

	async function deleteProductHandler(projectId: string, userId: string) {
		try {
			await api.delete(
				`/users/${userId}/referencesprojects/${projectId}`,
				{
					headers: {
						auth_id: userId
					}
				}
			);
			setDeletedProject(!deletedProject);
			alert(
				`O projeto de ID ${projectId}, pertencente ao usuário de ID ${userId}, foi removido`
			);
		} catch (err) {
			console.log(err);
			alert('Erro ao remover projeto');
		}
	}

	return (
		<PageContainer>
			<Nav isDashboard={true} />

			<CardContainerStyle>
				<CardContainerHeaderStyle>
					<h2>Referências</h2>
					<Link href="dashboard/reference">
						<CardContainerButtonStyle>
							Adicionar (cadastre ao menos 5 referências)
						</CardContainerButtonStyle>
					</Link>
				</CardContainerHeaderStyle>

				<CardContainerBodyStyle>
					{references.map((reference) => (
						<SingleCard
							key={reference._id}
							features={reference}
							remove={deleteProductHandler}
							userId={userId}
						/>
					))}
				</CardContainerBodyStyle>
			</CardContainerStyle>

			{references.length < 5 ? null : (
				<CardContainerStyle>
					<CardContainerHeaderStyle>
						<h2>Projetos</h2>
						<Link href="dashboard/project">
							<CardContainerButtonStyle>
								Adicionar Projeto
							</CardContainerButtonStyle>
						</Link>
					</CardContainerHeaderStyle>

					<CardContainerBodyStyle>
						{projects.map((project) => (
							<SingleCard
								key={project._id}
								features={project}
								remove={deleteProductHandler}
								userId={userId}
							/>
						))}
					</CardContainerBodyStyle>
				</CardContainerStyle>
			)}
		</PageContainer>
	);
};

export default Dashboard;

export const CardContainerBodyStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	max-width: 900px;
	width: 100%;

	@media (max-width: 720px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const CardContainerStyle = styled.div`
	max-width: 900px;
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
