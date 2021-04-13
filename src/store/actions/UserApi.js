import api from 'lib/api';

export const getUserProductList = (item) => {
    return api.post('/users/list', item);
}

export const getAreaList = (item) => {
    return api.post('/users/area', item);
}