import React from 'react'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import  LoadingSpinner  from '../components/LoadingSpinner'


const SearchVideo = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);


  const handleVideoURLSubmit = async (event) => {
      event.preventDefault();
      setErrorMessage("")
      ///delete delay
      setIsLoading(true);
          setTimeout(() => {
           setIsLoading(false);
          }, 3000);

      ///

      api.post("/create-transcript/", {
          URL: videoURL
        })
        .then((response) => {
          if (response.data.Status === "OK") { 
            navigate("/chat", { state: { videoID: response.data.videoID }});
          } else {
            setVideoURL("");
            setErrorMessage(response.data.Message)
          }
      });
    
  };

  return (
    <div className="SearchVideo-container">
      {isLoading && 
        <div className="spinner-container">
          <span className="loading">Creating transcript and summary</span>
          <LoadingSpinner />
        </div>
      }

      {!isLoading &&
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
        <span>{errorMessage}</span>
      </div>
      }
      
    </div>
      
  )
}

export default SearchVideo