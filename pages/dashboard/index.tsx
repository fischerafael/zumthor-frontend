import useGetUserInfo from '../../src/hooks/useGetUserInfo';

import Nav from '../../src/components/Nav';
import ProjectList from '../../src/components/ProjectSlider';

import { PageContainer } from '../../src/styles/page';

const Dashboard = () => {
	const { projects, references } = useGetUserInfo();

	return (
		<PageContainer>
			<Nav isDashboard={true} />
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
