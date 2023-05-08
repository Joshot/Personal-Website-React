// Import CSS
import '../src/css/style.css';

// Import Pages
import Home from "./pages/Home";
// import Choosing from './pages/Choosing';

// Import React Stuff
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/choosing' element={<Choosing />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
