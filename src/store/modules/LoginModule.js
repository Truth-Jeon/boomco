import { createAction, handleActions } from 'redux-actions';

import { fromJS } from 'immutable';
import { pender } from 'redux-pender';

//------------------------------------------------------
//action type
//------------------------------------------------------
const SET_SCREEN_NAME = 'SET_SCREEN_NAME'; //현제 화면 이름
const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST'; //지역 리스트

//------------------------------------------------------
// action creators
//------------------------------------------------------
export const setScreenName = createAction(SET_SCREEN_NAME);
// export const getAddressList = createAction(GET_ADDRESS_LIST, api.getAddressList);

//------------------------------------------------------
// initial state
//------------------------------------------------------
const initialState = fromJS({
    screenName:"",
    mainSliderImages:[],
    addressList:[],
    addressKeyValue:{},
});

//------------------------------------------------------
// reducer
//------------------------------------------------------
export default handleActions({
    //유저 정보 업데이트
    [SET_SCREEN_NAME] : (state, action) => {
        let data = action.payload;
        return state.set('screenName', data);
    },

    ...pender({
        type : GET_ADDRESS_LIST,
        onSuccess : (state, action) => {
            const {data} = action.payload;
            if (!data.data) return state;

            return state.set('addressList', data.data);
        }
    }),
}, initialState)