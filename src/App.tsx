import React from 'react';

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
            <p>Nom féminin : Aisance, perfection dans l'exécution d'une œuvre d'art, dans la réalisation de quelque chose ; brio, virtuosité.</p>
          </div>
          <img src="./images/p1.webp" alt="" />
          <h3 className="intro_footer">Découvrir l’histoire</h3>
        </section>
        <section id="histoire">
          <div>
            <h2>Les Djé, c’est l’histoire de deux frères, deux frères déterminés dans leur passion...</h2>
          </div>
          <img src="./images/p2.jpg" alt="" />
        </section>
      </main>
    </div>
  );
}

export default App;
