import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { NavLink } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <>
            <div >
                <NavLink style={{color:"red" , textDecoration :"none"}} to="/">Home &gt; </NavLink>
                <NavLink style={{color:"red" , textDecoration :"none"}} to={props.to}>{props.name}</NavLink>
            </div>
        </>
    );
}

export default BreadCrumb;
