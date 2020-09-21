
export const listAllDbProperties = function() {

  let url = 'https://inpaktaservice.herokuapp.com/dbproperties/all';
  let token = localStorage.getItem('client-token');
  console.log(token);
    fetch(url,{
        method: "GET",
        headers: {
            'Content-type':'application/json',
            'Authorization':token
        },
    }).then(response => response.json())
    .then(json => {console.log(json)})
}