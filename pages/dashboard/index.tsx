import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { getUserInfoInLocalStorage } from '../../src/helpers/localStorage'

import Nav from '../../src/components/Nav'
import { PageContainer } from '../../src/styles/page'
import ProjectList from '../../src/components/ProjectSlider'

import { projects } from '../../mock/project'

const Dashboard = () => {
  const router = useRouter()
  useEffect(() => {
    const userData = getUserInfoInLocalStorage('userData')
    if (!userData) { router.push('/') }
  }, [])  

    return (
        <PageContainer>  
          <Nav isDashboard={true}/> 
          <ProjectList 
            link='dashboard/reference'
            title='Referências'
            projects={projects}
          />
          <ProjectList 
            link='dashboard/project'
            title='Projetos'
            projects={projects}
          />
        </PageContainer>
    )
}

export default Dashboard
