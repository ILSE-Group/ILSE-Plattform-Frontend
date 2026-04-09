import {useState} from 'react';
import pageState from './lib/pageState'
import {getPageTypes, getPageContent} from './lib/pageContentHandler';

import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';

import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import RoomViewPage from './components/RoomView/RoomViewPage';


function App() {
  const [page, setPage] = useState(pageState.Landing);
  let pageTypes: String = JSON.stringify(getPageTypes()); //TODO: pass to LandingPage
  let pageContent: string;

  const handleLink = (newPage:typeof pageState[keyof typeof pageState], pageType:string) => {
    //load page content from backend
    if(newPage === pageState.RoomView){
      pageContent = getPageContent(pageType);
    }
    
    //create page
    setPage(newPage);
  };

  const renderPage = () => {
    switch(page) {
      case pageState.Landing:
        return <LandingPage />;
      case pageState.Login:
        return <LoginPage />;
      case pageState.RoomView:
        return <RoomViewPage />;
      default:
        return <LandingPage />;
    }
  }

  return (
    <div className='app-container'>
      <AppHeader />
      
      {renderPage()}

      <AppFooter />
    </div>
  );

}

export default App;
