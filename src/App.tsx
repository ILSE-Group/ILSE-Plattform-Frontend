import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import RoomViewPage from './components/RoomView/RoomViewPage';
import WhoWeArePage from './components/WhoWeAre/WhoWeArePage';

import {getRoomTypes} from './lib/pageContentHandler';
import {saveToLocalStorage} from './lib/localStorageHandler';


function App() {
  saveToLocalStorage("roomList", JSON.stringify(getRoomTypes()));

  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path='/'      element={<LandingPage />}  />
          <Route path='/login' element={<LoginPage />}    />
          <Route path='/room'  element={<RoomViewPage />} />
          <Route path='/about' element={<WhoWeArePage />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
