import Link from 'next/link'
import React from 'react'
import { LogoStyle, LogoStyleForm } from './styles'

interface ILogo {
    form?: boolean
}

const Logo: React.FC<ILogo> = ({ form }) => {
    return (
        <Link href='/'>
            {form ? 
                <LogoStyleForm>
                    Zumthor
                </LogoStyleForm> :
                <LogoStyle>
                    Zumthor
                </LogoStyle>
            }            
        </Link>
    )
}

export default Logo
