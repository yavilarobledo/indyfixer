import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IndividualJobPosting from './pages/IndividualJobPosting';
import AllJobPosting from './pages/AllJobPosting';
import NotFoundPage from './pages/NotFoundPage';



function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/alljobs" element={<AllJobPosting />} />
            <Route path="/individualjob/:jobId" element={<IndividualJobPosting />} />
            <Route path="*" element={<NotFoundPage />} />
           
          

          </Routes>

        
        </div>

      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
