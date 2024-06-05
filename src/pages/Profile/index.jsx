import { Container, Form,Avatar } from "./style";
import {FiArrowLeft, FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi"
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/auth";
import { useState } from "react";


export function Profile(){
  const {user,updateProfile} = useAuth()

  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [password, setPassword] = useState("")
  const [old_password, setOldPassword] = useState("")

  async function handleUpdate(){
    const user = {
      name,
      email,
      password,
      old_password
    }

    await updateProfile({user})
  }

  return (
    <Container>
      <header>
        <Link to={"/"} >
           <FiArrowLeft/>
        </Link>
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
        icon={FiUser}
        value = {name}
        onChange = {e => setName(e.target.value)}
        />
      
        <Input 
        placeholder = "E-mail"
        type = "text"
        icon={FiMail}
        value = {email}
        onChange = {e => setEmail(e.target.value)}
        />
     
        <Input 
        placeholder = "Senha Atual"
        type = "password"
        icon={FiLock}
        onChange = {e => setOldPassword(e.target.value)}
        />
     
        <Input 
        placeholder = "Nova Senha"
        type = "password"
        icon={FiLock}
        onChange = {e => setPassword(e.target.value)}
        />
        
        <Button title={"Salvar"} onClick = {handleUpdate}/>

      </Form>

    
    </Container>

  )
}