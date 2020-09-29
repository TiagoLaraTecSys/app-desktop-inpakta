

export const submitUserAction = (data) => {
    let url = 'https://inpaktaservice.herokuapp.com/cliente';

    fetch(url, {
        method: "POST",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
      .then(function (response){
      console.log(response);
    })
  
}