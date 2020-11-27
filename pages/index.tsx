import React from 'react'
import Nav from '../src/components/Nav'
import MainHome from '../src/components/MainHome'
import { PageContainer } from '../src/styles/page'

const Home = () => {
    return (
        <PageContainer>
            <Nav />            
            <MainHome />
        </PageContainer>
    )
}

export default Home
