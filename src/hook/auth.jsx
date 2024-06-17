import {createContext, useContext, useEffect} from "react"
import { useState } from "react"
import { api } from "../services/api"



const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})

  
  async function signIn({email, password}){

    try {
      const response = await  api.post("/sessions", {email, password})
      const {user, token} = response.data
      setData({user, token})

      localStorage.setItem("@rocktenots: user", JSON.stringify(user))
      localStorage.setItem("@rocktenots: token", token)

      api.defaults.headers.common['authorization'] = `Bearer ${token}`

    console.log(user, token)
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possível entrar")
      }
    }
    
  }

  function signOut(){
    localStorage.removeItem("@rocktenots: user")
    localStorage.removeItem("@rocktenots: token")

    setData({})
  }

  async function updateProfile({user, avatarFile}){
    if (avatarFile) {
      const fileUploadform = new FormData()
      fileUploadform.append("avatar", avatarFile)

      const response = await api.patch("/users/avatar", fileUploadform)
      user.avatar = response.data.avatar

      }
    try{
      await api.put("/users", user)
      localStorage.setItem("@rocktenots: user", JSON.stringify(user))
      setData({user, token : data.token})
      alert("Perfil atualizado")
    }catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else {
        alert("Não foi possível atualizar o perfil")
      }
    }
  }
  useEffect(() => {
    const user = localStorage.getItem("@rocktenots: user")
    const token = localStorage.getItem("@rocktenots: token")

    if (token && user){
      api.defaults.headers.common['authorization'] = `Bearer ${token}`
      setData({
        token,
        user : JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{signIn, user : data.user, signOut, updateProfile}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth}