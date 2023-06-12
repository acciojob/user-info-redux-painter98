import { NAME,EMAIL } from "../actions/actionType";

const initialState = {
    name:'',
    email:''
}

 let upDate = (state = initialState,action) => {
    console.log('reducer action',action.payload);

    switch(action.type){
        case NAME:
            console.log('reducer',action.payload,state.name,state.email)
            return ({
                ...state,name:action.payload
            })
        case EMAIL:
            console.log('reducer',state.name,state.email)
            return ({
                ...state,email:action.payload
            })
        default:
            return state;
    }
}
export default upDate;