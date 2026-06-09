import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/Landing/LandingPage';
import WhoWeArePage from './components/WhoWeAre/WhoWeArePage';
import LoginPage from './components/Login/LoginPage';
import ProfilePage from './components/Profile/ProfilePage';
import RoomsPage from './components/RoomsPage/RoomsPage';
import RoomViewPage from './components/RoomView/RoomViewPage';
import InvalidPage from './components/InvalidPage/InvalidPage';

import { HOME_URL, ABOUT_URL, LOGIN_URL, PROFILE_URL, ROOMS_LINK_URL } from './lib/globalVars';
import { getRoomNames, getRoomThumbnail } from './lib/dataHandler';


function App() {

  const roomNames: string[] = getRoomNames();
  let roomsLink = ROOMS_LINK_URL.concat("/");

  
  return (
    <div className='app-container' id='app-container'>
      <Router>
        <Routes>
          <Route path={HOME_URL}        element={<LandingPage />}  />
          <Route path={ABOUT_URL}       element={<WhoWeArePage />} />
          <Route path={LOGIN_URL}       element={<LoginPage />}    />
          <Route path={PROFILE_URL}     element={<ProfilePage />}  />

          <Route path={ROOMS_LINK_URL}  element={<RoomsPage />}    />
          {
            roomNames.map((name, index) => {
              return <Route 
                        key={name}
                        path={roomsLink.concat(name)}
                        element={<RoomViewPage key={name} roomName={name} thumbnailSrc={getRoomThumbnail(index)} />} 
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
