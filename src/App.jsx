import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'


function App() {
const [data, setData] = useState("")

const onNewValue = (event) =>{
  console.log(event.target.value)
}

  return (
    <>
      <NavBar />
     <Main/>
    </>
  )
}

export default App
