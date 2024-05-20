import { Container, Form,Avatar } from "./style";
import {FiArrowLeft, FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi"
import { Input } from "../../components/Input";
import { Button } from "../../components/button";


export function Profile(){
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft/>
        </a>
      </header>
      <Form>
        
        <Avatar>
          <img 
            src="https://github.com/matheus2049alves.png" 
            alt="foto de usuário" 
          />
          <label
            htmlFor="avatar">
               <FiCamera/>
               <input 
                id="avatar"
                type="file"
            />
           </label>
         
          
        </Avatar>
        
        <Input 
        placeholder = "Nome"
        type = "text"
        icon={FiUser}/>
      
        <Input 
        placeholder = "E-mail"
        type = "text"
        icon={FiMail}/>
     
        <Input 
        placeholder = "Senha Atual"
        type = "password"
        icon={FiLock}/>
     
        <Input 
        placeholder = "Nova Senha"
        type = "password"
        icon={FiLock}/>
        
        <Button title={"Salvar"}/>

      </Form>

    
    </Container>

  )
}