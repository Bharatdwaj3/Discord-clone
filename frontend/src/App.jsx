import { Content, Creator, Reader } from './features/index';
import { About, Home } from './pages/index';
import {Login, Register} from "./auth/index"

import {Navbar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
        <Router>
            <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>

              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>

              <Route path="/creator" element={<Creator/>}/>
              <Route path="/creator/:id" element={<></>}/>

              <Route path="/reader" element={<Reader/>}/>
              <Route path="/reader/:id" element={<></>}/>
              <Route path="/content" element={<Content/>}/>
              <Route path="/content/:id" element={<></>}/>
              <Route/>
              <Route/>
          </Routes>
        </Router>
    </>
  )
}

export default App
