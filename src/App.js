

import 'bootstrap/dist/css/bootstrap.min.css';
import FirstScreen from './pages/MovieList';
import SecondScreen from './pages/BookList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <FirstScreen/>} />
          <Route path="/show" element={<SecondScreen/>} />
          {/* <Route path="/network" element={<thirdScreen/>}/> */}
        </Routes>
      </Router>
     
      
     
    </div>
  );
}

export default App;
