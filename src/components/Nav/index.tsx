import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'

import { ButtonNav, NavBar } from './styles'

interface INav {
    isDashboard?: boolean
}

const Nav: React.FC<INav> = ({ isDashboard }) => {
    return (
        <NavBar>
            <Logo />
            {isDashboard ?
                <Link href='/'>
                    <ButtonNav>
                        Sair
                    </ButtonNav>
                </Link>
            :
                <Link href='/login'>
                    <ButtonNav>
                        Entrar
                    </ButtonNav>
                </Link>
            }                            
        </NavBar>
    )
}

export default Nav
