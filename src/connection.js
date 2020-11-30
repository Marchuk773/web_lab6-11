import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8090/tools',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getTools() {
    return (await instance.get()).data;
}

export async function getToolById(id) {
    await delay(3000);
    return (await instance.get(`/${id}`)).data;
}

export async function getFilteredTools(type, manufacturer) {
    return (await instance.get(`/filters?type=${type}&manufacturer=${manufacturer}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}