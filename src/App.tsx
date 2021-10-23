import React from "react";
import Player from "./components/Player";

const App = () => {
  return (
    <div className="container">
      <header>
        <img src="./images/logo.png" alt="" />
        <h3>Nouvel album</h3>
      </header>
      <main>
        <section id="intro">
          <div className="intro_text">
            <h1>Maestria</h1>
            <p>
              Nom féminin : Aisance, perfection dans l'exécution d'une œuvre
              d'art, dans la réalisation de quelque chose ; brio, virtuosité.
            </p>
          </div>
          <img src="./images/p1.jpg" alt="" />
          <div>
            <h3 className="intro_footer">Découvrir l’histoire</h3>
            <img className="intro_union" src="./images/union.png" alt="" />
          </div>
        </section>
        <section id="story">
          <div>
            <h2>
              Les Djé, c’est l’histoire de deux frères, deux frères déterminés
              dans leur passion...
            </h2>
          </div>
          <img src="./images/p2.jpg" alt="" />
        </section>
        <section id="work">
          <div className="work_images">
            <img src="./images/p3.jpg" alt="" />
            <img src="./images/p4.jpg" alt="" />
          </div>
          <div>
            <h2>
              ...leur travail leur fit développer une maîtrise de leur art, la
              Maestria.
            </h2>
          </div>
        </section>
        <section id="years">
          <div>
            <h2>
              ...leur travail leur fit développer une maîtrise de leur art, la
              Maestria.
            </h2>
          </div>
          <div className="years_images">
            <img src="./images/p5.jpg" alt="" />
            <img src="./images/p6.jpg" alt="" />
          </div>
        </section>
        <iframe
          title="Video clip"
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/Vqf4dPoohJA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Player />
        <section id="shop">
          <a className="shop_btn" href="https://www.google.fr">
            Visiter la boutique
          </a>
        </section>
        <footer>
          <p>Les Djé - 2021</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
