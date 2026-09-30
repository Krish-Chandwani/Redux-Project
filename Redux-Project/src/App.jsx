import React from "react";
import { fetchPhotos } from "./api/mediaApi";
import { fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/searchBar";
import Tabs from "./components/tabs";


const App=()=>{

    // function getPhotos(){
    //     fetchPhotos();
    // }
    return(
        // <div className="h-screen text-white w-full bg-gray-950">
        //     <button className="bg-blue-400 px-3 py-4 mx-3 rounded-md" onClick={(async()=>{await fetchPhotos("nature")})}>Get Photos</button>
        //     <button className="bg-blue-400 px-3 py-4 mx-3 rounded-md" onClick={(async()=>{await fetchVideos("nature")})}>Get Videos</button>
        // </div>
        
        <div>
            <SearchBar></SearchBar>
            <Tabs></Tabs>
        </div>
        

    )
}

export default App;