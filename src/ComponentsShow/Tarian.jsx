import React, { useEffect, useState } from "react";
import axios from "axios";
import '../tarian.css';

function Tarian() {
    const [videos, setVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=5&playlistId=PLptSZ2c_YFfpF664Nrhh8Wdg2yC0tFRmG&&key=AIzaSyD_3xSHkeVsAhJ72Jf08IZQFF0je7p-xQE";
        
        axios.get(url)
            .then(response => {
                setVideos(response.data.items);
            })
            .catch(error => {
                console.error("Error fetching videos:", error);
            });
    }, []);

    const handlePreviousVideo = () => {
        setCurrentVideoIndex(prevIndex => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };

    const handleNextVideo = () => {
        setCurrentVideoIndex(prevIndex => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="containerTarian">
            <h2>Tarian Adat Jawa Barat</h2>
            <div className="slideTarian">
                <button onClick={handlePreviousVideo}>{'<'}</button>
                <iframe className="tariJB"
                    src={`https://www.youtube.com/embed/${videos[currentVideoIndex]?.snippet?.resourceId?.videoId}`}
                    allowFullScreen
                ></iframe>
                <button onClick={handleNextVideo}>{'>'}</button>
            </div>
        </div>
    );
}

export default Tarian;
