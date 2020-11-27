import Link from 'next/link'
import React from 'react'
import { ButtonAbout, ButtonExperiment, Headline, Main, MainActions, SubHeadline } from './styles'

const MainHome = () => {
    return (
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
    )
}

export default MainHome
