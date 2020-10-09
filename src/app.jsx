import React, { useEffect } from "react";
import styles from "./app.module.css";
import { useState } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App(props) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    props.youtube.search(query)
    .then(videos => setVideos(videos));
  }

  useEffect(() => {
    props.youtube.mostPupular()
    .then(videos => setVideos(videos));
  }, []);
  
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  )
}

export default App;