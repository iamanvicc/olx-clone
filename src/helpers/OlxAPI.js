import Cookies from 'js-cookie';
import qs from 'qs';

//Retirar esse host na hora do deploy.
const BASEAPI = '/';

const apiFetchFile = async (endpoint, body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.append('token', token);
        }
    }
    const res = await fetch (BASEAPI+endpoint, {
        method: 'POST',
        body
    }); 
    const json = await res.json();
  
    if(json.notallowed){
        window.location.href = '/singin';
        return;
    }
    return json;
}

const apiFetchPost = async (endpoint, body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }
    const res = await fetch (BASEAPI+endpoint, {
        method: 'POST',
        headers:{
            'Aceppt': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(body)
    }); 
    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/singin';
        return;
    }
    return json;
}

async function apiFetchGet(endpoint, body = []) {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    const res = await fetch(`${BASEAPI + endpoint}?${qs.stringfy(body)}`);
    const json = await res.json();

    if (json.notallowed) {
        window.location.href = '/singin';
        return;
    }
    return json;
}

const OlxAPI = {

    login: async (email, password) => {
        const json = await apiFetchPost(
            '/user/singin',
            {email, password}
        );
        return json;
    },

    getStates:async () => {
        const json = await apiFetchGet(
            '/states'
        );
        return json.states;
    },

    register:async (name, email, password, stateLoc) => {
        const json = await apiFetchPost(
            '/user/singup',
            {name, email, password, state:stateLoc}
        ); 
        return json;
    },

    getCategories : async () => {
        const json = await apiFetchGet(
            '/categories'
        );
        return json.categories;
    },

    getAds : async (options) => {
        const json = await apiFetchGet(
            '/ad/list',
            options
        );        
        return json;
    },

    getAd:async (id, otherAds = false) => {
        const json = await apiFetchGet(
            '/ad/item',
            {id, otherAds}
        );
        return json;
    },

    addData:async (fData) => {
        const json = await apiFetchFile(
            '/ad/add',
            fData
        );
        return json;
    }
};

export default () => OlxAPI;