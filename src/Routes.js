import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contato from "./pages/Post/Post";
import Feed from "./pages/Feed/Feed";
import Post from "./pages/Post/Post";
import Edit from "./pages/Edit/Edit";
import Lermais from "./pages/Lermais/Lermais";


export default () => {
    return(
        <Router>            
            <Routes>
                <Route exact path="/" element={<Feed/>}/> 
                <Route path="/post" element={<Post/>}/> 
                <Route path="/edit" element={<Edit/>}/> 
                <Route path="/lermais" element={<Lermais/>}/> 
            </Routes>
        </Router>
    );
}