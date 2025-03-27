'use strict';

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempCliente = {
    nome: "dyego",
    email: "dyego123@gmail.com",
    celular: "83912323490",
    cidade: "Mamanguape"
}

const getLocaStorage = () => {
    const dbClient = JSON.parse(localStorage.getItem('db_client'));
    return Array.isArray(dbClient) ? dbClient : [];
};
const setlocaStorage = (dbClient) => localStorage.setItem("db_client",JSON.stringify(dbClient));

const createCliente = (client) => {
    const dbClient = getLocaStorage();
    dbClient.push (client);
    setlocaStorage(dbClient);
}

document.getElementById('cadastrarCliente').addEventListener('click',openModal);

document.getElementById('modalClose').addEventListener('click',closeModal);
