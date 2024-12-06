import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'; 
import AppRoutes from './AppRoutes';     

const App = () => {
  return (
    <Router>
      <Header />  
      <div className="bg-slate-200">
        <AppRoutes />  
      </div>
    </Router>
  );
};

export default App;
