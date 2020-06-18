import ReactPlayer from 'react-player';
import Head from 'next/head';

const Crew = () => (
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
          line-height: 1.5em;
        }
        .crew{
          display: flex;
          width: 100vw;
          flex-direction: row;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          animation: slide-left 1s;
        }

        .content {
          font-family: 'Work Sans', sans-serif;
          font-weight: 800;
          letter-spacing: 3px;
          width: 100vw;
          height: 60vw;
          justify-content: center;
          text-align: center;
        }

        .content h2 {
          color: white;
          font-family: 'Work Sans', sans-serif;
          text-transform: uppercase;
          postion: absolute;
          top: 0;
          font-size: 40px;
          animation: slide-left 2s;
        }
        .content p {
          font-family: 'Work Sans', sans-serif;
          font-size: 16px;
          color: white;
          postion: relative;
          animation: slide-left 3s;
        }
        .content a {
          color: white;
          background: black;
          font-size: 12px;
          width: 200px;
          margin-top: 2em;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          padding: 1em;
          postion: relative;
          animation: slide-left 3s;
        }

        @keyframes slide-left{
          from {
            margin-left: 100%;
            width: 300%; 
          }
        
          to {
            margin-left: 0%;
            width: 100%;
          }
        }
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
    <section>
      <div className='content'>
        <h2>Crew</h2>
        <p>
          <h4>AERIAL FOOTAGE</h4>
          Matt Emmi
          <h4>FEATURING FOOTAGE FROM</h4>
          Ignite: A Burning Man Experience{' '}
          <h4>ADDITIONAL FOOTAGE FROM</h4>
          Adrenorama Mayan Warrior <h4>MUSIC</h4>
          Ezio Aguiar{' '}
          <h4>AUDIO ENGINEER</h4>
          Asha Iwanowicz
          <h4>PRODUCER/NARRATOR/EDITOR</h4>
          Eddie Schneckloth
        </p>
      </div>
    </section>
  </div>
);

export default Crew;
