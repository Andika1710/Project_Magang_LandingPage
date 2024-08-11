import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact_us from './pages/contact_us'
import Foto_all_ruangan from './pages/photos_rooms'



function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact_us' element={<Contact_us/>}/>
        <Route path='/photos_rooms' element={<Foto_all_ruangan/>}/>
      </Routes>
    </Router>
  )
}

export default App


