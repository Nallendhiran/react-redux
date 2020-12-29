const redux=require("redux")
const CreateStore=redux.createStore
const reduxlogger=require('redux-logger')
const logger=reduxlogger.createLogger()
const applymiddle=redux.applyMiddleware
const buy_cake='buy_cake'
const buy_icecream='buy_icecream'

function buycake(){
    return{
        type:buy_cake
    }
}
function buyicecream(){
    return{
        type:buy_icecream
    }
}

const initialstate={
    numofcakes:10,
    numoficecream:20
}
const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case buy_cake:
            return{
                ...state,
                numofcakes: state.numofcakes-1
            }
        case buy_icecream:
            return{
                 ...state,
                numoficecream: state.numoficecream-2
                }
        default:
            return state
        
    }
}

const store=CreateStore(reducer,redux.applyMiddleware(logger))
console.log("initial value",store.getState())
store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buyicecream())