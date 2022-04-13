let username = "Neto";

const messages = [
    `Olha quem finalmente chegou, pessoal! \n Sinta-se à vontade ${username}!!`, 
    `Mais uma pessoa no grupo, finalmente. \n Seja bem vindo(a) ${username}`, 
    `${username} embarcou no foguete, seja bem vindo(a)!`,
    `${username} colou com a gente, agora o grupo anda hehe`, 
    `${username} chegou junto galera!`, 
    `${username}, sinta-se em casa!`
];

function getRandomMessage(arrMessages){
    let result;

    const min = 0;
    const max = arrMessages.length;

    let index = Math.floor(Math.random() * (max - min + 1)) + min; 
    let message = arrMessages[index]; 
    message == undefined ? result = arrMessages[5] : result = message; // as vezes acontece de retornar undefined, se isso ocorrer: ele retorna uma msg padrão. 

    return result;
}

const result = getRandomMessage(messages);
const userMessage = document.querySelector('text.random-message');
userMessage.innerHTML = result;
