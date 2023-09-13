import React from 'react'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import  LoadingSpinner  from '../components/LoadingSpinner'


const SearchVideo = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  /*
  * This function is called when the user submits the video URL to the api.
  * If the response status is OK, the user is redirected to the chat page.
  * Otherwise, the user is shown an error message from the api.
  */
  const handleVideoURLSubmit = async (event) => {
      event.preventDefault();
      setErrorMessage("")
      setIsLoading(true);


      api.post("/create-summary/", {
          URL: videoURL
        })
        .then((response) => {
          if (response.data.Status === "OK") { 
            navigate("/chat", { state: { videoID: response.data.VideoID }});
          } else {
            setVideoURL("");
            setErrorMessage(response.data.Message);
          }
          setIsLoading(false);
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
        <span className="logo">YoutubeGPT</span>
        <form onSubmit={handleVideoURLSubmit}>
          <input
            value={videoURL}
            onChange={(event) => setVideoURL(event.target.value)}
            placeholder="Enter Youtube URL"
            type="text"
          />
        </form>
        <p>{errorMessage}</p>
      </div>
      }
      
    </div>
      
  )
}

export default SearchVideo