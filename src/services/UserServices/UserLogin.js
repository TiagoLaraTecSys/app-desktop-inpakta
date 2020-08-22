
export const submitUserLogin = (data) => {

    let url = 'abc';

    fetch(url, {
        methodd: "POST",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {console.log(json)})
}