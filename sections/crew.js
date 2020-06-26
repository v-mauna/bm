import Head from 'next/head';
import AOS from 'aos';

const Crew = () => (
	<div id="container" >
		<style jsx>
      {`
      @import url('https://unpkg.com/aos@next/dist/aos.css')
      @import url('https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Black&display=swap');
        #container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          animation: slideUp 6s;
        }
        .title h2{
          color: white;
          font-family: 'Work Sans', sans-serif;
          text-transform: uppercase;
          width: 100vw;
          display: flex
          margin: auto;
          letter-spacing: 3px;
          text-align: center;
          font-size: 40px;
        }
        #content{
          display: flex:
          width: 100vw;
          margin-bottom: 50px;
          
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
        
          to {
            transform: translateY(0%);
          }
        }
        .headings {
          font-family: 'Work Sans', sans-serif;
          font-size: 16px;
          font-weight: 800;
          width: 50%;
          text-align: right;
          letter-spacing: 3px;
          justify-content: center;
          align-content: center;
          text-transform: lowercase;
          color: white;
          margin-bottom: 75px;
        }
        .headings:first-child {
          margin-right: 10px;
      } 

        .names{
          width: 50%;
          font-weight: 800;
          font-family: 'Work Sans', sans-serif;
          letter-spacing: 3px;
          font-size: 16px;
          text-transform: uppercase;
          color: white;
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
          .content{
            justify-content: left;
            text-align: left;
            align-content: left;
            letter-spacing: 0px;
          }
          .content h2{
            font-size: 1.2em
          }
          .content p{
            font-size: 8px;

          }
        }
        
      `}
		</style>
		<Head>
			<meta name="description" content="" />
			<title>Burning Man</title>
      <link rel="stylesheet" href="" />
		</Head>
		<div className="title">
			<h2>Crew</h2>
		</div>
		<div id="content">
			<div className="headings">
				<p>
					Aerial Footage:<br />
					FEATURING FOOTAGE FROM:<br />
					ADDITIONAL FOOTAGE FROM:<br />
					AUDIO ENGINEER:<br />
					NARRATOR:<br />
					PRODUCER/EDITOR:<br />
					Composition:<br />
					Music:<br />
				</p>
			</div>
			<div className="names">
				<p>
					Matt Emmi<br />
					Ignite: A Burning Man Experience<br />
					Adrenorama Mayan Warrior<br />
					Asha Iwanowicz<br />
					Mac McLean<br />
					Eddie Schneckloth<br />
					Ezio Aguiar<br />
					Tinush - Journey (Original)<br />
					Esteble - Buchlapest (Original Mix)<br />
					Ed Ed - Namaimo<br />
					Kid Atari - Intro (Detmolt Edit)<br />
				</p>
			</div>
		</div>
	</div>
);

export default Crew;
