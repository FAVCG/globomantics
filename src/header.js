import React from 'react';
import home from './home.png';

//this is a function 
//reccomended to use if you just want to render some jsx in your component.
//for everything else use a class component.
const Header = (props) => (
    <header className="row">
        <div className="col-md-5">
            <img src={home} className="logo" alt="logo"/>
        </div>
        <div className="col-md-7 mt-5 subtitle">
            {props.subtitle}
        </div>
    </header>
);

export default Header;