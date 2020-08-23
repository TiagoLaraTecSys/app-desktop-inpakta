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
    .then(json => {console.log(json)})

}