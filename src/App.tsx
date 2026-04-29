import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import InvalidPage from './components/InvalidPage/InvalidPage';
import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import RoomViewPage from './components/RoomView/RoomViewPage';
import WhoWeArePage from './components/WhoWeAre/WhoWeArePage';
import { getRoomNames } from './lib/dataHandler';


function App() {

  const roomNames: string[] = getRoomNames()
  let roomUrl : string = "/room/";

  return (
    <div className='app-container' id='app-container'>
      <Router>
        <Routes>
          <Route path='/'        element={<LandingPage />}  />
          <Route path='/about'   element={<WhoWeArePage />} />
          <Route path='/login'   element={<LoginPage />}    />
          {
            roomNames.map((roomName, _) => {
              return <Route path={roomUrl + roomName} element={<RoomViewPage roomName={roomName} />} />;
            })
          }
          <Route path='*'        element={<InvalidPage />}  />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
