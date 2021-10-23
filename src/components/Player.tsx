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
              onClick={() =>
                setLink(
                  "https://open.spotify.com/embed/album/29FRXjKDesQsuSMnailZI1?utm_source=generator"
                )
              }
            >
              <img src="./images/spotify.png" alt="" />
            </button>
            <button
              onClick={() =>
                setLink(
                  "https://embed.music.apple.com/fr/album/d%C3%A9brouillard-ep/1530555106"
                )
              }
            >
              <img src="./images/applemusic.png" alt="" />
            </button>
            <button
              onClick={() =>
                setLink("https://widget.deezer.com/widget/dark/album/171925172")
              }
            >
              <img src="./images/deezer.png" alt="" />
            </button>
          </div>
        </div>
        <iframe
          title="Music Player"
          src={link}
          height="500px"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </section>
  );
};

export default Player;
