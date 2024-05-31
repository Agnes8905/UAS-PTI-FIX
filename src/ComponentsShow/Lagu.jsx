import React, { useEffect, useState } from "react";
import axios from "axios";
import '../lagu.css';
import bg from "../assets/imageLagu.jpg";

function Lagu() {
    const [song, setSong] = useState([]);
    const [songIndex, setSongIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=5&playlistId=PLptSZ2c_YFfrj5I15ptsWrrHfLiNMlgUs&&key=AIzaSyCVepGlmi_R4AYkKl9y-fG3bhpwEHllP2E";

        axios.get(url)
            .then(response => {
                setSong(response.data.items);
            })
            .catch(error => {
                console.error("Error fetching songs:", error);
            });
    }, []);

    const play = (index) => {
        setSongIndex(index); 
    }

    const mute = () => {
        setIsMuted(prevMuted => !prevMuted);
    }

    return (
        <div className="cardLagu my-10">
            <div className="cardContentLagu">
                <div className="imageCardLagu">
                    <img src={bg} alt="BackgroundLagu" />
                </div>
                <div className="songs">
                    <iframe
                        src={`https://www.youtube.com/embed/${song[songIndex]?.snippet?.resourceId?.videoId}?autoplay=1&loop=1&mute=${isMuted ? 1 : 0}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        loop
                    ></iframe>
                </div>
                <div className="songOptions">
                    <button onClick={() => play(0)}>Sabilulungan</button>
                    <button onClick={() => play(1)}>Manuk Dadali</button>
                    <button onClick={() => play(2)}>Cing Cangkeling</button>
                    <button onClick={() => play(3)}>Oray-orayan</button>
                    <button onClick={() => play(4)}>Tokecang</button>
                    <button onClick={mute}>{isMuted ? 'Unmute' : 'Mute'}</button>
                </div>
            </div>
        </div>
    );
}

export default Lagu;
