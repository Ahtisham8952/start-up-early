import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { mynewtheme } from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ChakraProvider theme={mynewtheme}>

     
    <App />
    </ChakraProvider>
  </StrictMode>,
)
