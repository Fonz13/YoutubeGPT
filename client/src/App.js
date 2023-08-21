import React, {useState, useEffect} from "react";
import api from "./api";

function App() {
  
  const [transcript, setTranscript] = useState({});
  const [videoURL, setVideoURL] = useState("");

  {/*
  const fetchHome = () => {
    api.get("/").then((response) => {
      setTranscript(response.data);
    });
  }
  useEffect(() => {
    fetchHome();
  }, []);
*/}
  

  const handleVideoURLSubmit = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      api.post("/create-transcript/", {
          URL: videoURL
        })
        .then((response) => {
        setTranscript(response.data);
        setVideoURL("");
      });
    }
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setTranscript(videoURL);
    }
  };


  return (
    <div className="App">
      <div className="input-box">
        <input
          value={videoURL}
          onChange={(event) => setVideoURL(event.target.value)}
          onKeyDown={handleVideoURLSubmit}
          placeholder="Enter video URL"
          type="text"
        />
      </div>
      <h2>{JSON.stringify(transcript, null, 2)}</h2>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>dallas</p>
          </div>
          <div className="temperature">
            <h1>32</h1>
          </div>
          <div className="description">
            <p>cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>feels like 32</p>
          </div>
          <div className="humidity">
            <p>humidity 32</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;