import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegistration from './pages/LoginRegistration';
import Registration from './pages/Registration';
import Home from './pages/home';
import Profilepage from './pages/Profilepage';
import Settings from './pages/settings';
import DeleteUser from './pages/Deleteuser';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
       
          <>
            <Route path="/" element={<LoginRegistration />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profilepage" element={<Profilepage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/delete" element={<DeleteUser />} /> 
          </>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
