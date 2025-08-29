import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Objectives from './pages/Objectives';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<Navigate to="/vision" replace />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/objectives" element={<Objectives />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
