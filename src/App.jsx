import React from 'react'
import Main from './Pages/Main';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import TextGenerator from './Pages/TextGenerator';
import ImageGenerator from './Pages/ImageGenerator';
import MemeGenerator from './Pages/MemeGenerator';
import VideoGenerator from './Pages/VideoGenerator';
import Sidebar from './components/main/Sidebar';
import PopupDialog from './components/PopupDialog';
const App = () => {

  

  return (
    <>
      <Sidebar/>
      <PopupDialog/>
    <Router>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/text' element={<TextGenerator/>} />
        <Route path='/images' element={<ImageGenerator/>} />
        <Route path='/memes' element={<MemeGenerator/>} />
        <Route path='/videos' element={<VideoGenerator/>} />
      </Routes>
    </Router>
    {/* <Main/> */}
    
    </>
  )
}

export default App