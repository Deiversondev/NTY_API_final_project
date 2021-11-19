import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Science from './Pages/Science';
import Technology from './Pages/Technology';
import Health from './Pages/Health';
import Arts from './Pages/Arts';
import SectionContextProvider from './context/SectionContext';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css'
function App() {
  return (
    <div className="App">
      <SectionContextProvider>
        <Router>
          <Header Link={Link}/>
          <Routes>
              <Route path="/" element={<Home/>} />
            
              <Route path="/science" element={<Science/>} />
            
              <Route path="/tech" element={<Technology/>} />

              <Route path="/health" element={<Health/>} />

              <Route path="/arts" element={<Arts/>} />

          </Routes>
        </Router>
      </SectionContextProvider>
    </div>
  );
}

export default App;
