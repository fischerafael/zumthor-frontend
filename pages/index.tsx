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
                        <ButtonActions>
                            Experimentar
                        </ButtonActions>
                    </Link>
                    <Link href='/about'>
                        <ButtonActions>
                            Saiba Mais
                        </ButtonActions>
                    </Link>
                </MainActions>                
            </Main>

        </PageContainer>
    )
}

export default Home

export const PageContainer = styled.div``
export const NavBar = styled.div``
export const Logo = styled.p``
export const Main = styled.main``
export const Headline = styled.h1``
export const SubHeadline = styled.h2``
export const MainActions = styled.div``
export const Button = styled.button``
export const ButtonNav = styled(Button)``
export const ButtonActions = styled(Button)``
