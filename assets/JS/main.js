'use strict';

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');
};

const getLocaStorage = () => {
    const dbClient = JSON.parse(localStorage.getItem('db_client'));
    return Array.isArray(dbClient) ? dbClient : [];
};
const setlocaStorage = (dbClient) => localStorage.setItem("db_client",JSON.stringify(dbClient));

const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index,1);
    setlocaStorage(dbClient);
}

const updateClient = (index,client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setlocaStorage(dbClient);
}

const readClient = () => getLocaStorage();

const createCliente = (client) => {
    const dbClient = getLocaStorage();
    dbClient.push (client);
    setlocaStorage(dbClient);
}

const isValidFields = () => {
   return document.getElementById('form').reportValidity();
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = "")
}

const saveClient = () =>{
    if(isValidFields()){
        const client = {
            nome:document.getElementById('nome').value,
            email:document.getElementById('email').value,
            celular:document.getElementById('celular').value,
            cidade:document.getElementById('cidade').value
        }
        createCliente(client);
        clearFields();
        updateTable();
        closeModal();
    }
}

const createRow = (client) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.celular}/td>
    <td>${client.cidade}</td>
    <td>
        <button type="button" class="button green">editar</button>
        <button type="button" class="button red">excluir</button>
    </td>`;

    document.querySelector('#tableClient>tbody').appendChild(newRow);
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row));
}

const updateTable = () => {
   const dbClient = readClient();
   clearTable();
   dbClient.forEach(createRow)
}

updateTable();

document.getElementById('cadastrarCliente').addEventListener('click',openModal);

document.getElementById('modalClose').addEventListener('click',closeModal);

document.getElementById('salvar').addEventListener('click',saveClient);
