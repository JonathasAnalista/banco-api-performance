import http from 'k6/http';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import { pegarBaseURL } from '../utils/variaveis';


export function obterToken() {

    // tudo que estiver aqui dentro é o nosso teste!
    const url = pegarBaseURL() + 'login';

    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    return res.json('token')

}