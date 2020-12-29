import action from "./action"
import buy_cake from "./action"
//combinereducers also used to join two reducer
const initialstate={
    numofcakes=10,
    numoficecream=20
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