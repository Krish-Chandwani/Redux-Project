import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/features/searchSlice";

const SearchBar= ()=>{

    const dispatch=useDispatch()
    
    const [text,setText]= useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("form submitted")
        dispatch(setSearchQuery(text))
        setText('')
    }

    return(
        <div>
            <form onSubmit={(e)=>{submitHandler(e)}} className="flex bg-gray-800 gap-5 p-10">
                <input value={text}
                onChange={(e)=>{setText (e.target.value)}} className="w-full border-2 px-4 py-2 text-xl rounded outline-none" type="text" placeholder="Search Anything" required />
                <button className="active:scale-95 border-2 px-4 py-2 text-xl cursor-pointer rounded outline-none">
                Search
                </button>
            </form>
            
        </div>
    )

}

export default SearchBar;
