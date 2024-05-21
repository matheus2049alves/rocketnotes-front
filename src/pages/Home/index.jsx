import {Container, Brand, Menu,Search, Content, NewNote} from "./style"
import {Header} from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { FiPlus } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";


export function Home(){
  return(
    <Container>
      <Brand><h1>Rocketnotes</h1></Brand>
      <Header></Header>

      <Menu>
        <li><ButtonText title={"Todos"} isActive/></li>
        <li><ButtonText title={"React"}/></li>
       <li><ButtonText title={"Node"}/></li>
        <li><ButtonText title={"Front"}/></li>
      </Menu>

      <Search>
         <Input placeholder = {"Pesquisar pelo título"}/>
      </Search>
      
      <Content>
        <Section title={"Minhas Notas"}>
          <Note 
          data={{title : "react", tags : [{
            id : "2", name : "Programação"
          }]
        }
        }
          />
        </Section>
      </Content>

      <NewNote to={"/new"}>
        <FiPlus/>
        Nova Nota 
      </NewNote>
    </Container>
  )
}

