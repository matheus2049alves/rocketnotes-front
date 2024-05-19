import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from "./styles/global"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <GlobalStyle/>
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>
)
