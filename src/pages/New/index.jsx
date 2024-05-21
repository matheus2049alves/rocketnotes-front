import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";

export function New(){
  return(
    <Container>
      <Header/>
      <Form>
        <header>
          <h1>Criar Nota</h1>
          <a href="/">voltar</a>
        </header>
        <Input
          placeholder = "Título"
        />
        <Textarea
          placeholder = "Observações"
        />
      </Form>
    </Container>
  )
}