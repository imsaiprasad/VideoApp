import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FirstPage from './features/pages/FirstPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from './features/pages/VideoPage';
import Trail from './features/pages/Trail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/> } />
        {/* <Route path='/' element={<FirstPage/> } /> */}
        <Route path='/OpenVideoPage' element={<VideoPage/> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
