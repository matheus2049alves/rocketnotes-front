import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export function New(){
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink(){
    setLinks(previous => [...previous, newLink])
    setNewLink("")
    console.log(links)
  }

  function handleRemoveLink(deleted){
    // filter() é uma função de alta ordem que permite criar um novo array contendo 
    // apenas os elementos de um array original que satisfazem uma determinada condição.
    setLinks(previous => previous.filter(link => link != deleted))
  }

  
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
            {
              links.map((link, index) => 
                <NoteItem 
                key={index}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
              )
            }
            <NoteItem isNew 
            placeholder = "Novo Link"
            onChange = {e => setNewLink(e.target.value)}
            onClick={handleAddLink} 
            />
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