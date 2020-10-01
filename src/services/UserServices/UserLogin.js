import React from 'react';
import { Link } from 'react-router-dom';

export const submitUserAction = (data) => {

    let url = 'https://inpaktaservice.herokuapp.com/login';

  fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json.authToken)
      localStorage.setItem('authToken',json.authToken.replace(':',' '))
      return json.authToken
    })
    .catch(
      json => { return null}
      );
}