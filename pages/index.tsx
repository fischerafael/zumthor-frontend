import React from 'react'
import Nav from '../components/Nav'
import MainHome from '../components/MainHome'
import { PageContainer } from '../styles/page'

const Home = () => {
    return (
        <PageContainer>
            <Nav />            
            <MainHome />
        </PageContainer>
    )
}

export default Home
