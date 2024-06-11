import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BeginPage from './pages/BeginPage';
import Login1 from './pages/Login1';
import WorldMap from './pages/WorldMapPage';
import DropFile from './pages/DropFile';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element= {<BeginPage/>}/>
          <Route path='/homepage' element = {<HomePage/>} />
          <Route path='/login1' element = {<Login1/>} />
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path='/chatpage' element= {<ChatPage/>}/>
          <Route path ='/worldmap' element ={<WorldMap/>}/>
          <Route path='/dropfile' element= {<DropFile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
