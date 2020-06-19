import Head from 'next/head';
import Image1 from '../images/FJX17202.jpg';
import Image2 from '../images/IMG_0090.jpeg';
import Image3 from '../images/IMG_0124.jpeg';
import Image4 from '../images/IMG_0128.jpeg';
import Image5 from '../images/IMG_0139.jpeg';
import Image6 from '../images/IMG_0143.jpeg';
import Image7 from '../images/IMG_6019.jpg';
import Image8 from '../images/IMG_6036.jpg';

const imgsArray = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
];

const BehindTheScenes = () => (
  <div className="container">
    <style jsx>
      {`
      @import
       url('https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Black&display=swap');
        .container {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          font-size: 16px;
          width: 100vw;
          height: auto;
          margin-top: 1em;
          line-height: 1.5em;
        }

        .behindTheScenes{
          position: relative;
          justify-content: center;
          text-align: center;
          align-content: center;
          display: flex;
          width: 100vw;
          background: #eef;
          flex-direction: row;
          padding: 1;
          margin: 1;
          box-sizing: border-box;
          animation: slide-left 1s;
        }

        .content {
            margin-top: 2em;
          font-family: 'Work Sans', sans-serif;
          font-weight: 800;
          letter-spacing: 3px;
          width: 100vw;
          height: auto;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          color: black;
          justify-content: center;
          text-align: center;
          align-content: center;
          animation: slide-left 1s;
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

        .content img{
            width: 300px;
            height: 300px;
           padding: 1.5em;
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
    <section className="behindTheScenes">
      <div className="content">
        {imgsArray.map((image) => (
          <div>
            <img src={image} alt="Behind The Scenes Image" />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default BehindTheScenes;
