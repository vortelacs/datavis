import React from 'react';
import './App.css';
import Navbar from './components/static/Navbar';
import Intro from './components/static/Intro';
import TableauEmbed from './components/charts/TableauEmbed';

function App() {


  return (
    <div className="App">

      <Navbar />
      <Intro />
      <TableauEmbed url='https://public.tableau.com/views/Aarhus_DataVis_Project_CAA2109/Dashboard1'/>
    </div>
  );
}

export default App;