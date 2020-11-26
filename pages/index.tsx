import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Home = () => {
    return (
        <PageContainer>

            <NavBar>
                <Link>
                    <Logo>
                        Zumthor
                    </Logo>
                </Link>
                <Link>
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
                    <Link>
                        <ButtonNav>
                            Experimentar
                        </ButtonNav>
                    </Link>
                    <Link>
                        <ButtonNav>
                            Saiba Mais
                        </ButtonNav>
                    </Link>
                </MainActions>                
            </Main>

        </PageContainer>
    )
}

export default Home
