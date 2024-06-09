import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';


function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
  ]);

  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
