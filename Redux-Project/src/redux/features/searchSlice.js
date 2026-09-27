import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchQuery: '',
        activeTab: 'photos',
        searchResults: [],
        loading: false,
        error: null
    },

    reducers:{
        setSearchQuery: (state, action) => {
            state.searchQuery=action.payload
        },
        setActiveTab: (state,action) =>{
            state.activeTab=action.payload
        }, 
        setSearchResults: (state,action)=>{
            state.loading=false
            state.searchResults=action.payload
        },
        setLoading: (state,action)=>{
            state.loading=action.payload
            state.error=null
        },
        setError: (state,action)=>{
            state.error=action.payload
            state.loading=false
        },
        clearResults: (state)=>{
            state.searchResults=[]
        }
    }
    
});

export const {setSearchQuery,setActiveTab,setSearchResults,setError,setLoading,clearResults} = searchSlice.actions

export default searchSlice.reducer;