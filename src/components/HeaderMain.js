import React from "react";
import { Link } from "react-router-dom";
import './HeaderMain.css'

export default () => {
    return (
        <header>
            <div className="container">
                <div className="Logo">
                    <a href="/"><h1>CRUDer</h1></a>
                    
                </div>
                <div className="btn-newPost">
                    <Link to='/post'><button>New Post</button></Link>
                </div>
            </div>
        </header>
    )
}