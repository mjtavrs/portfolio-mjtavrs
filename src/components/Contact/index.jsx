import { Container, ScrollHelper } from "./styles";

export function Contact() {
    return (
        <Container>
            <ScrollHelper id="contact"></ScrollHelper>
            <div>
                <h2>VAMOS CONVERSAR?</h2>
                <p>Estou <span>sempre</span> aberto a novas conversas e novas oportunidades. Basta preencher o formulário ao lado para que a gente possa bater um papo, não se acanha não!</p>
            </div>
            <form>
                <div>
                    <label htmlFor="name">Vamos começar pelo seu nome, que tal?</label>
                    <input type="text" name="name" id="name" placeholder="Escreve o seu nome aqui" required autoComplete="new-password" />
                </div>
                <div>
                    <label htmlFor="email">Tá, agora me diz seu e-mail</label>
                    <input type="email" name="email" id="email" placeholder="Digita o e-mail aqui" required autoComplete="new-password" />
                </div>
                <div>
                    <label htmlFor="telephone">Seu telefone, caso queira</label>
                    <input type="tel" name="telephone" id="telephone" placeholder="Apenas números, tá?" autoComplete="new-password" />
                </div>
                <div>
                    <label htmlFor="telephone">Que tal um resumo do que vamos conversar?</label>
                    <textarea id="message" name="message" rows="5" placeholder="Não se acanha, pode abrir seu coração aqui" autoComplete="new-password"></textarea>
                </div>
                <button>Envie sua mensagem.</button>
            </form>
        </Container>
    )
}