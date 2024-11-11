import './App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { WebMind } from './components/webmind/webmind'
import { Happiness } from './components/happiness/happiness'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BusinessManagement } from './components/business/businessmanagement';

function App() {
  console.log('Environment Variables:', import.meta.env);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WebMind />} />
          <Route path="/happiness" element={<Happiness />} />
          <Route path="/business" element={<BusinessManagement/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
