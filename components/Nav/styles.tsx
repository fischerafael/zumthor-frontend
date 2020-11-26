import styled from 'styled-components'
import { Button } from '../../styles/button'

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
export const ButtonNav = styled(Button)``