import {Link} from 'react-router-dom';
import React from 'react';
import HeaderMain from '../../components/HeaderMain';
import More from '../../image/more.svg'
import './Feed.css'

export default () => {
    return (
        <div>
            <HeaderMain/>

            <main>
                <div className='cards'>
                    <div className='card'>
                        <header>
                            <h2>Curso consumindo API</h2>
                            <img src={More}></img>
                        </header>
                        <div className='line'></div>
                        <p>Nesse curso vou ensiar a consumirem uma api, com react.js, uma api feita em node js e mongoDB</p>
                        <div className='btns'>
                            <div className='btn-edit'>
                                <Link to='/edit'> <button>Edit</button></Link>
                            </div>
                            <div className='btn-readmore'>
                                <Link to='/lermais'> <button>Ler mais</button></Link>
                            </div>
                            <div className='btn-delete'>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}