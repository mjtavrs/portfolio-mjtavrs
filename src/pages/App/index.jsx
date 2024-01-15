import { Header } from "../../components/Header";
import { Skills } from "../../components/Skills";
import { Contact } from "../../components/Contact";
import { ProjectPortfolio } from "../../components/ProjectPortfolio";
import { Footer } from "../../components/Footer";

export function App() {
    return (
        <>
            <Header />
            <Skills />
            <ProjectPortfolio />
            <Contact />
            <Footer />
        </>
    )
}