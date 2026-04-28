import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ItemDetail } from './pages/ItemDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}
