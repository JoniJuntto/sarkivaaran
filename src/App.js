import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Gallery from './components/Gallery';


export default function App(){

  return(
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}