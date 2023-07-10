import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './component/Table';
import EditPage from './component/EditPage';
import Header from './component/Header';
import HomePage from './component/HomePage';


const App = () => {
  return (
    <Router>
     
       <div>
         <Header />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<Table />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>  
    </Router>
  );
};

export default App;

