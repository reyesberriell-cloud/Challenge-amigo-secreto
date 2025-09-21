const inputAmigo = document.getElementById ('amigo');
const ListaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo(){
    if(!inputAmigo.value){
        alert("Por favor inserte un nombre")
    }
     ListaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo(){
    const random =Math.floor((Math.random() * ListaAmigos.length));
    console.log(random);
    const amigoSecreto = ListaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
