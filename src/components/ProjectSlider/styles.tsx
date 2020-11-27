import styled from 'styled-components'

import Slider from 'react-slick'
import { Button } from '../../styles/button'
import { FormLink } from '../../styles/link'

export const ProjectContainer = styled.div`
    max-width: 900px;
    width: 90%;

    padding: 15px 0;
`
export const ProjectContainerHeader = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;   
    justify-content: space-between;
    padding-right: 7.5px; 
`
export const ProjectTitle = styled.h2`
    padding-left: 7.5px;
`
export const CreateNewProject = styled(Button)`
    margin-left: 15px;
    background: transparent;
    color: #333;  
    font-weight: bold;    
`
export const ProjectSlider = styled(Slider)`    
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const CardContainer = styled.div`
    padding: 7.5px;
    outline: none;    
`
export const CardContent = styled.div` 
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    width: 100%;
    height: 100%;

    cursor: pointer;
    
    transition: 0.5s;

    &:hover {
        background: #ccc;
    }
`
export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: brightness(40%); 
    
    &:hover {
        filter: brightness(90%);
    }   
`
export const CardScore = styled.h3`
    position: absolute;
    top: 50px;
    font-size: 72px;
    color: white;
`
export const CardInfo = styled.div`
    height: 45px;
    width: 100%;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const CardLink = styled(FormLink)`
    font-size: 16px;
`