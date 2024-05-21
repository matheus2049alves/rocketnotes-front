import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export function New(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to={"/"}/>
          </header>
          <Input
            placeholder = "Título"
          />
          <Textarea
            placeholder = "Observações"
          />
          
          <Section title={"links úteis"}>
            <NoteItem value = "https://youtube.com"/>
            <NoteItem isNew placeholder = "Novo Link" />
          </Section>
          
            <Section title={"Marcadores"}>
            <div className="tags">
              <NoteItem value = "React"/>
              <NoteItem isNew placeholder = "Nova Tag" />
            </div>
          </Section>
        
          <Button title={"Salvar"}/>
        </Form>
      </main>
    </Container>
  )
}