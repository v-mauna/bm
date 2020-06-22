import Head from 'next/head';
import img1 from '../images/FJX17202.jpg';
import img2 from '../images/IMG_2527.jpg';
import img3 from '../images//IMG_6036.jpg';
import img4 from '../images/IMG_0124.jpeg';
import img5 from '../images/IMG_0128.jpeg';
const Crew = () => (
  <div className="container">
    <style jsx>
      {`
      @import url('https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Black&display=swap');
        .container {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          font-size: 16px;
          width: 100vw;
          margin-top: 1em;
          justify-content: center;
          text-align: center;
          align-content: center;
          line-height: 1.5em;
        }
        .content {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          font-family: 'Work Sans', sans-serif;
          font-weight: 800;
          letter-spacing: 3px;
          width: 100vw;
          height: auto;
          padding: 1em;
          justify-content: center;
          text-align: center;
          align-content: center;
          animation: slide-left 1s;
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
        @keyframes slide-left{
            from {
              margin-left: 100%;
              width: 300%; 
            }
            to{
              margin-left: 0%;
              width: 100%;
            }
            }
        }
        
      `}
    </style>
    <Head>
      <script
        src="https://kit.fontawesome.com/6f92a9206c.js"
        crossOrigin="anonymous"
      />
      <meta name="description" content="" />
      <title>Burning Man</title>
    </Head>
    <section>
      <div className="content">
        <h2>Crew</h2>
        <p>
          AERIAL FOOTAGE: Matt Emmi<br/>
          FEATURING FOOTAGE FROM: Ignite: A Burning Man Experience<br/>
          ADDITIONAL FOOTAGE FROM: Adrenorama Mayan Warrior<br/>
          MUSIC: Ezio Aguiar<br/>
          AUDIO ENGINEER: Asha Iwanowicz<br/>
          NARRATOR: Mac McLean<br/>
         PRODUCER/EDITOR: Eddie Schneckloth<br/>
        </p>
      </div>
    </section>
  </div>
);

export default Crew;
