
export const listAllDbProperties = (btoken) => {

    let url = 'https://inpaktaservice.herokuapp.com/dbproperties/all'
    
    fetch(url,{
        method: "POST",
        headers: {
            'Content-type':'application/json',
            'Authorization':btoken
        },
    }).then(response => response.json())
    .then(json => {console.log(json)})
}