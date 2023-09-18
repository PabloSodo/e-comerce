import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({loading, children}){
    if(loading){
		return (
				<div style={{ position: 'fixed', top: '30%', left: '50%'}}>
					<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>				 
			); 
    }else{
        return <div>{children}</div> 
    };
}

export default Loading;