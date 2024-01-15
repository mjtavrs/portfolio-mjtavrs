import { SiStyledcomponents, SiTailwindcss, SiRedux, SiNextdotjs, SiExpress, SiSqlite, SiPostgresql, SiMongodb, SiVite } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass, FaReact, FaGit, FaNodeJs, FaDocker } from "react-icons/fa6";

import { SkillCard } from "../SkillCard";
import { Section } from "../Section";
import { CardWrapper } from "../CardWrapper";
// import { Button } from "../Button";

export function Skills() {
    return (
        <Section
            id={"skills"}
            title={"Minhas skills."}
            description={"Conheça meu leque de habilidades e veja se corresponde ao que você procura."}
        >
            <CardWrapper>
                <SkillCard
                    icon={<IoLogoJavascript />}
                    title={"JavaScript"}
                />
                <SkillCard
                    icon={<FaReact />}
                    title={"React"}
                />
                <SkillCard
                    icon={<SiRedux />}
                    title={"Redux"}
                />
                <SkillCard
                    icon={<SiVite />}
                    title={"Vite"}
                />
                <SkillCard
                    icon={<SiNextdotjs />}
                    title={"Next.js"}
                />
                <SkillCard
                    icon={<FaNodeJs />}
                    title={"Node.js"}
                />
                <SkillCard
                    icon={<SiExpress />}
                    title={"Express.js"}
                />
                <SkillCard
                    icon={<FaSass />}
                    title={"Sass"}
                />
                <SkillCard
                    icon={<SiTailwindcss />}
                    title={"TailwindCSS"}
                />
                <SkillCard
                    icon={<SiStyledcomponents />}
                    title={"CSS-in-JS"}
                />
                <SkillCard
                    icon={<SiSqlite />}
                    title={"SQLite"}
                />
                <SkillCard
                    icon={<SiPostgresql />}
                    title={"PostgreSQL"}
                />
                <SkillCard
                    icon={<SiMongodb />}
                    title={"MongoDB"}
                />
                <SkillCard
                    icon={<FaGit />}
                    title={"Git"}
                />
                <SkillCard
                    icon={<FaDocker />}
                    title={"Docker"}
                />
            </CardWrapper>
        </Section>
    )
}