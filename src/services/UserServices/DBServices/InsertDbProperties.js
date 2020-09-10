export const insertDbProperties = (data,btoken) =>{

    let url = 'https://inpaktaservice.herokuapp.com/dbproperties';
    btoken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYXJhdGVjc3lzQGdtYWlsLmNvbSIsImV4cCI6MTYwMDA1ODAxM30.XjHEGEcl45xuyS4Blg3gjKCPSa7DbGNs_rE7mPOqlfJ8G3mP-dNUiVYg1rcRci_49UI8x5coejk2l51MMc0plw';

    fetch(url,{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization':btoken
        },
        body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(json =>{console.log(json)})
}