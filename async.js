const redux=require("redux")
const CreateStore=redux.createStore
const reduxthunk=require('redux-thunk').default
const applymiddle=redux.applyMiddleware
const axios=require('axios')

const statement={
    loading:true,
    datas:[],
    error:""
}
const fetchrequest='fetchrequest'
const fetchsuccess='fetchsuccess'
const fetcherror='fetcherror'

function fetch_request(){return {type:fetchrequest}}
function fetch_success(datas){return {type:fetchsuccess,payload:datas}}
function fetch_error(error){return {type:fetcherror,payload:error}}

const reducer=(state=statement,action)=>{
    switch(action.type){
        case fetch_request: return{...state,loading:true}
        case fetch_request: return{loading:false,datas:action.payload,error:""}
        case fetch_request: return{loading:false,datas:[],error:action.payload}
}}
const fetch=()=>{return function(dispatch){
    dispatch(fetch_request())
    axios.get('../example.js').then(response=>
        {const datas=response.data
        dispatch(fetch_success(datas))})
    .catch(error=>{dispatch(fetch_error(error.message))})
}}

const store=CreateStore(reducer,redux.applyMiddleware(reduxthunk))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetch())
