import { sliderSettings } from './sliderSettings'
import { CardContainer, CardContent, CardImage, CardInfo, CardLink, CardScore, CreateNewProject, ProjectContainer, ProjectContainerHeader, ProjectSlider, ProjectTitle } from './styles'

interface IProjectArray {
    title: string,
    projects?: IProject[]
}

const ProjectList: React.FC<IProjectArray> = ({ projects, title }) => {
    return (
        <ProjectContainer>
            <ProjectContainerHeader>
                <ProjectTitle>
                    {title}
                </ProjectTitle>
                <CreateNewProject>
                    Adicionar
                </CreateNewProject>
            </ProjectContainerHeader>            
            <ProjectSlider {...sliderSettings}>
                
                {projects && projects.map(project => (
                    <CardContainer>
                        <CardContent>
                            <CardImage src={project.thumbnail}/>
                            <CardScore>
                                {project.score}
                            </CardScore>
                            <CardInfo>                                
                                <CardLink>
                                    Ver detalhes
                                </CardLink>
                            </CardInfo>
                        </CardContent>
                    </CardContainer> 
                ))}                                   
            </ProjectSlider>
        </ProjectContainer>
    )
}

export default ProjectList


