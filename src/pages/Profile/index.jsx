import { Container, Form,Avatar } from "./style";
import {FiArrowLeft, FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi"
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { useAuth } from "../../hook/auth";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import default_user from "../../assets/default_user.svg"


export function Profile(){
  const {user,updateProfile} = useAuth()

 const navigate = useNavigate()
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [password, setPassword] = useState("")
  const [old_password, setOldPassword] = useState("")

   const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: default_user

  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] =useState(null)

 
  async function handleUpdate(){
    const updated = {
      name,
      email,
      password,
      old_password
    }

      Object.assign(user,updated)
     
   

    await updateProfile({user, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack(){
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
           <FiArrowLeft/>
        </button>
      </header>
      <Form>
        
        <Avatar>
          <img 
            src= {avatar}
            alt="foto de usuário" 
          />
          <label
            htmlFor="avatar">
               <FiCamera/>
               <input 
                id="avatar"
                type="file"
                onChange={handleChangeAvatar}
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