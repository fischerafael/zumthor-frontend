import Link from 'next/link'
import React from 'react'
import { LogoStyle, LogoStyleForm } from './styles'

interface ILogo {
    form?: boolean,
    link?: string
}

const Logo: React.FC<ILogo> = ({ form, link }) => {
    return (
        <Link href={link ? `${link}` : '/'}>
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
