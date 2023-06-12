import { NAME,EMAIL } from "./actionType";

export const theName = (name) => {
//console.log('action',name)
    return ({
        type:NAME,
        payload:name
    })
}

export const theEmail = (email) => {
    //console.log('action',email)
    return ({
        type:EMAIL,
        payload:email
    })
}