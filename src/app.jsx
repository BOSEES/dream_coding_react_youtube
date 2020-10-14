import React, { useEffect, useCallback } from "react";
import styles from "./app.module.css";
import { useState } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const search = useCallback((query) => {
    props.youtube.search(query)
    .then(videos => {
      setVideos(videos);
      setSelectedVideo(null);
    });
  }, [props.youtube]);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  useEffect(() => {
    props.youtube.mostPupular()
    .then(videos => {setVideos(videos)});
  }, [props.youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
      {selectedVideo && <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? "list" : "grid"}/>
        </div>
      </section>
    </div>
  )
}

export default App;