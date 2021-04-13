import { createAction, handleActions } from 'redux-actions';

import { fromJS } from 'immutable';
import { pender } from 'redux-pender';

//------------------------------------------------------
//api
//------------------------------------------------------
import * as api from 'store/actions/UserApi';

//------------------------------------------------------
//action type
//------------------------------------------------------

const GET_USER_PRODUCT_LSIT = 'GET_USER_PRODUCT_LSIT'; //리스트
const GET_AREA_LIST = 'GET_AREA_LIST';

//------------------------------------------------------
// action creators
//------------------------------------------------------
export const getUserProductList = createAction(GET_USER_PRODUCT_LSIT, api.getUserProductList);
export const getAreaList = createAction(GET_AREA_LIST, api.getAreaList);

//------------------------------------------------------
// initial state
//------------------------------------------------------
const initialState = fromJS({
    //모니터링
    userProductList:[],
    areaList:{},
});

//------------------------------------------------------
// reducer
//------------------------------------------------------
export default handleActions({
    ...pender({
        type : GET_USER_PRODUCT_LSIT,
        onSuccess : (state, action) => {
            const {data} = action.payload;
            if (!data.data) return state;

            return state.set('userProductList', data.data);
        },
    }),
    ...pender({
        type : GET_AREA_LIST,
        onSuccess : (state, action) => {
            const {data} = action.payload;
            if (!data.data) return state;

            return state.set('areaList', data.data);
        },
    }),

}, initialState)