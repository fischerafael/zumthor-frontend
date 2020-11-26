import Link from 'next/link'
import React from 'react'

import { ButtonNav, Logo, NavBar } from './styles'

const Nav = () => {
    return (
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
    )
}

export default Nav
