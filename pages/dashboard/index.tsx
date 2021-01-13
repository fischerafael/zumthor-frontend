import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getUserInfoInLocalStorage } from '../../src/helpers/localStorage';

import Nav from '../../src/components/Nav';
import { PageContainer } from '../../src/styles/page';
import ProjectList from '../../src/components/ProjectSlider';

import api from '../../src/services/api';

const Dashboard = () => {
	const router = useRouter();

	const [userId, setUserId] = useState('');

	useEffect(() => {
		const userData = getUserInfoInLocalStorage('userData');
		const { _id } = userData;
		setUserId(_id);
		if (!userData) {
			router.push('/');
		}
	}, []);

	const [references, setReferences] = useState([]);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProfileProjects();
	}, []);

	async function getProfileProjects() {
		const projects: { data: { category: string }[] } = await api.get(
			`profiles/${userId}`
		);
		const { data } = projects;
		setReferences(
			data.filter((project) => project.category === 'reference')
		);
		setProjects(data.filter((project) => project.category === 'project'));
	}

	return (
		<PageContainer>
			<Nav isDashboard={true} />
			<ProjectList
				link="dashboard/reference"
				title="Referências"
				projects={references}
			/>
			<ProjectList
				link="dashboard/project"
				title="Projetos"
				projects={projects}
			/>
		</PageContainer>
	);
};

export default Dashboard;
