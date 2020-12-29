import react from 'react'
import { connect } from 'react-redux'

//state and dispatch is used by using connect method
//this method is used to make state to props 
//and dispatch to props
const statetoprop=state=>{
    numofcakes:state.numofcakes
}

const dispatchtoprop=dispatch=>{
    buycake:dispatch(buycake())
}

connect(statetoprop,dispatchtoprop)(usedfilename)