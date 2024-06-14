import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Components/Card/Card';
import Grid from './Components/Grid/Grid';
import './App.css';
function App()
{

    return <Grid noOfCards={9}></Grid>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);


