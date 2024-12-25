import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './component/Header/Header';
import About from './Pages/About/About';
import Footer from './component/Footer/Footer'; 
import Classes from './Pages/Classes/Classes';
import Trainers from './Pages/Trainer/Trainer';

function Layout({ children }) {
  return (
    <>
      <Header />
       {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainer" element={<Trainers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
