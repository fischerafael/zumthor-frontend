import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Nav from '../src/components/Nav'
import { getUserInfoInLocalStorage } from '../src/helpers/localStorage'

import { PageContainer } from '../src/styles/page'

const Dashboard = () => {
  const router = useRouter()

  useEffect(() => {
    const userData = getUserInfoInLocalStorage('userData')
    if (!userData) {      
      router.push('/')
    }    
  }, [])  

    return (
        <PageContainer>  
          <Nav isDashboard={true}/>  
        </PageContainer>
    )
}

export default Dashboard
