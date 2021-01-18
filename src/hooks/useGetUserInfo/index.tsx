import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getUserInfoInLocalStorage } from '../../helpers/localStorage';
import api from '../../services/api';

const useGetUserInfo = () => {
	const [deletedProject, setDeletedProject] = useState(false);

	useEffect(() => {
		getProfileProjects();
	}, [deletedProject]);

	const router = useRouter();

	const [references, setReferences] = useState([]);
	const [projects, setProjects] = useState([]);

	const [userId, setUserId] = useState('');

	async function getProfileProjects() {
		const userData = getUserInfoInLocalStorage('userData');

		if (!userData) {
			router.push('/');
			return;
		}

		const { _id } = userData;

		setUserId(_id);

		try {
			const projects = await api.get(`profiles/${_id}`);

			console.log(projects);

			if (projects.status === 404) {
			}

			const profileReferences = filterReferences(projects);
			const profileProjects = filterProjects(projects);

			setReferences(profileReferences);
			setProjects(profileProjects);
		} catch (err) {
			console.log(err);
		}
	}

	return { references, projects, userId, deletedProject, setDeletedProject };
};

export default useGetUserInfo;

function filterReferences(profileInfo: { data: any[]; status: number }) {
	const data: { category: 'reference' | 'project' }[] = profileInfo.data;

	const references = data.filter(
		(project) => project.category === 'reference'
	);
	return references;
}

function filterProjects(profileInfo: { data: any[]; status: number }) {
	const data: { category: 'reference' | 'project' }[] = profileInfo.data;

	const projects = data.filter((project) => project.category === 'project');
	return projects;
}
