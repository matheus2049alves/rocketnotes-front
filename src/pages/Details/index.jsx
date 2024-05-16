
import {Container, Links} from "./style"
import { Button } from "../../components/button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"



export function Details() {
  
  return (
    <Container>
      <Header/>
      <Section title={"Links úteis"}>
      <Links>
          <li>
            <a href="https://www.youtube.com/" target="_blank">youtube</a>
          </li>
      </Links>
      </Section>
      <Section title={"Marcadores"}>
        <Tag title={"Express"}/>
        <Tag title={"Node js"}/>
     
      </Section>
      

      <Button title="Salvar"/>
    </Container>
  )
}


