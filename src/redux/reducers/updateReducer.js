import { NAME,EMAIL } from "../actions/actionType";

const initialState = {
    name:'',
    email:''
}

 let upDate = (state = initialState,action) => {
    switch(action.type){
        case NAME:
            console.log(state.name,state.email)
            return ({
                ...state,name:action.payload.name,email:''
            })
        case EMAIL:
            console.log(state.name,state.email)
            return ({
                ...state,email:action.payload.email,name:''
            })
        default:
            return state;
    }
}
export default upDate;