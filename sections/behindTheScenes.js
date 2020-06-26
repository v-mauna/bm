import Head from 'next/head';
import Image1 from '../images/FJX17202.jpg';
import Image2 from '../images/IMG_0090.jpeg';
import Image3 from '../images/IMG_0124.jpeg';
import Image4 from '../images/IMG_0128.jpeg';
import Image5 from '../images/IMG_0139.jpeg';
import Image6 from '../images/IMG_0143.jpeg';
import Image7 from '../images/IMG_6019.jpg';
import Image8 from '../images/IMG_6036.jpg';
import Image9 from '../images/IMG_2787.jpg';
import Image10 from '../images/IMG_2817.jpg';
import Image11 from '../images/IMG_2675.jpg';
import Image12 from '../images/IMG_6133.jpg';

const imgsArray = [ Image1, Image2, Image11, Image10, Image3, Image4, Image5, Image6, Image7, Image8 ];

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
        }

        .behindTheScenes{
          border-top: 1px solid black;
          position: relative;
          display: flex;
          width: 100vw;
          background: #e9ecef;
          flex-direction: row;
          padding: 1;
          box-sizing: border-box;
        }

        .content {
          margin-top: 3.5em;
          width: 100vw;
          height: auto;
          justify-content: center;
          align-content: center;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          color: black;
          animation: slide-left 2s;
        }

        
        #img-container{
          position: relative;
          overflow: hidden;
          position: relative;
          justify-content: center;
          align-content: center;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin: auto;
        }

        #project-logo {
          display: flex;
          box-sizing: border-box;
          flex-wrap: wrap;
          width: 50%;
          margin: 1.5em;
          padding: 0;

          overflow: hidden;
        }
        
        #img-overlay{
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 50%;
          margin: auto;
          padding: 0;
          opacity: 0;
          transition: .5s ease;
        }
        #img-container:hover #project-logo{
          opacity: .8;
        }
        #img-container:hover #img-overlay{
          opacity: 1;
        }
        
        #img-overlay-text{
          color: white;
          font-size: 1em;
          position: absolute;
          text-transform: uppercase;
          font-family: 'Archivo Black', sans-serif;
          top: 50%;
          left: 50%;
          padding: 1em;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: center;
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
				<div id="img-container">
					<img id="project-logo" src={Image1} />
					<div id="img-overlay">
						<p id="img-overlay-text">A surprise Wedding on the playa</p>
					</div>
				</div>
				<div id="img-container">
					<img id="project-logo" src={Image2} />
					<div id="img-overlay">
						<p id="img-overlay-text">The Mayan Warrior Art Car at night</p>
					</div>
				</div>
				<div id="img-container">
					<img id="project-logo" src={Image10} />
					<div id="img-overlay">
						<p id="img-overlay-text">Catching drones after sunset</p>
					</div>
				</div>
				<div id="img-container">
					<img id="project-logo" src={Image3} />
					<div id="img-overlay">
						<p id="img-overlay-text">Euterpe and Abraxas at sunset</p>
					</div>
				</div>
				<div id="img-container">
					<img id="project-logo" src={Image4} />
					<div id="img-overlay">
						<p id="img-overlay-text">Garage Mahal with friends</p>
					</div>
				</div>
				<div id="img-container">
					<img id="project-logo" src={Image5} />
					<div id="img-overlay">
						<p id="img-overlay-text">Robot ♡ welcomes sunrise</p>
					</div>
				</div>
				<div id="img-container">
					<img id="project-logo" src={Image7} />
					<div id="img-overlay">
						<p id="img-overlay-text">Daily Duststorms</p>
					</div>
				</div>
				<div id="img-container">
					<img id="project-logo" src={Image8} />
					<div id="img-overlay">
						<p id="img-overlay-text">The Build Production team </p>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default BehindTheScenes;
