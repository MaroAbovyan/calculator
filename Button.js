import React from 'react';

let buttonStyle = {
    // border:'solid 1px',
    // color: 'red',
    // fontSize : '20px',
    // padding: '10px 15px',
    width:'40px',
    height:'40px',
}


export default function Button(props){
    return <>
        <button style={buttonStyle} onClick={()=>{props.onClick(props.label)}}>
            {props.label}
        </button>
    </>
}  