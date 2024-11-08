import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Game from './pages/Game';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;