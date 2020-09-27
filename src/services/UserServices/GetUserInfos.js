export const getUserInfos = (token) => {

  let url = 'https://inpaktaservice.herokuapp.com/cliente/infos';

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token
    }
  })
    .then(response => response.json())
    .then(json => {
    localStorage.setItem('unserName', json.nome)
  })
} 