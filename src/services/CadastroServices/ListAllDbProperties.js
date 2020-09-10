
export const listAllDbProperties = function() {

    let url = 'https://inpaktaservice.herokuapp.com/dbproperties/all';
    
    fetch(url,{
        method: "GET",
        headers: {
            'Content-type':'application/json',
            'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYXJhdGVjc3lzQGdtYWlsLmNvbSIsImV4cCI6MTYwMDA1ODAxM30.XjHEGEcl45xuyS4Blg3gjKCPSa7DbGNs_rE7mPOqlfJ8G3mP-dNUiVYg1rcRci_49UI8x5coejk2l51MMc0plw'
        },
    }).then(response => response.json())
    .then(json => {console.log(json)})
}