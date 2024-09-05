import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './app/components/Login';
import EventList from './app/components/EventList';
import './App.css';
import Dashboard from './app/components/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;