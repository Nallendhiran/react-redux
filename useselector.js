import react from "react"
import { useSelector, useDispatch } from "react-redux"

const numofcakes=useSelector(state=>{state.numofcakes})
const dispatch=useDispatch()

//useselector and dispatch is used like state to props