import Head from 'next/head'
import Stills from '../sections/stills'
import BgImg from '../images/IMG_0085.jpeg'

const Home = () => (
  <div className='container'>
    <style jsx>
      {`
        @import '~video-react/styles/scss/video-react' @import
          url('https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Blackdisplay=swap');
        .container {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          font-size: 16px;
          width: 100vw;
          margin-top: 1em;
          line-height: 2em;
        }
        header {
          display: flex;
          background: url(${BgImg});
          width: 100vw;
          flex-direction: column;
          padding: 0;
          background-size: cover;
          background-repeat: no-repeat;
          margin: 0;
          box-sizing: border-box;
        }

        .content {
          font-family: 'Lato', sans-serif;
          font-weight: 800;
          letter-spacing: 3px;
          width: 100vw;
          display: flex;
          flex-direction: column;
          height: 60vw;
          justify-content: center;

          text-align: center;
        }

        .content h2 {
          color: white;
          font-family: 'Lexend Tera', sans-serif;
          text-transform: uppercase;
          postion: absolute;
          top: 0;
          font-size: 40px;
          transition; 
        }
        .content p {
          font-family: 'Work Sans', sans-serif;
          font-size: 16px;
          color: white;
          postion: relative;
        }
        .content a {
          color: white;
          font-size: 12px;
          width: 100px;
          text-decoration: none;
          border: 3px solid white;
          padding: 1em;
        }

        .content a:hover {
          color: rgb(207, 217, 48);
          background: white;
        }

        .slider {
          postion: relative;
          overflow: hidden;
          height: 50vh;
          width: 100vw;
        }

        .slider h3 {
          color: white;
        }
      `}
    </style>
    <Head>
      <script
        src='https://kit.fontawesome.com/6f92a9206c.js'
        crossOrigin='anonymous'
      />
      <meta name='description' content='' />
      <title>Burning Man</title>
    </Head>
    <header>
      <div className='content'>
        <h2>Burning Man:The Build</h2>
        <p> a short film about the art of Burning Man</p>
      </div>
    </header>
    <section className='slider'>
      <h3>Behind The Scenes</h3>
    </section>
  </div>
)

export default Home
