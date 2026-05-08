import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/Landing/LandingPage';
import WhoWeArePage from './components/WhoWeAre/WhoWeArePage';
import LoginPage from './components/Login/LoginPage';
import RoomsPage from './components/RoomsPage/RoomsPage';
import RoomViewPage from './components/RoomView/RoomViewPage';
import InvalidPage from './components/InvalidPage/InvalidPage';

import { ROOMS_LINK_URL } from './lib/globalVars';
import { getRoomNames } from './lib/dataHandler';


function App() {

  const roomNames: string[] = getRoomNames()
  let roomsLink = ROOMS_LINK_URL.concat("/");

  return (
    <div className='app-container' id='app-container'>
      <Router>
        <Routes>
          <Route path='/'               element={<LandingPage />}  />
          <Route path='/about'          element={<WhoWeArePage />} />
          <Route path='/login'          element={<LoginPage />}    />

          <Route path={ROOMS_LINK_URL}  element={<RoomsPage />}    />
          {
            roomNames.map((name) => {
              return <Route 
                        key={name}
                        path={roomsLink.concat(name)}
                        element={<RoomViewPage roomName={name} />} 
                      />;
            })
          }

          <Route path='*'               element={<InvalidPage />}  />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
