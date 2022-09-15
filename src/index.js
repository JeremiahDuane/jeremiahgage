import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Software from './Software/App';
import Nav from './Nav/App';
import Food from './Software/App';
import reportWebVitals from './Test/reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}/>
                <Route 
                    path="software/" 
                    element={<Software />}   
                />                
                <Route 
                    path="food/" 
                    element={<Food />}   
                />
                <Route path="*" element={<Nav />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
