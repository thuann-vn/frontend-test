import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Records from './screens/Records';
import Navigation from './Navigation';
import Footer from './Footer';
import News from './screens/News';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
