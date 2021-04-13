import { createAction, handleActions } from 'redux-actions';

import { fromJS } from 'immutable';
import { pender } from 'redux-pender';

//------------------------------------------------------
//api
//------------------------------------------------------
import * as api from 'store/actions/DataApi';

//------------------------------------------------------
//action type
//------------------------------------------------------
//모니터링
// const GET_MONITOR_AREA = 'GET_MONITOR_AREA'; //지역 리스트

//------------------------------------------------------
// action creators
//------------------------------------------------------
// export const getMonitorArea = createAction(GET_MONITOR_AREA, api.getMonitorArea);

//------------------------------------------------------
// initial state
//------------------------------------------------------
const initialState = fromJS({
    // monitorAreaList:[],
});

//------------------------------------------------------
// reducer
//------------------------------------------------------
export default handleActions({
    // ...pender({
    //     type : GET_MONITOR_AREA,
    //     onSuccess : (state, action) => {
    //         const {data} = action.payload;
    //         if (!data.data) return state;
    //
    //         return state.set('monitorAreaList', data.data);
    //     },
    // }),
}, initialState)