import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'

import { ButtonNav, NavBar } from './styles'

const Nav = () => {
    return (
        <NavBar>
            <Logo />
            <Link href='/login'>
                <ButtonNav>
                    Entrar
                </ButtonNav>
            </Link>                
        </NavBar>
    )
}

export default Nav
