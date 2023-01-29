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
    reducers:{}
})

export default likeSlice.reducer