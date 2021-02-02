const cep = document.querySelector("#cep")

const showData = result => {
    for (const key in result) {
        if (document.querySelector(`#${key}`)) {
            document.querySelector(`#${key}`).value = result[key];
        }
    } 
}

cep.addEventListener("blur", () => {
    let search =  cep.value.replace("-", "");
    const header = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, header)
    .then(response => { response.json().then(data => showData(data)) })
    .catch(e => console.log("Erro: " + e,message))
    
});


