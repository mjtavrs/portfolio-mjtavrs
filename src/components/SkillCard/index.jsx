import { Card } from "./styles";

export function SkillCard({ icon, title }) {
    return (
        <Card>
            {icon}
            <h3>{title}</h3>
        </Card>
    )
}