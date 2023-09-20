import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Routing from './Components/Routing';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Routing/>
        <Footer/>
    </Router>
  );
}

export default App;