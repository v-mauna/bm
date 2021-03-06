import Head from 'next/head';
import Link from 'next/link';
import swapDivs from '../helperFuncs/swap';
import BgImg from '../images/IMG_0085.jpeg';
import Crew from '../sections/crew';
import Awards from '../sections/awards';
import BehindTheScenes from '../sections/behindTheScenes';

const Home = () => (
	<div className="container">
		<style jsx>
			{`
        @import
          url('https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Black&display=swap');
        .container {
          display: flex;
          flex-wrap: wrap;
          flex-shrink: 1;
          box-sizing: border-box;
          font-size: 16px;
          width: 100vw;
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

        #content {
          font-family: 'Lato', sans-serif;
          font-weight: 800;
          letter-spacing: 3px;
          width: 100vw;
          display: flex;
          flex-direction: column;
          height:100vh;
          justify-content: center;
          text-align: center;
        }

        #content h2 {
          color: white;
          font-family: 'Lexend Tera', sans-serif;
          text-transform: uppercase;
          postion: absolute;
          top: 0;
          font-size: 40px;
          animation: slide-left 2s;
        }
        #content p {
          font-family: 'Work Sans', sans-serif;
          font-size: 16px;
          color: white;
          postion: relative;
          animation: slide-left 3s;
        }
        #content a {
          color: white;
          background: black;
          font-size: 12px;
          width: 200px;
          font-weight: 800;
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

        #content a:hover {
          background: white;
          color: black;

        }
        .break{
          height: 2em;
        }
        .video-js{
          background: black;
        }
        #my-video{
          width:100vw;
          height:100vh;
          display: none;
      }

        #awards{
          background: #f4f3ee;
          height: fit-content;
          width: 100vw;
        }
        @media(max-width: 700px){
          #content{
            animation: none;
          }
          #content-text h2{
            font-size: 1.2em;
          }
          #content-text p{
            font-size: 12px;
            font-family: 'Arial',sans-serif;
          }
          #my-video{
            height: 100%;
            border: none;
            margin-top: 0;
          }
        }


      `}
		</style>
		<Head>
			<link href="https://vjs.zencdn.net/7.8.2/video-js.css" rel="stylesheet" />
			<meta name="description" content="" />
			<title>Burning Man</title>
		</Head>
		<header>
			<div id="content">
				<div id="content-text">
					<h2>Burning Man:The Build</h2>
					<p>
						{' '}
						a short film about the art of Burning Man
						<div className="break" />
						<a onClick={() => swapDivs('content-text', 'my-video')} title="Watch">
							Watch
						</a>
					</p>
				</div>
				<div>
					<video id="my-video" className="video-js" frameBorder="0" controls preload="auto">
						<source src="https://mattemmi.s3.amazonaws.com/1767551805.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</header>
		<section id="awards">
			<Awards />
		</section>
		<section id="crew">
			<Crew />
		</section>
		<section id="behindTheScenes">
			<BehindTheScenes />
		</section>
	</div>
);

export default Home;
