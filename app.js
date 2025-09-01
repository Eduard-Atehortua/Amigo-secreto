// El principal objetivo de este desafío es fortalecer tus
//  habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let imputFriend = document.getElementById("amigo");

let friendList = [];

let ulFriendList = document.getElementById("listaAmigos");

 
function agregarAmigo() {
    if(imputFriend.value ==""){
        alert('Ingresa un nombre por favor')

    }else{friendList.push(imputFriend.value);
    ulFriendList.innerHTML += `<li> ${imputFriend.value} </li>`};
    

    console.log(friendList)
}

