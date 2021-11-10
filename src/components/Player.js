  import { useEffect } from "react";

const Player = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".player_content img");
    const texts = document.querySelectorAll("#player h2, #player p");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    });

    images.forEach((el) => {
      io.observe(el);
    });

    texts.forEach((el) => {
      io.observe(el);
    });
  });

  return (
    <section id="player">
      <h2 data-spawn>Nouvel album “Maestria”</h2>
      <p data-spawn>Disponible sur toutes les plateformes</p>
      <div className="player_content">
        <div>
          <img
            className="player_cover"
            src="./images/cover.jpg"
            alt=""
            data-spawn
          />
          <p>Ecouter sur :</p>
          <div className="player_btn">
            <a rel="noreferrer" target="_blank" href="https://open.spotify.com/album/29FRXjKDesQsuSMnailZI1?go=1&sp_cid=ff816b280218e6f3b1a67e9458fb5706&utm_source=embed_player_m&utm_medium=desktop&nd=1">
              <img src="./images/spotify.webp" alt="" data-spawn/>
            </a>
            <a rel="noreferrer" target="_blank" href="https://music.apple.com/es/album/1530555106?ign-itscg=30440&ign-itsct=catchall_p1">
              <img src="./images/applemusic.webp" alt="" data-spawn/>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.deezer.com/fr/album/171925172?app_id=140685&utm_source=partner_linkfire&utm_campaign=e7d69e821e4049dc61a3dc79a7d0be70&utm_medium=Original&utm_term=objective-stream&utm_content=album-171925172">
              <img src="./images/deezer.webp" alt="" data-spawn/>
            </a>
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
