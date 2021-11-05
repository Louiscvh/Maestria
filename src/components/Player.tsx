import React from "react";
import { useState } from "react";

const Player = () => {
  const [link, setLink] = useState<string>(
    "https://open.spotify.com/embed/album/29FRXjKDesQsuSMnailZI1?utm_source=generator"
  );

  return (
    <section id="player">
      <h2>Nouvel album “Maestria”</h2>
      <p>Disponible sur toutes les plateformes</p>
      <div className="player_content">
        <div>
          <img className="player_cover" src="./images/cover.jpg" alt="" />
          <p>Ecouter sur :</p>
          <div className="player_btn">
            <button
              
            >
              <img src="./images/spotify.webp" alt="" />
            </button>
            <button
              
            >
              <img src="./images/applemusic.webp" alt="" />
            </button>
            <button
            
            >
              <img src="./images/deezer.webp" alt="" />
            </button>
            <div className="eclipse"></div>
          </div>
        </div>
        <iframe
          title="Music Player"
          src="https://open.spotify.com/embed/album/29FRXjKDesQsuSMnailZI1?utm_source=generator"
          height="500px"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </section>
  );
};

export default Player;
