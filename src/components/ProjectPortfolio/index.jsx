import { Section } from "../Section";
import { CardWrapper } from "../CardWrapper";
import { ProjectCard } from "../ProjectCard";

export function ProjectPortfolio() {
    return (
        <Section
            id={"projects"}
            title={"Meus projetos."}
            description={"Abaixo você poderá ver os projetos que desenvolvi na minha jornada de tecnologia."}
        >
            <CardWrapper>
                <ProjectCard
                    title={"Nome do projeto"}
                    description={"Aqui virá a descrição dos projetos que serão adicionados."}
                    deployUrl={"#"}
                    repositoryUrl={""}
                    className={"isPrivate"}
                    nonPrivateRepositoryButtonTitle={"Repositório privado"}
                />
                <ProjectCard
                    title={"Nome do projeto"}
                    description={"Aqui virá a descrição dos projetos que serão adicionados."}
                    deployUrl={"#"}
                    repositoryUrl={""}
                    className={""}
                />
                <ProjectCard
                    title={"Nome do projeto"}
                    description={"Aqui virá a descrição dos projetos que serão adicionados."}
                    deployUrl={"#"}
                    repositoryUrl={""}
                    className={""}
                />
                <ProjectCard
                    title={"Nome do projeto"}
                    description={"Aqui virá a descrição dos projetos que serão adicionados."}
                    deployUrl={"#"}
                    repositoryUrl={""}
                    className={""}
                />
                <ProjectCard
                    title={"Nome do projeto"}
                    description={"Aqui virá a descrição dos projetos que serão adicionados."}
                    deployUrl={"#"}
                    repositoryUrl={""}
                    className={""}
                />
                <ProjectCard
                    title={"Nome do projeto"}
                    description={"Aqui virá a descrição dos projetos que serão adicionados."}
                    deployUrl={"#"}
                    repositoryUrl={""}
                    className={""}
                />
            </CardWrapper>
        </Section>
    )
}