import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Routing from './Components/Routing';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routing/>
        <Footer/>
    </Router>
  );
}

export default App;