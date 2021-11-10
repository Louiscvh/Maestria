import Player from "./components/Player.js"
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {

    const images = document.querySelectorAll('img[data-spawn]');
    const texts = document.querySelectorAll('h2[data-spawn]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting ) {
          entry.target.classList.add('reveal')
        }
      })
    })
  
    images.forEach((el) => {
      io.observe(el)
      el.addEventListener('mouseenter', () => {
        document.querySelector('.cursor div').style.filter = 'blur(5px)'
      })
      el.addEventListener('mouseleave', () => {
        document.querySelector('.cursor div').style.filter = 'blur(20px)'
      })
    })

    texts.forEach((el) => {
      io.observe(el)
    })

    window.addEventListener('load',() => {
      let letters = 'Maestria'
      let lettersContainer = document.querySelector("h1");
  
      [...letters].map((c,i) => {
        return lettersContainer.innerHTML += `<span style="transition-delay: ${0.07 * i}s">${c}</span>`
      })

      document.querySelector('body').classList.add("appear")

      setTimeout(() => {
        document.querySelectorAll('h1 span').forEach((c) => {
          c.style.transform = "translateY(0px)"
        })
        document.querySelector('#intro img').setAttribute('data-spawn', true)
      }, 100)

      setTimeout(() => {
        document.querySelector('.intro_text p').style.opacity = "1"
        document.querySelector('header img').classList.add("appear")
        document.querySelector('header h3').classList.add("appear")
        document.querySelector('#intro img').classList.add('reveal')
      }, 800)
    })
  })

  return (
    <div className="container">
      <header>
        <img src="./images/logo.webp" alt="" />
        <h3>Nouvel album</h3>
      </header>
      <main>
        <section id="intro">
          <div className="intro_text">
            <div className="eclipse"></div>
            <div className="title">
              <h1></h1>
            </div>
            <p>
              Nom féminin : Aisance, perfection dans l'exécution d'une œuvre
              d'art, dans la réalisation de quelque chose ; brio, virtuosité. 
            </p>
          </div>
          <img src="./images/p1.webp" alt="" />
          <div>
            <h3 className="intro_footer">Découvrir l’histoire</h3>
            <img className="intro_union" src="./images/union.webp" alt="" />
          </div>
        </section>
        <section id="story">
          <div>
            <h2 data-spawn>
              Les Djé, c’est l’histoire de deux frères, deux frères déterminés
              dans leur passion...
            </h2>
          </div>
          <img src="./images/p2.webp" data-spawn alt=""/>
        </section>
        <section id="work">
          <div className="work_images">
            <picture>
              <img src="./images/p3.webp" data-spawn alt=""/>
            </picture>
            <img src="./images/p4.webp" data-spawn alt="" />
            <div className="eclipse"></div>
          </div>
          <div>
            <h2 data-spawn>
              ...leur travail leur fit développer une maîtrise de leur art, la
              Maestria.
            </h2>
          </div>
        </section>
        <section id="years">
          <div>
            <h2 data-spawn>
              Maestria est la consécration d’une longue histoire et de
              nombreuses années de travail.
            </h2>
          </div>
          <div className="years_images">
            <img src="./images/p5.webp" data-spawn alt="" />
            <img src="./images/p6.webp" data-spawn alt="" />
            <div className="eclipse"></div>
          </div>
        </section>
        <iframe
          className="clip"
          title="Video clip"
          width="100%"
          src="https://www.youtube.com/embed/Vqf4dPoohJA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Player/>
        <section id="shop">
          <a className="shop_btn" href="https://www.google.fr">
            <span>Visiter la boutique</span>
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
