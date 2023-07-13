import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
 
//action
// export const getAllData = createAsyncThunk("name" , async() =>{
// const response = await fetch("https://api.github.com/users");
// const result = response.json();
//   return result;
// });
export const getAllData = createAsyncThunk("name" , async(args,{rejectwithvalue}) =>{
    const response = await fetch("https://api.github.com/users");
    // const response = await fetch("https://rickandmortyapi.com/api/character");
    // const response = await fetch("https://rickandmortyapi.com/api/character/1,183");
    try {
        const result = response.json();
      return result;
    } catch (error) {
        return rejectwithvalue("opps found an error")
    }
    
    });


export const getUser = createSlice({
    name :"gitUser",
    initialState:{
        users:[],
        loading : false,
        error:null,
    },
    reducers:{},
    extraReducers: {
        [getAllData.pending]: (state) => {
          state.loading = true
        },
        [getAllData.fulfilled]: (state, action ) => {
          state.loading = false
          state.users = action.payload    // everything data store in users empty arry
        },
        [getAllData.rejected]: (state,action) => {
          state.loading = false
          state.error = action.payload 
        },
      },
});
export default getUser.reducer;