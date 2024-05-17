
import {Container, Links,Content} from "./style"
import { Button } from "../../components/button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"


export function Details() {
  
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title={"Excluir nota"} />
          <h1>titulo</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Excepturi ipsam tempora repellat cum magnam maxime commodi 
             aut itaque dolorem? Iure alias distinctio quos obcaecati nobis 
             consectetur earum officia consequuntur sunt.</p>
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
        </Content>
          
      </main>
    
    </Container>
  )
}


