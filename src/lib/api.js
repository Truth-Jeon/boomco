import axios from 'axios';
import global from 'lib/global'

async function request(method, path, params, shouldAuthenticate) {
    var url = path;
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    };

    if(method =='GET'){
        let config = {
            headers: headers
        };
        return axios.get(global.url_api+url, params, config, {timeout:5000});
    }else if(method =='POST'){
        let config = {
            headers: headers
        };
        console.log("global.url_api+url : ", global.url_api, url)
        return axios.post(global.url_api+url, params, config, {timeout:5000});
    }
}

export default {
    get: (path, params, shouldAuthenticate = false) => request('GET', path, params, shouldAuthenticate),
    post: (path, params, shouldAuthenticate = false) => request('POST', path, params, shouldAuthenticate),
};


