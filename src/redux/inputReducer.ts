import {createSlice} from '@reduxjs/toolkit'

type InputShowType = {
    isShowInput: boolean
}

export const initialState: InputShowType = {
    isShowInput: false   
}


export const inputSlice = createSlice({
    name: "inputShow",
    initialState,
    reducers:{
        toggleInputShow(prevState, action) { 
            prevState.isShowInput  =  !action.payload
        }
    }
})

export const {toggleInputShow} = inputSlice.actions

export default inputSlice.reducer