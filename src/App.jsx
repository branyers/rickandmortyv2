import NavBar from './components/NavBar'
import { Main } from './components/Main'
import { Route, Routes } from 'react-router-dom'
import { SingleCharacter } from './components/SingleCharacter'
import { Locations } from './components/Locations'
import { LocationInfo } from './components/LocationInfo'
import { EpisodeInfo } from './components/EpisodeInfo'
import { ResidentInfo } from './components/ResidentInfo'

function App() {


  return (
    <>

      <NavBar />

      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='character/:id' element={<SingleCharacter />} />
        <Route path='location/:id' element={<Locations/>}></Route>
        <Route path='locationinfo/:id' element={<LocationInfo/>}></Route>
        <Route path='episodeinfo/:id' element={<EpisodeInfo/>}></Route>
        <Route path='residentinfo/:id' element={<ResidentInfo/>}></Route>
      </Routes>
    </>
  )
}

export default App
