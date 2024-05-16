
import {Container, Links} from "./style"
import { Button } from "../../components/button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"



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

      <Button title="Salvar"/>
    </Container>
  )
}


