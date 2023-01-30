import {createSlice} from '@reduxjs/toolkit'

type LikeArticles = {
    [id:number]: boolean
}

export const initialState: LikeArticles = {
    1: true,
    2: true
}


export const likeSlice = createSlice({
    name: "likeArticles",
    initialState,
    reducers:{
        toggleLikeState:(prevState, action) => ({
            ...prevState,
            [action.payload]: !prevState[action.payload]
        })
    }
})

export const {toggleLikeState} = likeSlice.actions

export default likeSlice.reducer