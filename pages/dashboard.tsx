import React from 'react'
import Nav from '../src/components/Nav'

import { PageContainer } from '../src/styles/page'

const Dashboard = () => {
    return (
        <PageContainer>  
          <Nav isDashboard={true}/>  
        </PageContainer>
    )
}

export default Dashboard
