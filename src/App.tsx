import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import InvalidPage from './components/InvalidPage/InvalidPage';
import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import RoomViewPage from './components/RoomView/RoomViewPage';
import WhoWeArePage from './components/WhoWeAre/WhoWeArePage';
import { useEffect, useState } from 'react'; // für den toggle (light/dark mode) 

import { saveRoomsList } from './lib/dataHandler';


function App() {
  saveRoomsList();

  // toggle
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }; 
  // toggle


  return (
    <div className='app-container'>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

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
