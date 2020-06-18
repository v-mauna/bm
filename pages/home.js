import Head from 'next/head';
import ReactPlayer from 'react-player';
import BgImg from '../images/IMG_0085.jpeg';
import Crew from '../sections/crew'
import Awards from '../sections/awards'

const Home = () => (
	<div className="container">
		<style jsx>
			{`
        @import
          url('https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Blackdisplay=swap');
        .container {
          display: flex;
          flex-wrap: wrap;
          flex-shrink: 1;
          box-sizing: border-box;
          font-size: 16px;
          width: 100vw;
          margin-top: 1em;
          line-height: 1.5em;
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
          animation: slide-left 1s;
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

        .content a:hover {
          background: white;
          color: black;

        }
        .break{
          height: 2em;
        }
        #awards{
          background: #eef;
        }


      `}
		</style>
		<Head>
			<script src="https://kit.fontawesome.com/6f92a9206c.js" crossOrigin="anonymous" />
			<meta name="description" content="" />
			<title>Burning Man</title>
		</Head>
		<header>
			<div className="content">
				<h2>Burning Man:The Build</h2>
				<p>
					{' '}
					a short film about the art of Burning Man
					<div className="break" />
          <a href="https://mattemmi.s3.amazonaws.com/1767551805.mp4">Watch</a>
				</p>
      </div>
		</header>
    <section id="awards">
			<Awards/>
		</section>
		<section id="crew">
			<Crew/>
		</section>
    
	</div>
);

export default Home;
