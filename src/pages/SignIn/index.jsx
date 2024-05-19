import { Container, Form, BackgroundImg } from "./style";
import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import {FiLogIn,FiMail,FiLock} from "react-icons/fi"


export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Gerencie seus links úteis</p>
        <h2>Vem com a gente</h2>

        <Input
          placeholder = "E-mail"
          type = "text"
          icon={FiMail}
         />

        <Input
          placeholder = "Senha"
          type = "password"
          icon={FiLock}
         />

        <Button title={"Entrar"}/>

        <a href="#">Criar conta</a>

      </Form>
      <BackgroundImg/>
      
    </Container>
  )
}