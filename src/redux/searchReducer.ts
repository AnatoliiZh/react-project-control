import {createSlice} from '@reduxjs/toolkit'

// type Search = {
//     [id:number]: boolean
// }

export const initialState: string = 'test'


export const searchSlice = createSlice({
    name: "searchText",
    initialState,
    reducers:{
        setSearchText:(prevState, action) => (
            action.payload = prevState + action.payload
        )
    }
})

export const {setSearchText} = searchSlice.actions

export default searchSlice.reducer