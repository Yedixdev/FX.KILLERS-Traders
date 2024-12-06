import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Suscriptions from './pages/Suscriptions';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Error from './pages/Error';  

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/suscriptions" element={<Suscriptions />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Error />} /> 
    </Routes>
  );
};

export default AppRoutes;
