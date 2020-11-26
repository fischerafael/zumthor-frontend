import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Home = () => {
    return (
        <PageContainer>

            <NavBar>
                <Link href='/'>
                    <Logo>
                        Zumthor
                    </Logo>
                </Link>
                <Link href='/login'>
                    <ButtonNav>
                        Entrar
                    </ButtonNav>
                </Link>                
            </NavBar>

            <Main>
                <Headline>
                    Zumthor
                </Headline>
                <SubHeadline>
                    Projete atmosferas e experiências arquitetônicas com o auxílio da inteligência artificial.
                </SubHeadline>
                <MainActions>
                    <Link href='/register'>
                        <ButtonExperiment>
                            Experimentar
                        </ButtonExperiment>
                    </Link>
                    <Link href='/about'>
                        <ButtonAbout>
                            Saiba Mais
                        </ButtonAbout>
                    </Link>
                </MainActions>                
            </Main>

        </PageContainer>
    )
}

export default Home

export const PageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;    

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    max-width: 900px;
    width: 90%;
    height: 15vh;
`
export const Logo = styled.p`
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    max-width: 900px;
    width: 90%;
    height: 85vh;
`
export const Headline = styled.h1`
    font-size: 90px;
    margin-bottom: 24px;
`
export const SubHeadline = styled.h2`
    font-size: 24px;
    font-weight: normal;
    text-align: center;

    max-width: 70%;
    margin-bottom: 24px;
`
export const MainActions = styled.div`
    display: flex;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 45px;
    min-width: 90px;

    padding: 0 15px;    

    border: none;
    outline: none;
    cursor: pointer;

    font: inherit;
    font-size: 12px;    

    background: #333;
    color: white;

    transition: 0.5s;

    &:hover {
        color: #333;
        background: #ccc;
        font-weight: bold;
    }
`
export const ButtonNav = styled(Button)``
export const ButtonExperiment = styled(Button)`
    margin-right: 7.5px;
`
export const ButtonAbout = styled(Button)`
    margin-left: 7.5px;
    background: #818181;
`
