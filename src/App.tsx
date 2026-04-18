import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import InvalidPage from './components/InvalidPage/InvalidPage';
import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import RoomViewPage from './components/RoomView/RoomViewPage';
import WhoWeArePage from './components/WhoWeAre/WhoWeArePage';


function App() {

  return (
    <div className='app-container' id='app-container'>
      <Router>
        <Routes>
          <Route path='/'        element={<LandingPage />}  />
          <Route path='/about'   element={<WhoWeArePage />} />
          <Route path='/login'   element={<LoginPage />}    />
          <Route path='/room'    element={<RoomViewPage />} />
          <Route path='*'        element={<InvalidPage />}  />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
