import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth, } from "../../hook/auth";
import { api } from "../../services/api";
import default_user from "../../assets/default_user.svg"
export function Header(){

  
  const {signOut, user} = useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: default_user
  return(
    <Container>
      <Profile to = {"/profile"}>
        <img src={avatarURL} 
        alt="Foto de perfil" />

        <div>
          <span>Bem-Vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine/>
    
      </Logout>
    </Container>
  )
}