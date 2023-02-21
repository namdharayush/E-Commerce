import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { NavLink } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <>
            <div className='breadcrumb' >
                <NavLink style={{color:"red" , textDecoration :"none"}} to="/">Home &gt; </NavLink>
                <NavLink style={{color:"red" , textDecoration :"none"}} to={props.to}>{props.name}</NavLink>
                <NavLink style={{color:"red" , textDecoration :"none"}} to={`/singleproduct/${props.id}/${props.productName}`}> &gt; {props.productName}</NavLink>
            </div>
        </>
    );
}

export default BreadCrumb;
