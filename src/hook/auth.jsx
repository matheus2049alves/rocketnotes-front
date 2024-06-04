import {createContext, useContext, useEffect} from "react"
import { useState } from "react"
import { api } from "../services/api"
import { json } from "react-router-dom"
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
  useEffect(() => {
    const user = localStorage.getItem("@g4construtora : sucesso")
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
    <AuthContext.Provider value={{signIn, user : data.user, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth}