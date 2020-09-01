
export const listAllDbProperties = () => {

    let url = 'https://inpaktaservice.herokuapp.com/dbproperties/all'
    
    fetch(url,{
        method: "POST",
        headers: {
            'Content-type':'application/json',
            'Authorization':'Bearer yJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYXJhdGVjc3…UCgfIElVtn95FsIkC8Ze8H0VV314zWoi0gn3C1FIhf--Nsg-g'
        },
    }).then(response => response.json())
    .then(json => {console.log(json)})
}