import { Card } from "./styles";

import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

export function ProjectCard({ imageUrl, title, description, deployUrl = "#", repositoryUrl = "", nonPrivateRepositoryButtonTitle = "", className }) {

    return (
        <Card>
            <img src="https://placehold.co/300x400" alt="Cover do projeto" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <a href={deployUrl} target="_blank" >
                        <TbWorldWww />
                        Acessar
                    </a>
                    <a href={repositoryUrl} target="_blank" className={className} title={nonPrivateRepositoryButtonTitle}>
                        <FaGithub />
                        Repositório
                    </a>
                </div>
            </div>
        </Card>
    )
}