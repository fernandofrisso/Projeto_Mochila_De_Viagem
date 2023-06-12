const form = document.getElementById('novoItem');

form.addEventListener('submit', (evento)=>{

    evento.preventDefault();

    const nome = evento.target.elements['nome'].value;
    const quantidade = evento.target.elements['quantidade'].value

    criaElemento(nome, quantidade )

    nome.value=''
    quantidade.value=''

})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(itens))
    
}