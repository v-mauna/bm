import Head from 'next/head';
import Image1 from '../images/FJX17202.jpg';
import Image2 from '../images/IMG_0090.jpeg';
import Image3 from '../images/IMG_0124.jpeg';
import Image4 from '../images/IMG_0128.jpeg';
import Image5 from '../images/IMG_0139.jpeg';
import Image6 from '../images/IMG_0143.jpeg';
import Image7 from '../images/IMG_6019.jpg';
import Image8 from '../images/IMG_6036.jpg';

const imgsArray = [ Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8 ];

const BehindTheScenes = () => (
	<div className="container">
		<style jsx>
			{`
      @import
       url('https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Black&display=swap');
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          text-align:
          box-sizing: border-box;
          font-size: 16px;
          width: 100vw;
          height: auto;
          margin-top: 1em;
          line-height: 1.5em;
        }

        .behindTheScenes{
          position: relative;
          display: flex;
          width: 100vw;
          background: rgb(230,230,230);
          flex-direction: row;
          padding: 1;
          margin: 1;
          box-sizing: border-box;
        }

        .content {
          margin-top: 2em;
          width: 100vw;
          height: auto;
          justify-content: center;
          align-content: center;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          color: black;
          margin: auto;
          animation: slide-left 2s;
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
            width: 40%;
            margin: 1em;
            height: auto;
           padding: 1em;
        }
        @media(max-width:700px){
          .content img{
            width: 90%;
            height: 90%;
            margin: 0;
            padding: 1em;
          }
        }
        
      `}
		</style>
		<Head>
			<script src="https://kit.fontawesome.com/6f92a9206c.js" crossOrigin="anonymous" />
			<meta name="description" content="" />
			<title>Burning Man</title>
		</Head>
		<section className="behindTheScenes">
			<div className="content">
				{imgsArray.map((image) => (
						<img src={image} alt="Behind The Scenes Image" />
				))}
			</div>
		</section>
	</div>
);

export default BehindTheScenes;
