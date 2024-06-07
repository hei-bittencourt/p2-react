import axios from "axios";

const apiMock = axios.create({
    baseURL: 'https://6662550d62966e20ef0845b0.mockapi.io/',
    headers: {
        'Content-Type': 'application/json'
    }



});

export function postUser(usuario) {
    const url = '/nft/register';

    console.log(usuario)
    return apiMock.post(url, {body: usuario}).then(url).catch(console.error());

}
