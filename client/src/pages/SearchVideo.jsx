import React from 'react'
import { useState } from "react";
import api from "../api";

const SearchVideo = () => {

  const [transcript, setTranscript] = useState({});
  const [videoURL, setVideoURL] = useState("");

  const handleVideoURLSubmit = async (event) => {
      event.preventDefault();
      api.post("/create-transcript/", {
          URL: videoURL
        })
        .then((response) => {
        setTranscript(response.data);
        setVideoURL("");
      });
    
  };

  return (
    <div className="SearchVideo-container">
      <div className="search-bar-container">
        <span className="logo">YoutubeGTP</span>
        <span className="title">Welcome! </span>
        <form onSubmit={handleVideoURLSubmit}>
          <input
            value={videoURL}
            onChange={(event) => setVideoURL(event.target.value)}
            placeholder="Enter video URL"
            type="text"
          />
        </form>
        <span>{JSON.stringify(transcript, null, 2)}</span>
      </div>
      
    </div>
      
  )
}

export default SearchVideo