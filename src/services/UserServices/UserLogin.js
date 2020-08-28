import React from 'react';
import { Link } from 'react-router-dom';

export const submitUserAction = (data) => {
    let url = 'https://inpaktaservice.herokuapp.com/login';

    fetch(url, {
        method: "POST",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {console.log(json)
        
        return(<Link to="/cadastro"></Link>);
    })
}